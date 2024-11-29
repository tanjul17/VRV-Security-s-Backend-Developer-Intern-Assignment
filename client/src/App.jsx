import React, { useState, useEffect } from 'react';
import './App.css';
import FlipCard from './components/userLogin/userLogin';
import ServicesCard from './components/services/service';
import ProfileCard from './components/userProfile/userProfile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);

    // Check user's previous theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to body
    document.body.classList.toggle('dark-mode', isDarkMode);

    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (

    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Header Section */}
      <header className="header">
        <button
          onClick={toggleTheme}
          className="theme-toggle"
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <h1> 🧑‍🎓Role-Based Access Control System🧑‍🎓</h1>
      </header>
      {/* Body Section */}
      <div className="panel">
        {isAuthenticated ? (
          <ProfileCard setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <FlipCard setIsAuthenticated={setIsAuthenticated} />
        )}
        <ServicesCard />
      </div>
    </div>
  );
}

export default App;
