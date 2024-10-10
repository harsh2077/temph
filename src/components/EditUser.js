
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser, getUser } from '../services/api';
import { toast } from 'react-toastify'; 
const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser(id); 
        setUser(response.data.data); 
        
        console.log(response.data);
        console.log(user);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, user); 
      console.log(user);
      toast.success('User updated successfully!');
      navigate('/users'); 
    } catch (error) {
      toast.error('Failed to update user.'); 
      console.error('Failed to update user:', error);
    }
  };

  return (
    <div className="mx-auto p-4 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen transition duration-500 ease-in-out">
      <h1 className="text-2xl font-bold mb-4">Edit {user.first_name} Information</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 bg-gradient-to-r from-purple-400 to-red-400">
        <input
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="block w-full border border-gray-300 p-2 mb-2 rounded"
        />
        <input
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="block w-full border border-gray-300 p-2 mb-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="block w-full border border-gray-300 p-2 mb-4 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
};

export default EditUser;
