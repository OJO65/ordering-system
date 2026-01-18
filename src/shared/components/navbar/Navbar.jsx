import React, { useState } from 'react';
import logo from '../../../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useProducts } from '../../../context/Context';
import { Link } from 'react-router-dom';
import {
  faCartArrowDown,
  faHome,
  faShop,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { cart } = useProducts();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle the sidebar
  };

  return (
    <div className="nav-container shadow-lg mt-2 flex justify-between items-center lg:mx-10">
      
      {/* Navbar Left */}
      <div className="nav-left flex items-center">
        <Link to="/">
          <img src={logo} alt="logo.jpg" className="w-16" />
        </Link>
        <h1 className="font-serif text-4xl">Mbao Zetu</h1>
      </div>

      {/* Navbar Links */}
      <div className="hidden md:flex p-2 items-center">
        <ul className="flex justify-evenly gap-5 text-1xl">
          <Link to="/"><li>
            <FontAwesomeIcon icon={faHome} /> Home
          </li>
          </Link>
          <Link to="/shop"><li>
            <FontAwesomeIcon icon={faShop} /> Shop
          </li>
          </Link>
          <Link to="/cart"> <li className="relative">
            <FontAwesomeIcon icon={faCartArrowDown} /> Cart
            {cart.length > 0 && (
              <span className="absolute top-[-15px] right-[15px] bg-red-600 text-white rounded-full px-2 text-sm">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </li>
          </Link>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div className="relative block md:hidden p-2 mx-3">
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <div className="space-y-1">
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
          </div>
        </button>
        {cart.length > 0 && (
          <span className="absolute top-[-8px] right-[-10px] bg-red-600 text-white rounded-full px-2 text-xs">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </div>

      {/* Sidebar Off-canvas */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 w-52`}
      >
        <button
          className="absolute top-4 right-5 text-4xl"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          &times;
        </button>
        <ul className="mt-10 p-5 flex flex-col items-center gap-5 text-1xl">
         <Link to="/"> <li>
            <FontAwesomeIcon icon={faHome} /> Home
          </li>
          </Link>
          <Link to="/shop"> <li>
            <FontAwesomeIcon icon={faShop} /> Shop
          </li>
          </Link>
          <Link to="/cart"><li>
            <FontAwesomeIcon icon={faCartArrowDown} /> Cart
            {cart.length > 0 && (
              <span className="absolute top-[136px] right-[100px] bg-red-600 text-white rounded-full px-2 text-xs">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </li>
          </Link>
        </ul>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
