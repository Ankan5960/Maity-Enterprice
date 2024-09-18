import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar-comopnet/Navbar';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import Service from './components/Service/service';
import About from './components/About/about';
import Plans from './components/Plans/plan';
import Footer from './components/Footer/footer';
import AllComponents from './root';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";


const router=createBrowserRouter([
  {
    path: "/",
    element: <AllComponents />,
    children: [
      {
        index: true,
        element: <Navigate to="Home" replace />,
      },
      {
        path: "Home",
        element: <Home />, 
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
