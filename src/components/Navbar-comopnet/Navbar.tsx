import React, { useState, useRef } from 'react';
import logo from '../../assets/Maity_Enterprice_logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHouse, faAddressCard, faAddressBook, faHammer } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import HomeIcon from '../../assets/homeIcon.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <nav ref={elementRef} className={`bg-gray-200 border-b-2 border-bg-zinc-200`} >
      <div className="max-w-full mx-auto px-4 sm:px-4 lg:px-4 ">
        <div className={`flex items-center justify-between h-12 md:h-14 `}>
          
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-black text-xl font-bold">
                <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
              </a>
            </div>
          </div>

         <div className={`flex items-center justify-center min-w-max px-3 text-sm md:text-lg font-bold font-sans ${isOpen ? 'hidden' : 'block'}`}>
          Maity Enterprice
         </div>

          <div className={`hidden sm:hidden lg:flex md:flex flex-grow flex-row-reverse  w-full `}>
            
              <a href="/contact" className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                Contact
              </a>
          
            <a href="/services" className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
              Services
            </a>
            <a href="/about" className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
              About
            </a>
            <a href="/" className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 ">
              {/* <FontAwesomeIcon icon={faHouse} className='pr-1 text-purple-600' /> */}
              <p>Home</p>
            </a>

          </div>

          <div className="flex lg:hidden md:hidden sm:flex">
            <div className="flex">
              {/* Toggle Button */}
              <button
                onClick={toggleSidebar}
                className="flex top-2 right-5 p-3 bg-gray-200  text-black hover:bg-gray-100 rounded"
              >
                {isOpen ? null : <FontAwesomeIcon icon={faBars} />}
              </button>

              {/* Sidebar */}
              <div
                className={`fixed top-0 right-0 h-full w-1/3 rounded-lg bg-gray-200 bg-opacity-70 border-l-2 border-bg-gray-500 text-white p-0 z-50 transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"
                  }`}
              >
                {/* Close Button */}
                <div className='w-full h-12 pt-5 pl-3 border-b-2 border-b-zinc-200 items-start '>
                  <button
                    onClick={toggleSidebar}
                    className=" top-4 left-4 w-6 h-6  items-center bg-rose-400 hover:bg-red-700 rounded"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>


                <ul className="text-left ">
                  <li className='p-2 w-full hover:bg-gray-100'><a href="/" className=" text-neutral-950 rounded-md text-md font-medium ">
                    <FontAwesomeIcon icon={faHouse} className='pr-3' />
                    Home
                  </a>
                  </li>
                  <li className='p-2 w-full hover:bg-gray-100'><a href="/about" className=" text-neutral-950  w-full rounded-md text-md font-medium">
                    <FontAwesomeIcon icon={faAddressCard} className='pr-3' />
                    About
                  </a>
                  </li>
                  <li className='p-2 w-full hover:bg-gray-100'><a href="/services" className=" text-black rounded-md text-md font-medium">
                    <FontAwesomeIcon icon={faHammer} className='pr-3 ' />
                    Services
                  </a>
                  </li>
                  <li className='p-2 w-full hover:bg-gray-100'><a href="/contact" className="text-black rounded-md text-md font-medium ">
                    <FontAwesomeIcon icon={faAddressBook} className='pr-3' />
                    Contact
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-red-500 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-purple-500">
        Responsive Box
      </div> */}

    </nav>
  );
};

export default Navbar;