import React, { useState } from 'react';
import './Slider.scss'
import { GrFormNextLink } from "react-icons/gr";
const images = [
  './images/global.png',
  './images/helo1.png',
  './images/global.png',
  './images/helo1.png',
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
    <div className="slider-width">
      <div className="text">
<p>MY RECENT PORTFOLIO</p>
<h1>Elevate your brand to new <br />
heights with our portfolio expertise</h1>
      </div>
      <div className='grid-back'>
      <div className='grid'>
        {images.slice(startIndex, startIndex + 4).map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${startIndex + index + 1}`}
            style={{ }}
          />
        ))}
      </div>
      <div className='button-parent'>
        <button onClick={handlePrev}><GrFormNextLink style={{transform:'rotate(180deg)',fontSize:'30px'}}/></button>
        <button onClick={handleNext}><GrFormNextLink style={{fontSize:'30px'}}/></button>
      </div>
    </div>
    </div>
  </div>
  );
};

export default ImageSlider;
