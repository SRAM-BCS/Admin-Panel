import React from 'react';
import '../LoadingAnimation.css'; // Import your CSS file

interface LoadingAnimationProps {
  size?: number;
  color?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ size = 40, color = '#3498db' }) => {
  const animationStyle = {
    width: size + 'px',
    height: size + 'px',
    border: `4px solid #ccc`,
    borderTop: `4px solid ${color}`,
  };

  return <div className="loading-animation" style={animationStyle}></div>;
};

export default LoadingAnimation;
