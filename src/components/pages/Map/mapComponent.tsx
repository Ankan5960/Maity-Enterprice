import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet';
import MainCableRoutes from './logics/main-cable-route';
import { userLocations, UsertoMainCableRoutes } from './logics/user-location';
import { SplitterLocations } from './logics/splitter-location';

// Custom icon for user location
const userIcon = new L.Icon({
  iconUrl: require('../../../assets/icons/Png/locationBlue.png'), // Path to the marker icon
  iconSize: [22, 22], // Icon size: the default is [25, 41] for this marker
  iconAnchor: [11, 20], // Anchor: This keeps the bottom of the icon at the location (horizontal center at [12], bottom at [41])
  popupAnchor: [0, -25], // Popup anchor: [0, -41] ensures the popup appears right above the marker icon
});

const RedUserIcon = new L.Icon({
  iconUrl: require('../../../assets/icons/Png/locationRed1.png'), // Path to the marker icon
  iconSize: [22, 22], // Icon size: the default is [25, 41] for this marker
  iconAnchor: [11, 20], // Anchor: This keeps the bottom of the icon at the location (horizontal center at [12], bottom at [41])
  popupAnchor: [0, -25], // Popup anchor: [0, -41] ensures the popup appears right above the marker icon
});


const splitterIcon=new L.Icon({
  iconUrl: require('../../../assets/icons/Png/splliter1.png'), // Path to the marker icon
  iconSize: [17, 17], // Icon size: the default is [25, 41] for this marker
  iconAnchor: [8, 8], // Anchor: This keeps the bottom of the icon at the location (horizontal center at [12], bottom at [41])
  popupAnchor: [0, -5], // Popup anchor: [0, -41] ensures the popup appears right above the marker icon
})

const LocateUser: React.FC<{ setUserLocation: (coords: LatLngTuple) => void }> = ({ setUserLocation }) => {
  const map = useMap();

  const handleLocateClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userCoords: LatLngTuple = [latitude, longitude];
  
          // Set map view to user's location
          map.flyTo(userCoords, 17); // Fly to the user's location with zoom level 17
          setUserLocation(userCoords);
        },
        () => {
          alert('Unable to retrieve your location');
        },
        {
          enableHighAccuracy: true, // Request more accurate location
          timeout: 5000,             // Optional: Set a timeout for the request
          maximumAge: 0              // Optional: Don't use cached position
        }
      );
    } else {
      alert('Geolocation is not supported by your browser');
    }
  };

  return (
    <button
      className="absolute top-24 right-4 z-10 bg-transparent text-white py-2 px-4 rounded-md shadow-md"
      onClick={handleLocateClick}
    >
      My Location
    </button>
  );
};

const MapComponent: React.FC = () => {
  const [MyLocation, setMyLocation] = useState<LatLngTuple | null>(null);
  const mapRef = useRef(null)

  return (
    <div className="w-full h-full py-4 px-2 relative ">
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
        style={{ height: '700px', width: 'auto', zIndex: 0 ,borderRadius: '10px'}}
      // className='h-full w-full z-0'
      >
        {/* Tile Layer for the map */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Esri, DeLorme, NAVTEQ'
        />
        
        {/* Markers for users */}
        {userLocations.map((user) => (
          <Marker key={user.id} position={user.coordinates} icon={user.RedUser ? RedUserIcon : userIcon}>
            <Popup>{user.name}</Popup>
          </Marker>
        ))}

        {/* Polyline for cable routes */}
        {MainCableRoutes.map((route, index) => (
          <Polyline key={index} positions={route} color="orange" />
        ))}

        {UsertoMainCableRoutes.map((route, index) => (
          <Polyline key={index} positions={route} color="white" />
        ))}

        {/* My Location Marker */}
        {MyLocation && (
          <Marker position={MyLocation} icon={userIcon}>
            <Popup>Your Location</Popup>
          </Marker>
        )}
        {/* Splitter Markers */}
        {SplitterLocations.map((location, index) => (
          <Marker key={index} position={location} icon={splitterIcon}>
            <Popup>Splitter-{index+1}</Popup>
          </Marker>
        ))
        }

        {/* Locate Me Button */}
        <div className="absolute top-24 right-4 z-20">
          <LocateUser setUserLocation={setMyLocation} />
        </div>

        
      </MapContainer>
    </div>
  );
};

export default MapComponent;
