// src/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-semibold mt-4">
        WELCOME TO TRAFFIC ENFORCEMENT MANAGEMENT SYSTEM
      </h1>
      <div className="w-1/2 mx-auto border-b-2 border-blue-600 mt-2" />

      <div className="flex justify-center mt-6 mx-4">
        {/* Card 1 */}
        <div className="card">
          <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
          </svg>
          <div>
            <h2 className="card-title">Today's Offense</h2>
            <p className="card-description">Description for today's offenses.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3V3z" />
          </svg>
          <div>
            <h2 className="card-title">Total Drivers Listed</h2>
            <p className="card-description">Description for total drivers listed.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v20m10-10H2" />
          </svg>
          <div>
            <h2 className="card-title">Total Traffic Offenses</h2>
            <p className="card-description">Description for total traffic offenses.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
