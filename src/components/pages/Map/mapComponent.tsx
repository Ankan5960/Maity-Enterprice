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
import myLocationDot from '../../../assets/icons/Png/myLocation.png';
import MyLocationicon from '../../../assets/icons/tsx-componet-icon/my-location-icon';
import HomeIcon from '../../../assets/icons/tsx-componet-icon/home-icon';
import AlertBox from '../../Alert-box/alert-box-component';

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

const MyLocationIcon = new L.Icon({
  iconUrl: require('../../../assets/icons/Png/myLocation.png'), // Path to the marker icon
  iconSize: [35, 35], // Icon size: the default is [25, 41] for this marker
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
  const [errorAlertMessage, setErrorAlertMessage] = useState<string | null>(null);
  const [successAlertMessage, setSuccessAlertMessage] = useState<string | null>(null);

  const handleLocateClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userCoords: LatLngTuple = [latitude, longitude];

          map.flyTo(userCoords, 17);
          setMyLocation(userCoords);

          // Check if the user's location is within the defined area
          if (
            latitude >= minLat &&
            latitude <= maxLat &&
            longitude >= minLng &&
            longitude <= maxLng
          ) {
            setErrorAlertMessage(null); // Reset alert message if within bounds
            setSuccessAlertMessage('Your location is within the specified area'); // Show the alert box
          } else {
            setErrorAlertMessage('Your location is outside the specified area'); // Show the alert box
          }
        },
        () => {
          setErrorAlertMessage('Unable to retrieve your location'); // Show error if location cannot be retrieved
        },
        {
          enableHighAccuracy: true, // Request more accurate location
          timeout: 5000,            // Optional: Set a timeout for the request
          maximumAge: 0             // Optional: Don't use cached position
        }
      );
    } else {
      setErrorAlertMessage('Geolocation is not supported by your browser'); // Show error if Geolocation is not supported
    }
  };

  return (
    <>
      {errorAlertMessage && <AlertBox message={errorAlertMessage} type='error' onClose={() => setErrorAlertMessage(null)} />}
      {successAlertMessage && <AlertBox message={successAlertMessage} type='success' onClose={() => setSuccessAlertMessage(null)} />}
      <button
        className="bg-transparent bg-slate-100 text-black hover:bg-slate-300 p-1 rounded-md shadow-md"
        onClick={handleLocateClick}
      >
        <MyLocationicon className="w-7 h-7 fill-blue-600" />
      </button>
      <button
        className="bg-transparent bg-slate-100 text-black hover:bg-slate-300 p-1 rounded-md shadow-md"
        onClick={() => map.flyTo([22.88046552762111, 87.30577340556309], 17)}
      >
        <HomeIcon className="w-7 h-7 fill-blue-600" />
      </button>
    </>

  );
};


const MapComponent: React.FC = () => {
  const [MyLocation, setMyLocation] = useState<LatLngTuple | null>(null);
  const mapRef = useRef(null)
  //const [details, setDetails] = useState<any>(null);


  return (
    <div className="w-full h-full z-0 py-4 px-2 relative ">
      {/* <div className='absolute bottom-10 left-0 w-full  h-10 bg-transparent text-white font-semibold z-10 text-center text-2xl hidden md:block  '>
        Active Users
      </div> */}

      <MapContainer
        ref={mapRef}
        center={[22.88046552762111, 87.30577340556309]} // Center on your village coordinates
        zoom={16} // Default zoom level
        minZoom={13} // Minimum zoom level
        maxZoom={18} // Maximum zoom level
        dragging={true} // Disable dragging
        scrollWheelZoom={false} // Enable zooming with the scroll wheel
        doubleClickZoom={false} // Disable zooming with double-click
        zoomControl={true} // Keep zoom controls visible
        style={{
          height: window.innerWidth < 768 ? '500px' : '700px', // Adjust height based on screen width
          width: 'auto',
          zIndex: 0,
          borderRadius: '10px'
        }}
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
          <Marker position={MyLocation} icon={MyLocationIcon}>
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

        <div style={{ position: 'absolute', bottom: '25px', right: '10px', zIndex: 1000, backgroundColor: 'white', borderRadius: '5px' }}>
          <LocateUser setMyLocation={setMyLocation} />
        </div>

        <div className='absolute h-initial w-initial p-2 bottom-5 left-3 border-2 rounded-md bg-opacity-90 bg-slate-200 text-black font-semibold text-xs text-justify ' style={{ zIndex: 999 }}>
          <ul className=''>
            <li className="inline-flex items-center">
              <span className="mr-2">&#8226;</span>
              Main Cable Routes:
              <div className='h-1 w-8 rounded-full bg-yellow-500 ml-1'></div>
            </li><br />
            <li className="inline-flex items-center">
              <span className="mr-2">&#8226;</span>
              Main to user cable:
              <div className='h-1 w-8 rounded-full bg-white ml-1'></div>
            </li><br />
            <li className="inline-flex items-center">
              <span className="mr-2">&#8226;</span>
              Users:
              <img src={locationBlue} alt="Location" className="h-4 w-4 ml-1" />
              <img src={locationRed} alt="Location" className="h-4 w-4 ml-1" />
            </li><br />
            <li className="inline-flex items-center">
              <span className="mr-2">&#8226;</span>
              Splitter:
              <img src={splittericon} alt='Splitter' className="h-5 w-5 ml-1" />
            </li><br />
            <li className="inline-flex items-center">
              <span className="mr-2">&#8226;</span>
              My Location:
              <img src={myLocationDot} alt="My Location" className="h-7 w-7 ml-1" />
            </li>
          </ul>
        </div>

      </MapContainer>

      {/* <div>
        chgchchh
      </div> */}

    </div>
  );
};

export default MapComponent;
