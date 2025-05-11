import React from 'react';

const WeeklyContent = ({ week, language }) => {
  const filename = `week-0${week}-${language === 'afrikaans' ? 'af' : 'en'}.pdf`;

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Week {week} Content</h3>
      <a
        href={`/lesson-samples/${filename}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Download Lesson Plan ({language})
      </a>
    </div>
  );
};

export default WeeklyContent;
