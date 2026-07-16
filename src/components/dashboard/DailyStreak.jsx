import React from 'react';

const DailyStreak = ({ streak, lastActive }) => {
  return (
    <div className="daily-streak">
      <div className="streak-count">
        <span className="fire">🔥</span>
        <h3>{streak}</h3>
      </div>
      <p>Day Streak</p>
      {lastActive && <small>Last active: {lastActive}</small>}
    </div>
  );
};

export default DailyStreak;
