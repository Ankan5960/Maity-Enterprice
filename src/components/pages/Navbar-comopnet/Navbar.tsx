import React, { useState, useRef, useEffect } from 'react';
import logo from '../../../assets/logo/Maity_Enterprice_logo.jpg'
import { NavLink } from "react-router-dom";

import HomeIcon from '../../../assets/icons/home-icon';
import AboutIcon from '../../../assets/icons/about-icon';
import ContactIcon from '../../../assets/icons/contact-icon';
import MapIcon from '../../../assets/icons/map-icon';
import ServiceIcon from '../../../assets/icons/service-icon';
import PlanIcon from '../../../assets/icons/plan-icon';
import MenuIcon from '../../../assets/icons/menu-icon';
import CloseIcon from '../../../assets/icons/close-icon';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

   // Handle closing sidebar on scroll if sidebar is open
   useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);  // Close sidebar on scroll
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);


  return (
    <nav ref={elementRef} className={`z-50 sticky top-0  ${isScrolled ? 'bg-slate-300 bg-opacity-50' : 'text-white bg-gradient-to-l bg-transparent from-[#6970f0] to-[#4e54c8]'} `} >
      <div className="max-w-full mx-auto px-4 sm:px-4 lg:px-4 ">
        <div className={`flex items-center justify-between h-12 md:h-14 `}>
          
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/Home">
                <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
              </NavLink>
            </div>
          </div>

         <div className={`flex items-center justify-center min-w-max px-3 text-sm md:text-lg font-bold font-sans ${isOpen ? 'hidden' : 'block'}`}>
          Maity Enterprise
         </div>

          <div className={`hidden sm:hidden lg:flex md:flex flex-grow flex-row-reverse  w-full `}>
              <NavLink to="/Contact">
                <button className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-black">
                Contact
                </button>
              </NavLink>
              <NavLink to="/Service">
                <button className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-black">
                Services
                </button>
              </NavLink>
              <NavLink to="/Map">
                <button className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-black">
                Map
                </button>
              </NavLink>
              <NavLink to="/Plans">
                <button className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-black">
                  Plans
                </button>
              </NavLink>
              <NavLink to="/About">
                <button className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-black">
                About
                </button>
              </NavLink>
              <NavLink to="/Home">
                <button className="flex  px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-black">
                  <p className="ml-1">Home</p>
                </button>
              </NavLink>
          </div>

          <div className="flex lg:hidden md:hidden sm:flex">
            <div className="flex">
              {/* Toggle Button */}
              <button
                onClick={toggleSidebar}
                className="flex top-2 right-5 p-3 bg-transparent  text-white hover:bg-gray-100 hover:text-black rounded"
              >
                {isOpen ? null : <MenuIcon className={`h-5 w-5 hover:fill-black ${isScrolled? 'fill-black' : 'fill-white'}`} />}
              </button>

              {/* Sidebar */}
              <div
                ref={sidebarRef}
                className={`fixed top-0 right-0 h-full w-1/3 rounded-lg bg-gray-200 bg-opacity-90 border-l-2 border-bg-gray-500 text-white p-0 z-50 transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"
                  }`}
              >
                {/* Close Button */}
                <div className='w-full h-12 pt-5 pl-3 border-b-2 border-b-zinc-200 items-start '>
                  <button
                    onClick={toggleSidebar}
                    className=" top-4 left-4 w-6 h-6  items-center bg-rose-400 hover:bg-red-700 rounded"
                  >
                    <CloseIcon className="h-5 w-5 mx-auto" />
                  </button>
                </div>


                <ul className="text-left ">
                  <NavLink to="/Home">
                  <li className='p-2 w-full hover:bg-gray-100'><button className="flex text-neutral-950 rounded-md text-md font-medium ">
                    <HomeIcon className='h-5 w-5' />
                    <p className="ml-1">Home</p>
                  </button>
                  </li>
                  </NavLink>
                  <NavLink to="/About">
                  <li className='p-2 w-full hover:bg-gray-100'><button className="flex text-neutral-950 rounded-md text-md font-medium">
                    <AboutIcon className='h-5 w-5' />
                    <p className="ml-1">About</p>
                  </button>
                  </li>
                  </NavLink>
                  <NavLink to="/Plans">
                  <li className='p-2 w-full hover:bg-gray-100'><button className="flex text-neutral-950 rounded-md text-md font-medium">
                    <PlanIcon className='h-5 w-5' />
                    <p className="ml-1">Plans</p>
                  </button>
                  </li>
                  </NavLink>
                  <NavLink to="/Map">
                  <li className='p-2 w-full hover:bg-gray-100'><button className="flex text-black rounded-md text-md font-medium">
                    <MapIcon className='h-5 w-5' />
                    <p className="ml-1">Map</p>
                  </button>
                  </li>
                  </NavLink>
                  <NavLink to="/Service">
                  <li className='p-2 w-full hover:bg-gray-100'><button className="flex text-black rounded-md text-md font-medium">
                    <ServiceIcon className='h-5 w-5' />
                    <p className="ml-1">Services</p>
                  </button>
                  </li>
                  </NavLink>
                  <NavLink to="/Contact">
                  <li className='p-2 w-full hover:bg-gray-100'><button className="flex text-black rounded-md text-md font-medium ">
                    <ContactIcon className='h-5 w-5' />
                    <p className="ml-1">Contact</p>
                  </button>
                  </li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
