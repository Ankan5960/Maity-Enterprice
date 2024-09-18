import React from "react";
//import { TypeAnimation } from "react-type-animation";
import TextAninmation from "./textAninmation";
import { NavLink } from "react-router-dom";

const style=`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Exo', sans-serif;
        z-index: -1;
    }

    .circles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .circles li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: animate 25s linear infinite;
        bottom: -150px;
    }

    .circles li:nth-child(1) {
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }

    .circles li:nth-child(2) {
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }

    .circles li:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }

    .circles li:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }

    .circles li:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }

    .circles li:nth-child(6) {
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
    }

    .circles li:nth-child(7) {
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
    }

    .circles li:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }

    .circles li:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }

    .circles li:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
    }

    @keyframes animate {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }

        100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }
    }
    `

const Home: React.FC = () => {
    return (
        <div className="relative w-full h-screen bg-gradient-to-l z-0 from-[#6970f0] to-[#4e54c8] ">
            
                <div className=" mx-auto px-6 text-center ">
                  <div className="py-8 sm:py-16 md:py-24 lg:py-40"><TextAninmation name="Maity Enterprise" /></div>
                  <h2 className=" text-md sm:text-lg md:text-xl lg:text-3xl xl:text-5xl text-center font-semibold text-white">
                    Fast, Reliable, and Affordable Broadband Internet
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-xs md:text-md lg:text-lg mt-4">
                    Join Maity Enterprise and enjoy seamless internet connectivity for your home or business.
                  </p>
                  <NavLink to="/Plans">
                  <button className="mt-6 inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700">
                    Explore Plans
                  </button>  
                  </NavLink>
                </div>

                <div className=" mx-auto px-6 pt-10">
                  <h3 className="text-sm sm:text-xl md:text-2xl font-semibold text-white text-center mb-12">Why Choose Us</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 shadow-md rounded-lg">
                      <h4 className="text-xl font-bold mb-4">High-Speed Internet</h4>
                      <p className="text-gray-600">Enjoy blazing fast internet speeds for all your browsing, streaming, and gaming needs.</p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Reliable Connection</h4>
                      <p className="text-gray-600">With our robust infrastructure, experience minimal downtime and high reliability.</p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                      <h4 className="text-xl font-bold mb-4">24/7 Support</h4>
                      <p className="text-gray-600">Our customer support team is available round the clock to assist you with any issues.</p>
                    </div>
                  </div>
                </div>
            

            <div className="absolute inset-0">
                <ul className="circles">
                    {[...Array(10)].map((_, i) => (
                        <li key={i}></li>
                    ))}
                </ul>
            </div>

            <style>
                {style}
            </style>
        </div>
    );
}

export default Home;


// import React from 'react';
// import { NavLink } from 'react-router-dom';


// const Home: React.FC = () => {
//   return (
//     <div className=" bg-gray-100">

      // <section className="bg-white py-20">
      //   <div className="container mx-auto px-6 text-center">
      //     <h2 className="text-4xl font-semibold text-gray-800">
      //       Fast, Reliable, and Affordable Broadband Internet
      //     </h2>
      //     <p className="text-gray-600 mt-4">
      //       Join Maity Enterprise and enjoy seamless internet connectivity for your home or business.
      //     </p>
      //     <NavLink to="/Plans">
      //     <button className="mt-6 inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700">
      //       Explore Plans
      //     </button>  
      //     </NavLink>
      //   </div>
      // </section>

//       <section className="py-20 bg-gray-50">
        // <div className="container mx-auto px-6">
        //   <h3 className="text-3xl font-semibold text-gray-800 text-center mb-12">Why Choose Us</h3>
        //   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        //     <div className="bg-white p-6 shadow-md rounded-lg">
        //       <h4 className="text-xl font-bold mb-4">High-Speed Internet</h4>
        //       <p className="text-gray-600">Enjoy blazing fast internet speeds for all your browsing, streaming, and gaming needs.</p>
        //     </div>
        //     <div className="bg-white p-6 shadow-md rounded-lg">
        //       <h4 className="text-xl font-bold mb-4">Reliable Connection</h4>
        //       <p className="text-gray-600">With our robust infrastructure, experience minimal downtime and high reliability.</p>
        //     </div>
        //     <div className="bg-white p-6 shadow-md rounded-lg">
        //       <h4 className="text-xl font-bold mb-4">24/7 Support</h4>
        //       <p className="text-gray-600">Our customer support team is available round the clock to assist you with any issues.</p>
        //     </div>
        //   </div>
        // </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
