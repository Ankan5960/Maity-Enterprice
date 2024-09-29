import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet';
import MainCableRoutes from './logics/main-cable-route';
import { userLocations, UsertoMainCableRoutes } from './logics/user-location';
import { SplitterLocations } from './logics/splitter-location';

import locationBlue from '../../../assets/icons/Png/locationBlue.png';
import locationRed from '../../../assets/icons/Png/locationRed1.png';
import splittericon from '../../../assets/icons/Png/splliter1.png';
import MyLocationIcon from '../../../assets/icons/tsx-componet-icon/my-location-icon';

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


const splitterIcon = new L.Icon({
  iconUrl: require('../../../assets/icons/Png/splliter1.png'), // Path to the marker icon
  iconSize: [17, 17], // Icon size: the default is [25, 41] for this marker
  iconAnchor: [8, 8], // Anchor: This keeps the bottom of the icon at the location (horizontal center at [12], bottom at [41])
  popupAnchor: [0, -5], // Popup anchor: [0, -41] ensures the popup appears right above the marker icon
})

const LocateUser: React.FC<{ setMyLocation: (coords: LatLngTuple) => void }> = ({ setMyLocation }) => {
  const map = useMap();

  // Define the bounds of the area using latitude and longitude
  const minLat = 22.875509816416184;
  const maxLat = 22.884064170207083;
  const minLng = 87.29902289902364;
  const maxLng = 87.31088506702115;

  const handleLocateClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userCoords: LatLngTuple = [latitude, longitude];

          // Check if the user's location is within the defined area
          if (
            // latitude >= minLat &&
            // latitude <= maxLat &&
            // longitude >= minLng &&
            // longitude <= maxLng
            true
          ) {
            // Set map view to user's location and zoom level 17
            map.flyTo(userCoords, 17);
            setMyLocation(userCoords);
          } else {
            alert('Your location is outside the specified area');
          }
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
      className="bg-transparent bg-slate-100 text-black hover:bg-slate-300 p-1 rounded-md shadow-md"
      onClick={handleLocateClick}
    >
      <MyLocationIcon className="w-7 h-7 fill-black" />
    </button>
  );
};


const MapComponent: React.FC = () => {
  const [MyLocation, setMyLocation] = useState<LatLngTuple | null>(null);
  const mapRef = useRef(null)
  const [details, setDetails] = useState<any>(null);

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
        style={{ height: '700px', width: 'auto', zIndex: 0, borderRadius: '10px' }}
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
            <Popup>Splitter-{index + 1}</Popup>
          </Marker>
        ))
        }

        <div style={{ position: 'absolute', bottom: '25px', right: '10px', zIndex: 1000 }}>
          <LocateUser setMyLocation={setMyLocation} />
        </div>

      </MapContainer>

      <div className='hidden absolute h-32 w-52 p-2 bottom-8 left-5 border-2 rounded-md bg-opacity-40 bg-slate-300 text-black font-semibold z-10 text-xs text-justify '>
        <ul>
          <li className="inline-flex items-center">
            Cable Routes:
            <img src={locationBlue} alt="Location" className="h-4 w-4" />
          </li><br />
          <li className="inline-flex items-center">
            Users:
            <img src={locationBlue} alt="Location" className="h-4 w-4 ml-1" />
            <img src={locationRed} alt="Location" className="h-4 w-4 ml-1" />
          </li><br />
          <li className="inline-flex items-center">
            Splitter:
            <img src={splittericon} className="h-4 w-4 ml-1" />
          </li><br />
          <li className="inline-flex items-center">
            My Location:
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MapComponent;
