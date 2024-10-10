
import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUsers, deleteUser } from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify'; 

const UserList = () => {
  const [users, setUsers] = useState([]);  
  const [allUsers, setAllUsers] = useState([]);  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext); 

  useEffect(() => {
    if (!auth.token) {
      navigate('/login'); 
    }
  }, [auth.token, navigate]);

 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers(currentPage);  
        setUsers(response.data.data);  
        setTotalPages(response.data.total_pages);  
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    fetchUsers();
  }, [currentPage]);
 
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const allUserPromises = [];
        for (let page = 1; page <= totalPages; page++) {  
          allUserPromises.push(getUsers(page));
        }
        const responses = await Promise.all(allUserPromises);
        const combinedUsers = responses.flatMap(response => response.data.data);
        setAllUsers(combinedUsers);  
      } catch (error) {
        console.error('Failed to fetch all users:', error);
      }
    };
    fetchAllUsers();
  }, [totalPages]);

  const handlePageChange = (page) => {
    setCurrentPage(page);  
    setSearchQuery('');  
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id); 
        setUsers(users.filter(user => user.id !== id));  
        setAllUsers(allUsers.filter(user => user.id !== id));  
        toast.success('User deleted successfully!');
      } catch (error) {
        toast.error('Failed to delete user.');
        console.error('Failed to delete user:', error);
      }
    }
  };

   
  const getRandomColor = () => {
    const colors = [
      'bg-blue-100',
      'bg-green-100',
      'bg-yellow-100',
      'bg-red-100',
      'bg-purple-100',
      'bg-indigo-100',
      'bg-pink-100',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
   const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filteredUsers = allUsers.filter(user =>
        user.first_name.toLowerCase().includes(query.toLowerCase()) ||
        user.last_name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
      );
      setUsers(filteredUsers); 
    } else {
      const start = (currentPage - 1) * 6;  
      const end = start + 6;
      setUsers(allUsers.slice(start, end));  
    }
  };

 
  const handleResetFilter = () => {
    setSearchQuery('');  
    const start = (currentPage - 1) * 6;  
    const end = start + 6;
    setUsers(allUsers.slice(start, end));  
  };

  return (
    <div className="p-4 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen transition duration-500 ease-in-out">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <input
        type="text"
        placeholder="Search..."
        className="mb-4 p-2 border rounded"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button
        onClick={handleResetFilter}
        className="mb-4 bg-yellow-300 text-white px-4 py-2 rounded hover:bg-yellow-500 transition duration-300"
      >
        Reset Filter
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
        {users.map((user) => (
          <div
            key={user.id}
            className={`p-4 rounded shadow-md flex flex-col items-start transition-transform duration-300 transform hover:scale-105 ${getRandomColor()}`}
          >
            <div className="flex items-center w-full mb-2">
              <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="w-12 h-12 rounded-full mr-4" />
              <div className="flex-grow">
                <h2 className="font-semibold">{user.first_name} {user.last_name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <div className="flex space-x-2 w-full mt-auto">
              <Link
                to={`/users/edit/${user.id}`}
                className="bg-green-300 text-white px-2 py-1 rounded hover:bg-green-500 transition duration-300 transform hover:scale-105 w-full text-center"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-300 text-white px-2 py-1 rounded hover:bg-red-500 transition duration-300 transform hover:scale-105 w-full text-center"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      {searchQuery === '' && (
        <div className="flex justify-between mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-blue-600 transition duration-300"
          >
            Previous
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-blue-600 transition duration-300"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default UserList;
