import React, { useEffect, useState } from 'react';
import './Home2.css'; // Ensure this CSS file is correctly linked

const Home2 = () => {
  const [time, setTime] = useState(new Date());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const currentDate = time.toLocaleDateString();  // Display current date
  const currentTime = time.toLocaleTimeString();  // Display current time

  return (
    <div className="home-container">
      {/* Top Center Title */}
      <header className="top-title">TRAFFIC ENFORCEMENT MANAGEMENT SYSTEM</header>

      {/* Calendar and Clock Section */}
      <div className="datetime-container">
        <div className="calendar">
          <h2>Today's Date</h2>
          <p>{currentDate}</p>
        </div>
        <div className="clock">
          <h2>Current Time</h2>
          <p>{currentTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Home2;
