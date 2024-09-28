import { LatLngTuple } from "leaflet";
import MainCableRoutes from "./main-cable-route";
import {userLocations} from "./user-location";
import { SplitterLocations } from "./splitter-location";

// Function to calculate the distance between two points (Haversine formula)
export const calculateDistance=(pointA: LatLngTuple, pointB: LatLngTuple): number =>{
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
export const findBestRoute=()=> {
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

  