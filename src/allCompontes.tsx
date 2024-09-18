import React from "react";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import Service from "./components/Service/service";
import About from "./components/About/about";
import Plans from "./components/Plans/plan";

export const AllComponents: React.FC = () => {
    return (
        <>
            <Home />
            <About />
            <Plans />
            <Service />
            <Contact />
        </>
    );
}