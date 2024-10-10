import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">© 2024 User Management System. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Additional Section */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold">Get in Touch</h2>
        <p className="text-sm">For inquiries, please contact us at: <a href="mailto:info@usermanagement.com" className="text-blue-200 hover:underline">info@usermanagement.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
