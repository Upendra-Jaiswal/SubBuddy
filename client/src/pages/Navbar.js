// src/components/Navbar.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <div className="text-lg font-bold">MyApp</div>
      <div className="flex items-center space-x-4">
        <span className="text-sm">Username</span>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isSidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
    </div>
  );
};

export default Navbar;
