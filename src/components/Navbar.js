// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the custom CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="navbar p-4 shadow-md h-16">
      <div className="flex items-center justify-between h-full">
        <button onClick={toggleMenu} className="navbar-button">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <span className="navbar-title">Admin Portal</span>
        <div className="relative flex items-center text-white font-semibold cursor-pointer" onClick={toggleDropdown}>
          <svg className="w-5 h-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c3.313 0 6-2.686 6-6S15.313 2 12 2 6 4.686 6 8s2.687 6 6 6zm0 2c-4.418 0-8 2.686-8 6v1h16v-1c0-3.314-3.582-6-8-6z" />
          </svg>
          <span>Administrator</span>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col mt-4 bg-blue-600 text-black shadow-lg h-screen p-2 w-40">
          <Link to="/dashboard" className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200 cursor-pointer">
            Dashboard
          </Link>
          <Link to="/offense-records" className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200 cursor-pointer">
            Offense Records
          </Link>
          <Link to="/drivers-list" className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200 cursor-pointer">
            Drivers List
          </Link>
          <Link to="/reports" className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200 cursor-pointer">
            Reports
          </Link>
          <Link to="/offense-list" className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200 cursor-pointer">
            Offense List
          </Link>
          <Link to="/user-list" className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200 cursor-pointer">
            User List
          </Link>
          <Link to="/settings" className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200 cursor-pointer">
            Settings
          </Link>
        </div>
      )}

      {dropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-9m-9 9l-9-9m9 9v10" />
            </svg>
            <span className="text-sm">My Account</span>
          </div>
          <div className="dropdown-item">
            <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-sm">Logout</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
