// MouseTracker.js
import React, { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '' }}>
      <div
        style={{
          position: 'absolute',
          top: position.y - 25,
          left: position.x + 10,
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          background: '',
          border:'2px solid #55E6A5',
          zIndex:999999
        }}
      ></div>
    </div>
  );
};

export default MouseTracker;
