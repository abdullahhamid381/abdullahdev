import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import the Swiper styles directly
import './Slider.scss';
import { SliderButton } from './SliderButton';

function Slider() {
  return (
    <div className="App">
      <h1>
        <Swiper
          spaceBetween={30}
          slidesPerView="auto"
          navigation
          pagination={{ clickable: true }}
          a11y
        >
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
        </Swiper>
        <SliderButton />
      </h1>
    </div>
  );
}

export default Slider;
