
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as apiLogin } from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'; 
import Layout from './Layout';
import { toast } from 'react-toastify'; 
const Login = () => {
  
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/users');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiLogin(email, password);
      login(response.data.token);
      localStorage.setItem('token', response.data.token); 
      localStorage.setItem('email', email); 
      toast.success('Login successful!'); 
      navigate('/users');

    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Login Failed!'); 
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('email'); 
    toast.info('Logged out successfully!');
    navigate('/'); 
  };

  return (
  
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen transition duration-500 ease-in-out">
      <div className="bg-gradient-to-r from-red-300 to-yellow-300 shadow-md rounded-lg p-6 md:p-8 w-11/12 md:w-96 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="block w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="block w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
        </form>

        {/* Sign in with box */}
        <div className="mt-6 text-center">
          <div className="border-t border-gray-300 py-2 relative">
            <span className=" px-2 text-gray-500 absolute left-1/2 transform -translate-x-1/2 -top-0.5">
              Sign in with
            </span>
          </div>
          <div className="flex justify-center space-x-4 mt-2 top-3">
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <FaGoogle size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-800">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-700">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-6 mb-4"></div>

        <div className="mt-2 text-center">
          <button className="text-gray-500 hover:underline cursor-pointer">
            Not signed up? <span className="underline">Register</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
