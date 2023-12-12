// SliderButton.jsx
import React from 'react';
import { useSwiper } from 'swiper/react';

export const SliderButton = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};
