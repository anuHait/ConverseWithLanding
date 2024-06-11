"use client";
import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Genres = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "Genre 1",
    "Genre 2",
    "Genre 3",
    "Genre 4",
    "Genre 5",
    "Genre 6",
    "Genre 7",
    "Genre 8",
  ];

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center justify-center flex-col gap-4 pt-16 bg-slate-900">
      <h1 className="gradient-text-gray text-[20px] sm:text-[29px] md:text-[38px] lg:text-[52px] font-semibold font-['Inter']">
        Every <span className="gradient-pink">Genre</span> You Can Think of
      </h1>
      <div className="w-[80%] h-60 hidden md:block mt-20">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Fiction
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Anime
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Cooking
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Lorem
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            ipsum
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Hello
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-[80%] h-60 block md:hidden">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Fiction
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Anime
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Cooking
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Lorem
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            ipsum
          </SwiperSlide>
          <SwiperSlide className="h-20 w-fit py-6 px-2 bg-slate-800 text-center rounded-[36px] font-semibold shadow-inner shadow-purple-600 m-1.5 text-white ">
            Hello
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Genres;
