
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify'; 
const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    toast.info('Logged out successfully!');
    logout(); 
    setDropdownOpen(false); 
  };

  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 transition duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src="companylogo.png" 
            alt="Logo" 
            className="h-8 w-8 mr-2" 
          /> 
          <Link to="/" className="text-2xl font-bold">User Management</Link>
        </div>

        {/* Profile Dropdown or Login Button */}
        <div className="relative">
          {auth.isLoggedIn ? (
            <>
              <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                <img src="user.png" alt="Profile" className="h-8 w-8 rounded-full hidden md:block" /> 
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10">
                  <ul className="py-2">
                    <li>
                      <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Home</Link>
                    </li>
                    <li>
                      <Link to="/users" className="block px-4 py-2 hover:bg-gray-200">Users</Link>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-200">Log Out</button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Link 
              to="/login" 
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded transition duration-300 transform hover:scale-110 ease-in-out animate-bounce"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
