import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to EduGrow SA</h1>
      <p className="text-lg text-gray-700 mb-6">
        A one-stop early childhood development hub for South African nursery schools.
      </p>
      <div className="flex gap-4">
        <Link to="/register" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Register School</Link>
        <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;
