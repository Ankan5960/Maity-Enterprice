import React, { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import MainCableRoutes from './main-cable-route';
import { userLocations, UsertoMainCableRoutes } from './user-location';

// Custom icon for user location
const userIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'), // Path to the marker icon
  iconSize: [20, 30], // Icon size: the default is [25, 41] for this marker
  iconAnchor: [10, 30], // Anchor: This keeps the bottom of the icon at the location (horizontal center at [12], bottom at [41])
  popupAnchor: [-2, -25], // Popup anchor: [0, -41] ensures the popup appears right above the marker icon
});

// const LocateUser: React.FC<{ setUserLocation: (coords: LatLngTuple) => void }> = ({ setUserLocation }) => {
//   const map = useMap();

//   const handleLocateClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           const userCoords: LatLngTuple = [latitude, longitude];

//           // Set map view to user's location
//           map.flyTo(userCoords, 17); // Fly to the user's location with zoom level 17
//           setUserLocation(userCoords);
//         },
//         () => {
//           alert('Unable to retrieve your location');
//         }
//       );
//     } else {
//       alert('Geolocation is not supported by your browser');
//     }
//   };

//   return (
//     <button
//       className="absolute top-24 right-4 z-10 bg-transparent text-white py-2 px-4 rounded-md shadow-md"
//       onClick={handleLocateClick}
//     >
//       My Location
//     </button>
//   );
// };

const MapComponent: React.FC = () => {
  ///const [userLocation, setUserLocation] = useState<LatLngTuple | null>(null);
  const mapRef = useRef(null)

  return (
    <div className="w-full h-full py-4 px-2 relative">
      <div className='absolute top-20 left-0 w-full  h-10 bg-transparent text-white font-semibold z-10 text-center text-3xl '>
        Active Users
      </div>
      <MapContainer
        ref={mapRef}
        center={[22.88046552762111, 87.30577340556309]} // Center on your village coordinates
        zoom={17} // Default zoom level
        minZoom={13} // Minimum zoom level
        maxZoom={18} // Maximum zoom level
        dragging={true} // Disable dragging
        scrollWheelZoom={false} // Enable zooming with the scroll wheel
        doubleClickZoom={false} // Disable zooming with double-click
        zoomControl={true} // Keep zoom controls visible
        style={{ height: '700px', width: '100%', zIndex: 0 }}
      >
        {/* Tile Layer for the map */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Esri, DeLorme, NAVTEQ'
        />

        {/* Markers for users */}
        {userLocations.map((user) => (
          <Marker key={user.id} position={user.coordinates} icon={userIcon}>
            <Popup>{user.name}</Popup>
          </Marker>
        ))}

        {/* Polyline for cable routes */}
        {MainCableRoutes.map((route, index) => (
          <Polyline key={index} positions={route} color="red" />
        ))}

        {UsertoMainCableRoutes.map((route, index) => (
          <Polyline key={index} positions={route} color="blue" />
        ))}

        {/* {userLocation && (
          <Marker position={userLocation} icon={userIcon}>
            <Popup>Your Location</Popup>
          </Marker>
        )} */}

        {/* Locate Me Button */}
        {/* <LocateUser setUserLocation={setUserLocation} /> */}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
