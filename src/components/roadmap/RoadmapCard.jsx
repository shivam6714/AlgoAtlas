import React from 'react';

const RoadmapCard = ({ title, description, progress, onClick }) => {
  return (
    <div className="roadmap-card" onClick={onClick}>
      <h4>{title}</h4>
      {description && <p>{description}</p>}
      {progress !== undefined && (
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
};

export default RoadmapCard;
