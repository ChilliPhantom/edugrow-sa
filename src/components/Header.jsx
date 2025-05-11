import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">EduGrow SA</h1>
    <nav className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      <Link to="/admin" className="hover:underline">Admin</Link>
    </nav>
  </header>
);

export default Header;
