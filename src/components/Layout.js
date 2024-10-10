
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen transition duration-500 ease-in-out">
      {children}
    </div>
  );
};

export default Layout;
