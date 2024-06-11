"use client";
import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Genres = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

 
  return (
    <div className="flex items-center justify-center flex-col gap-4 pt-16 bg-black">
      <h1 className=" text-[24px] sm:text-[29px] md:text-[38px] lg:text-[52px] font-semibold font-['Inter']">
      <span className="gradient-text-gray">Every</span>   <span className="gradient-text-pink">Genre</span> <span className="gradient-text-gray">You Can Think of</span>
      </h1>
      {/* Swiper Desktop*/}
      <div className="w-full h-60 hidden md:block mt-20">
        <Swiper
         
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[30px] font-semibold shadow-inner shadow-purple-600 mb-1 text-white ">
            Fiction
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 mb-1 text-white ">
            Anime
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 mb-1 text-white ">
            Cooking
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 mb-1 text-white ">
            Lorem
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 mb-1 text-white ">
            ipsum
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 mb-1 text-white ">
            Hello
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Swiper Mobile*/}
      <div className="w-full h-60 block md:hidden">
        <Swiper
          
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full"
        >
          <SwiperSlide className="h-20 w-fit py-4 px-2 text-[13px] bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Fiction
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-4 px-2 text-[13px] bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Anime
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-4 px-2 text-[13px] bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Cooking
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-4 px-2 text-[13px] bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Lorem
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-4 px-2 text-[13px] bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            ipsum
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-4 px-2 text-[13px] bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Hello
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Genres;
