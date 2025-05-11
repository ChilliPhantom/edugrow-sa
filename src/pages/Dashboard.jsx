import React, { useState } from 'react';
import LanguageSelector from '../components/LanguageSelector';
import WeeklyContent from '../components/WeeklyContent';

const Dashboard = () => {
  const [language, setLanguage] = useState('english');
  const [religion, setReligion] = useState('neutral');

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">EduGrow SA - Teacher Dashboard</h2>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <div className="mt-4">
        <label className="mr-2 font-medium">Religion:</label>
        <select
          className="border rounded px-2 py-1"
          value={religion}
          onChange={(e) => setReligion(e.target.value)}
        >
          <option value="neutral">Neutral</option>
          <option value="christian">Christian</option>
          <option value="muslim">Muslim</option>
        </select>
      </div>
      <WeeklyContent week={1} language={language} />
    </div>
  );
};

export default Dashboard;
