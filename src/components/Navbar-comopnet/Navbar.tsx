import React, { useState } from 'react';
import logo from '../../assets/Maity_Enterprice_logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-white ${isOpen ? ' ' : 'border-b-2 border-bg-zinc-200'}`} >
      <div className="max-w-full mx-auto px-4 sm:px-4 lg:px-4 ">
        <div className={`flex items-center justify-between h-16 `}>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-black text-xl font-bold">
                <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
              </a>
            </div>
          </div>
          
          <div className={`hidden sm:hidden lg:flex md:flex flex-grow flex-row-reverse  w-full `}>
              <a href="/" className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                Home
              </a>
              <a href="/about" className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                About
              </a>
              <a href="/services" className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                Services
              </a>
              <a href="/contact" className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                Contact
              </a>
          </div>

          <div className={`flex flex-col pt-20 ${isOpen ? 'block' : 'hidden'} sm:hidden md:hidden}`}>
              <a href="/" className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                  Home
                </a>
                <a href="/about" className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                  About
                </a>
                <a href="/services" className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                  Services
                </a>
                <a href="/contact" className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                  Contact
                </a>
              </div>
          
          <div className="flex lg:hidden md:hidden sm:flex">
              <button
                onClick={toggleMenu}
                className="bg-white text-black items-center justify-center p-2 rounded-md hover:bg-gray-200 focus:outline-none"
              >
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
              </button>
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
