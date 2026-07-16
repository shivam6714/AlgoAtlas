import React from 'react';

const Statistics = ({ topicsCompleted, totalTopics, score, achievements }) => {
  return (
    <div className="statistics">
      <div className="stat-item">
        <h4>Topics Completed</h4>
        <p className="stat-value">
          {topicsCompleted}/{totalTopics}
        </p>
      </div>
      <div className="stat-item">
        <h4>Score</h4>
        <p className="stat-value">{score}%</p>
      </div>
      <div className="stat-item">
        <h4>Achievements</h4>
        <p className="stat-value">{achievements}</p>
      </div>
    </div>
  );
};

export default Statistics;
