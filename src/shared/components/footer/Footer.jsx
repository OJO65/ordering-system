import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-400 py-6 mt-5">
      {/* Copyright */}
      <div className="text-center text-sm mt-4">
        <p>&copy; {new Date().getFullYear()} Mbao Zetu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
