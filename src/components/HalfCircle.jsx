import React from 'react';

const HalfCircle = ({ color = 'white', size = '100px' }) => {
  return (
    <div
      className="w-full flex justify-center overflow-hidden"
      style={{ height: size }}
    >
      <div
        className="w-full rounded-b-full"
        style={{
          height: size,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};

export default HalfCircle;
