"use client";

import Link from 'next/link';
import { FaSearch, FaChevronDown, FaUser, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Slidebar from "./Slidebar";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For the hamburger menu (mobile)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For the sidebar (Slidebar)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="h-[63px] max-w-[1200px] flex justify-between items-center text-white p-4 opacity-100 relative">

      {/* Logo Section */}
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <span className="text-5xl font-bold font-urbanist text-white">V</span>
          <span className="text-3xl font-bold font-urbanist text-white">YB</span>
        </div>
        <div className="ml-9 text-[10px] font-bold font-urbanist text-white mt-[-15px]">
          STORE
        </div>
      </div>

      {/* Search Bar (Visible on all screen sizes, but smaller on mobile) */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search Creator/Product"
          className="rounded-full px-4 py-2 ml-[15px] w-[200px] sm:w-[200px] md:w-[200px] lg:w-[300px] text-black"
        />
        <FaSearch className="absolute right-4 text-gray-500" />
      </div>

      {/* Hamburger Menu for Mobile, aligned next to the search bar */}
      <div className="flex items-center ml-4 md:hidden" onClick={toggleSidebar}>
        <FaBars className="text-white text-3xl" />
      </div>

      {/* Desktop Navigation Links */}
      <div className="flex items-center space-x-6 hidden md:flex">
        <Link href="/creators" className="hover:text-green-400 font-urbanist font-extrabold text-2xl">
          Fav Creators
        </Link>
        <Link href="/merchandise" className="hover:text-green-400 font-urbanist font-extrabold text-2xl">
          Merchandise
        </Link>
        <Link href="/brand" className="hover:text-green-400 font-urbanist font-extrabold text-2xl">
          Brand
        </Link>
        <Link href="/digital" className="hover:text-green-400 font-urbanist font-extrabold text-2xl">
          Digital
        </Link>

        {/* User Profile and Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-6 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300 font-urbanist p-2"
            onClick={toggleDropdown}
          >
            <FaUser />
            <FaChevronDown />
          </button>
          {isDropdownOpen && (
            <Slidebar />
          )}
        </div>
      </div>

      {/* Mobile Sidebar (Slidebar) */}
      {isSidebarOpen && (
        <div className="fixed inset-0  bg-opacity-75 z-40 flex">
          <div className=" w-64 h-full text-white p-4 relative">
            {/* Sidebar Links */}
            <Slidebar />
          </div>
          {/* Overlay to close the sidebar */}
          <div className="flex-1" onClick={toggleSidebar}></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
