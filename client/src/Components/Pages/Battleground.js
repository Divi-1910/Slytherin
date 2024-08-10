import React, { useState } from 'react';
import Carousel from './Carousel';

const Battleground = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const images = [
    'https://media.geeksforgeeks.org/wp-content/uploads/20230124181625/Weekly-Coding-Contest-Platforms.png',
    'https://files.codingninjas.in/article_images/codingcompetitionblog-23489.webp',
    'https://media.geeksforgeeks.org/wp-content/uploads/20240503171539/GeeksforGeeksInterviewSeriesPracticeToCrackCodingRounds.gif',
  ];

  const upcomingContests = [
    { name: 'Contest A', date: '2024-08-20', time: '10:00 AM', description: 'A fun coding contest.' },
    { name: 'Contest B', date: '2024-08-25', time: '1:00 PM', description: 'Solve challenging problems.' },
  ];

  const pastContests = [
    { name: 'Contest C', date: '2024-07-15', time: '9:00 AM', description: 'Great coding event.' },
    { name: 'Contest D', date: '2024-07-30', time: '3:00 PM', description: 'Another exciting contest.' },
  ];

  return (
    <div className={`battleground-container ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-900'} p-4 min-h-screen relative`}>
      <Carousel images={images} />
      
      <section className="upcoming-contests mb-8">
        <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-900'}`}>Upcoming Contests</h2>
        {upcomingContests.map((contest, index) => (
          <div key={index} className={`contest-card p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-green-50'} shadow-lg rounded-lg mb-4 flex items-center justify-between`}>
            <div className="flex-1">
              <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-900'}`}>{contest.name}</h3>
              <p className={`text-gray-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{contest.date} | {contest.time}</p>
            </div>
            <div className="flex-2 pl-4">
              <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>{contest.description}</p>
            </div>
          </div>
        ))}
      </section>
      
      <section className="past-contests">
        <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-900'}`}>Past Contests</h2>
        {pastContests.map((contest, index) => (
          <div key={index} className={`contest-card p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-green-50'} shadow-lg rounded-lg mb-4 flex items-center justify-between`}>
            <div className="flex-1">
              <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-900'}`}>{contest.name}</h3>
              <p className={`text-gray-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{contest.date} | {contest.time}</p>
            </div>
            <div className="flex-2 pl-4">
              <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>{contest.description}</p>
            </div>
          </div>
        ))}
      </section>

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed bottom-4 right-4 p-2 rounded shadow-md transition-colors duration-300 ${isDarkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-white'}`}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Battleground;
