import React,{useState,useRef, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet';

// Custom icon for user location
const userIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'), // Path to the marker icon
  iconSize: [20, 30], // Icon size: the default is [25, 41] for this marker
  iconAnchor: [10, 30], // Anchor: This keeps the bottom of the icon at the location (horizontal center at [12], bottom at [41])
  popupAnchor: [-2, -25], // Popup anchor: [0, -41] ensures the popup appears right above the marker icon
});

// Define user locations with explicit LatLngTuple type
const userLocations: { id: number; name: string; coordinates: LatLngTuple }[] = [
  { id: 1, name: 'Sahil Chowdhury', coordinates: [22.88178894801033, 87.30585855506881] },
  { id: 2, name: 'Sukalyan Kundu', coordinates: [22.881159855852193, 87.30124837537014] },
  { id: 3, name: 'Tarak De', coordinates: [22.881646332775674, 87.30322784872384] },
  { id: 4, name: 'Ankan Maity', coordinates: [22.881073423800906, 87.30612270304695] },
  { id: 5, name: 'Sarbani Dutta', coordinates: [22.879014404984066, 87.30432066086448] },
  //{ id: 6, name: 'DR SUKANTA MANNA', coordinates: [22.881084, 87.306142] },
  { id: 7, name: 'Santanu Roy', coordinates: [22.88065212598115, 87.30647193729283] },
  { id: 8, name: 'WEBEL AMARSHI SC', coordinates: [22.881649519741064, 87.30394784112461] },
  { id: 9, name: 'WEBEL Nohari High School', coordinates: [22.881495, 87.305783] },
  { id: 10, name: 'Shankha Bhattachary', coordinates: [22.87816900543782, 87.30567071453888] },
];

// Define cable routes with LatLngTuple type for the array of coordinate pairs
const cableRoutes: LatLngTuple[][] = [
  //[[22.87816900543782, 87.30567071453888],[22.879014404984066, 87.30432066086448]], // Array of LatLngTuple pairs
];

const MapComponent: React.FC = () => {
  const [mapClicked, setMapClicked] = useState(false);
  const mapRef= useRef(null)

  return (
    <div className="w-full h-full py-4 px-2 relative">
      <div className='absolute top-20 left-0 w-full  h-10 bg-transparent text-white font-semibold z-10 text-center text-3xl '>
        Active Users
      </div>
      <MapContainer
        center={[22.88046552762111, 87.30577340556309]} // Center on your village coordinates
        zoom={17} // Default zoom level
        minZoom={13} // Minimum zoom level
        maxZoom={18} // Maximum zoom level
        dragging={true} // Disable dragging
        scrollWheelZoom={false} // Enable zooming with the scroll wheel
        doubleClickZoom={false} // Disable zooming with double-click
        zoomControl={true} // Keep zoom controls visible
        style={{ height: '700px', width: '100%' ,zIndex: 0}}
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
        {cableRoutes.map((route, index) => (
          <Polyline key={index} positions={route} color="blue" />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
