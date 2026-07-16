import React from 'react';

const VisualizationContainer = ({ children, title }) => {
  return (
    <div className="visualization-container">
      {title && <h3>{title}</h3>}
      <div className="visualization-content">
        {children}
      </div>
    </div>
  );
};

export default VisualizationContainer;
