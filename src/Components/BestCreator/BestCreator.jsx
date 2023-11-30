import UseBestCreator from "../../Hooks/useBestCreator";
import Title from "../Shared/Title";
import BestCreatorCard from "./BestCreatorCard";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./best.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const BestCreator = () => {
  const bestCreator = UseBestCreator();
  console.log(bestCreator);

  return (
    <div>
      <div>
        <Title title={"Best Creator"}></Title>
        <p className="text-gray-500 text-lg text-center font-normal pb-3 my-10 px-10">
          Meet our Gest Contest Creators, a collaborative space where
          imaginative minds converge to bring forth innovative ideas, turning
          dreams into digital reality.
        </p>
      </div>
      <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
         

         {
          bestCreator?.map((item,idx)=><SwiperSlide key={idx}>
          <img src={item?.image} className="w-full h-full object-cover object-center" />
          <div className="absolute bg-gradient-to-b from-transparent to-[#B258F5] bg-opacity-10 w-full h-full top-0"></div>
          <div className="absolute z-10 bottom-0 bg-gradient-to-r from-[#602BF7] to-[#B258F5] py-2 text-white w-full text-center">
          <h1>{item?.name}</h1>
          </div>
          
          </SwiperSlide>) 
         }
      </Swiper>

      </div>
      
    </div>
  );
};

export default BestCreator;
