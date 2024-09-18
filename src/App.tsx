import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Contact from './components/Contact/contact';
import Service from './components/Service/service';
import About from './components/About/about';
import Plans from './components/Plans/plan';
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
