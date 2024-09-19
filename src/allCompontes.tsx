import React from "react";
import Home from "./components/pages/Home/home";
import About from "./components/pages/About/about";
import Plans from "./components/pages/Plans/plan";
import Service from "./components/pages/Service/service";
import Contact from "./components/pages/Contact/contact";
import MapComponent from "./components/pages/Map/mapComponent";

export const AllComponents: React.FC = () => {
    return (
        <>
            <Home />
            <About />
            <Plans />
            <MapComponent />
            <Service />
            <Contact />
        </>
    );
}