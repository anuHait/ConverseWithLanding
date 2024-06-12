import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import orb from "@/components/Orb";
import LandingCard from "./LandingCard";
function Landing() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 gap-10">
      <div className="flex flex-col justify-start items-center gap-4 pt-20">
        <div className=" flex flex-col items-center justify-center text-center gap-2">
          <span className="gradient-text text-[30px] md:text-[40px] lg:text-[56px] font-medium font-['Inter'] ">
            CONVERSE WITH
          </span>
          <span className="gradient-text-gray text-[20px] md:text-[32px] lg:text-[48px] font-medium font-['Inter'] ">
            Interact and Learn
          </span>
          <p className="text-slate-200 text-xs font-medium md:text-md">
            Interactive way of learning, better and more immersive!
          </p>
        </div>
        {/*Blob */}
        <div></div>

        <button className="bg-gradient-to-r rounded-[20px] flex flex-row gap-1 items-center justify-center from-[#D446F1] to-fuchsia-700 text-white font-normal text-xs lg:text-md p-2 ">
          Get Started
          <IoIosArrowForward />
        </button>
      </div>
      {/*Experience section */}
      <div className="flex flex-col items-center justify-center mt-36">
      <p className="text-center text-stone-50 text-lg md:text-2xl lg:text-3xl font-medium font-['Inter'] ">Experience the New way of learning!</p>
      {/*Box mapping */}
      <div className="flex flex-wrap item-center gap-6 md:gap-4 justify-center w-[75%] md:w-[60%] mt-12 md:mt-16 mb-28">
      <LandingCard />
      <LandingCard />
      <LandingCard />
      <LandingCard />
      <LandingCard />
      <LandingCard />
      </div>
      </div>
    </div>
  );
}

export default Landing;
