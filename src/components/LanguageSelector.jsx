import React from 'react';

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <div className="mt-4">
      <label className="mr-2 font-medium">Language:</label>
      <select
        className="border rounded px-2 py-1"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="english">English</option>
        <option value="afrikaans">Afrikaans</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
