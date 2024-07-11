import React from 'react';
import '../components/ErrorComponent.css';

const ErrorComponent = () => {
  return (
    <div className="container">
      <div className="error-box">
        <p className='error1'>404</p>
        <p>Oops! page not found</p>
        <button>Back to home</button>
      </div>
    </div>
  );
};

export default ErrorComponent;
