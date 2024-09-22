import { LatLngTuple } from "leaflet";
import MainCableRoutes from "./main-cable-route";

let lastId=0
export const userLocations: { id: number; name: string; coordinates: LatLngTuple }[] = [];

userLocations.push({id: lastId=lastId+1, name: 'Sahil Chowdhury', coordinates: [22.88178894801033, 87.30585855506881]})
userLocations.push({id: lastId=lastId+1, name: 'Sukalyan Kundu', coordinates: [22.881159855852193, 87.30124837537014]})
userLocations.push({id: lastId=lastId+1, name: 'Tarak De', coordinates: [22.881646332775674, 87.30322784872384]})
userLocations.push({id: lastId=lastId+1, name: 'Ankan Maity', coordinates: [22.881073423800906, 87.30612270304695]})
userLocations.push({id: lastId=lastId+1, name: 'Sarbani Dutta', coordinates: [22.879014404984066, 87.30432066086448]})
//userLocations.push({id: lastId=lastId+1, name: 'DR SUKANTA MANNA', coordinates: [22.881084, 87.306142]})
userLocations.push({id: lastId=lastId+1, name: 'Santanu Roy', coordinates: [22.88065212598115, 87.30647193729283]})
userLocations.push({id: lastId=lastId+1, name: 'WEBEL AMARSHI SC', coordinates: [22.881649519741064, 87.30394784112461]})
userLocations.push({id: lastId=lastId+1, name: 'WEBEL Nohari High School', coordinates: [22.881495, 87.305783]})
userLocations.push({id: lastId=lastId+1, name: 'Shankha Bhattachary', coordinates: [22.87816900543782, 87.30567071453888]})


// Function to calculate the distance between two points (Haversine formula)
function calculateDistance(pointA: LatLngTuple, pointB: LatLngTuple): number {
  const toRad = (x: number) => (x * Math.PI) / 180;
  
  const lat1 = pointA[0], lng1 = pointA[1];
  const lat2 = pointB[0], lng2 = pointB[1];

  const R = 6371; // Earth radius in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return distance;
}

// Find the best route from user to the closest point on the main cable routes
function findBestRoute() {
  const UsertoMainCableRoutes: LatLngTuple[][] = [];

  userLocations.forEach((user) => {
    let closestPoint: LatLngTuple | null = null;
    let minDistance = Infinity;

    // Loop through each segment of the MainCableRoutes to find the closest point
    MainCableRoutes.forEach((routeSegment) => {
      routeSegment.forEach((cablePoint) => {
        const distance = calculateDistance(user.coordinates, cablePoint);
        if (distance < minDistance) {
          minDistance = distance;
          closestPoint = cablePoint;
        }
      });
    });

    // If a closest point is found, create a new route from user to that closest point
    if (closestPoint) {
      UsertoMainCableRoutes.push([user.coordinates, closestPoint]);
    }
  });

  return UsertoMainCableRoutes;
}

// Find and assign the best routes
export const UsertoMainCableRoutes = findBestRoute();

//console.log(UsertoMainCableRoutes); // This will print the user to main cable routes
