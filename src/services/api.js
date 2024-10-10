
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = (email, password) => api.post('/login', { email, password });
export const getUsers = (page) => api.get(`/users?page=${page}`);
export const getUser = (id, user) => api.get(`/users/${id}`, user);
export const updateUser = (id, user) => api.put(`/users/${id}`, user);
export const deleteUser = (id) => api.delete(`/users/${id}`);
