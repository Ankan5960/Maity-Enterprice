import React from "react";  
import Home from "./components/Home/home";
import About from "./components/About/about";
import Service from "./components/Service/service";
import Contact from "./components/Contact/contact";

const AllComponents: React.FC = () => {
    return(
        <>
            <Home/>
            <About/>
            <Service/>
            <Contact/>
        </>
    );
}

export default AllComponents;