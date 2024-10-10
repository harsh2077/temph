import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    isLoggedIn: !!localStorage.getItem('token'), // Check if user is logged in
  });

  const login = (token) => {
    localStorage.setItem('token', token);
    setAuth({ token, isLoggedIn: true });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ token: null, isLoggedIn: false });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



