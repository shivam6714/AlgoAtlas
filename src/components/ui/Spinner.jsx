import React from 'react';

const Spinner = ({ size = 'md', color = 'primary' }) => {
  return <div className={`spinner spinner-${size} spinner-${color}`} />;
};

export default Spinner;
