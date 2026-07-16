import React from 'react';

const ErrorState = ({ message, action }) => {
  return (
    <div className="error-state">
      <h2>Something went wrong</h2>
      <p>{message}</p>
      {action && action}
    </div>
  );
};

export default ErrorState;
