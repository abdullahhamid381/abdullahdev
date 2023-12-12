import React, { useState } from 'react';
import './Slider.scss'
const images = [
  './images/global.png',
  './images/helo1.png',
  './images/helo2.png',
  'https://example.com/image4.jpg',
  'https://example.com/image5.jpg',
  'https://example.com/image6.jpg',
  'https://example.com/image7.jpg',
  'https://example.com/image8.jpg',
  'https://example.com/image9.jpg',
];

const ImageSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 3, images.length - 3));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  return (
<div className="slider-back">

<div className='slider-parent'>
<div className="text">
    <p>MY RECENT PORTFOLIO</p>
    <h1>Elevate your brand to new <br />
heights with our portfolio expertise</h1>
  </div>
      <div className='grid'>
        {images.slice(startIndex, startIndex + 2).map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${startIndex + index + 1}`}
          
          />
        ))}
      </div>
      <div style={{ textAlign: 'right' }}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
</div>
  );
};

export default ImageSlider;

