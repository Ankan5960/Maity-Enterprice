import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/Maity_Enterprice_logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHouse, faAddressCard, faAddressBook, faHammer, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

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
    <nav ref={elementRef} className={`z-10 sticky top-0  ${isScrolled ? 'bg-slate-300 bg-opacity-50' : 'text-white bg-gradient-to-l bg-transparent from-[#6970f0] to-[#4e54c8]'} `} >
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
          Maity Enterprice
         </div>

          <div className={`hidden sm:hidden lg:flex md:flex flex-grow flex-row-reverse  w-full `}>
              <NavLink to="/Contact">
                <button className='"text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-black'>
                Contact
                </button>
              </NavLink>
              <NavLink to="/Service">
                <button className='"text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-black'>
                Services
                </button>
              </NavLink>
              <NavLink to="/Plans">
                <button className='"text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-black'>
                  Plans
                </button>
              </NavLink>
              <NavLink to="/About">
                <button className='"text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-black'>
                About
                </button>
              </NavLink>
              <NavLink to="/Home">
                <button className='"text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-black'>
                  Home
                </button>
              </NavLink>
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
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>


                <ul className="text-left ">
                  <NavLink to="/Home">
                  <li className='p-2 w-full hover:bg-gray-100'><button className=" text-neutral-950 rounded-md text-md font-medium ">
                    <FontAwesomeIcon icon={faHouse} className='pr-3' />
                    Home
                  </button>
                  </li>
                  </NavLink>
                  <NavLink to="/About">
                  <li className='p-2 w-full hover:bg-gray-100'><button className=" text-neutral-950 rounded-md text-md font-medium">
                    <FontAwesomeIcon icon={faAddressCard} className='pr-3' />
                    About
                  </button>
                  </li>
                  </NavLink>
                  <NavLink to="/Plans">
                  <li className='p-2 w-full hover:bg-gray-100'><button className=" text-neutral-950 rounded-md text-md font-medium">
                    <FontAwesomeIcon icon={faMoneyBill} className='pr-3'/>
                    Plans
                  </button>
                  </li>
                  </NavLink>
                  <NavLink to="/Service">
                  <li className='p-2 w-full hover:bg-gray-100'><button className=" text-black rounded-md text-md font-medium">
                    <FontAwesomeIcon icon={faHammer} className='pr-3 ' />
                    Service
                  </button>
                  </li>
                  </NavLink>
                  <NavLink to="/Contact">
                  <li className='p-2 w-full hover:bg-gray-100'><button className="text-black rounded-md text-md font-medium ">
                    <FontAwesomeIcon icon={faAddressBook} className='pr-3' />
                    Contact
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
