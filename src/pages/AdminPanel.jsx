import React from 'react';

const AdminPanel = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Admin Panel – Upload Weekly Lessons</h2>
      <form className="flex flex-col gap-4 max-w-lg">
        <input type="number" placeholder="Week Number" className="border p-2 rounded" />
        <select className="border p-2 rounded">
          <option value="english">English</option>
          <option value="afrikaans">Afrikaans</option>
        </select>
        <select className="border p-2 rounded">
          <option value="neutral">Neutral</option>
          <option value="christian">Christian</option>
          <option value="muslim">Muslim</option>
        </select>
        <input type="file" className="border p-2 rounded" />
        <button type="submit" className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700">Upload</button>
      </form>
    </div>
  );
};

export default AdminPanel;
