import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import About from './components/pages/About/about';
import Contact from './components/pages/Contact/contact';
import Plans from './components/pages/Plans/plan';
import Service from './components/pages/Service/service';
import MapComponent from './components/pages/Map/mapComponent';
import Root from './root';
import { AllComponents } from './allCompontes';

const router=createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="Home" replace />,
      },
      {
        path: "Home",
        element: <AllComponents />, 
      },
      {
        path: "Plans",
        element: <Plans />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Service",
        element: <Service />,
      },
      {
        path: "Map",
        element: <MapComponent />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "*",
        element: <div>
          Error
        </div>,
      }
    ]
  },
]);

export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
  
}
