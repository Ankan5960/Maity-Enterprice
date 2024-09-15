import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar-comopnet/Navbar';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import Service from './components/Service/service';
import About from './components/About/about';
import AllComponents from './allComponents';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import image from './assets/SlideShowImages/SlideshowImages';

const App: React.FC = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllComponents />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
