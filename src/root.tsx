import React from "react";  
import Navbar from "./components/Navbar-comopnet/Navbar";
import Footer from "./components/Footer/footer";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
    return(
        <>
            <Navbar />
            <Outlet  />
            <Footer />
        </>
    );
}

export default Root;