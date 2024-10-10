import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen transition duration-500 ease-in-out relative overflow-hidden">
    <h1 className="text-5xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
      Welcome to the User Management System
    </h1>
    <p className="text-xl text-white mb-8 animate__animated animate__fadeInUp">
      Manage your users efficiently and effectively.
    </p>
    <Link
      to="/login"
      className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn"
    >
      Get Started
    </Link>
  </div>
);

export default Home;
