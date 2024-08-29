import React from 'react';
import './WaveAnimation.css'; // Make sure to import the CSS file

const WaveAnimation = () => {
  return (
    <div className="ocean">
      <div className="wave"></div>
      <div className="wave second"></div>
    </div>
  );
};

export default WaveAnimation;
