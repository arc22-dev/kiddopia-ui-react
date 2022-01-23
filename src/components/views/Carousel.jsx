import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/effect-coverflow"

import 'swiper/css';
import "swiper/css/pagination"

import SwiperCore, {
    EffectCoverflow,Pagination
  } from 'swiper';

  SwiperCore.use([EffectCoverflow,Pagination]);

const Carousel = () => {
  return (
    <Swiper
    effect={'coverflow'} coverflowEffect={{
        "rotate": 0,
        "stretch": 35,
        "depth": 250,
        "modifier": 1,
        "slideShadows": false
      }}
      centeredSlides={true}
      spaceBetween={0}
      slidesPerView={2}
      loop={true}
      pagination={true} className="mySwiper"
    >
      <SwiperSlide><img src="/public/assets/img/slider.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/public/assets/img/slider.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/public/assets/img/slider.png" alt="" /></SwiperSlide>
    </Swiper>
  );
};

export default Carousel