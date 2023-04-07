"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay]);

function Banner() {
  const swiperSettings = {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
  };

  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Swiper {...swiperSettings}>
        <SwiperSlide>
          <img
            loading="lazy"
            src="https://aleph-m-2.s3.amazonaws.com/campbell-3ZUsNJhi_Ik-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="https://aleph-m-2.s3.amazonaws.com/erik-mclean-ZRns2R5azu0-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="https://aleph-m-2.s3.amazonaws.com/steady-hand-co-RKVEmmaJqGc-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
