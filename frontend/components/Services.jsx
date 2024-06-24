import React from "react";

function Services() {
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-900 gap-10">
      <div className="flex flex-col justify-start items-center gap-4 pt-10">
        <span className="gradient-text-pink text-[28px] md:text-[38px] lg:text-[52px] font-medium font-['Inter'] ">
          JOIN US
        </span>
        <p className="text-center text-stone-50 text-md md:text-xl lg:text-2xl font-medium font-['Inter'] ">
          Few Steps, Simple and Accurate
        </p>
        <p className="text-gray-300 text-xs font-normal md:text-md">
          Interactive way of learning, better and more immersive!
        </p>
      </div>
      {/*Experience section */}
      <div className="w-[80%] md:w-[70%] flex flex-col  gap-4 sm:flex-row items-center justify-between">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="relative rounded-[44px] shadow-slate-800 shadow-md h-32 w-32 sm:h-36 sm:w-36  bg-gradient-to-b from-slate-950 to-slate-900 pt-4 pl-3.5 pb-2">
            <div className="absolute top-2 left-3 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r flex items-center justify-center from-[#D446F1] to-fuchsia-700 text-sm shadow-md shadow-fuchsia-700 text-white p-3 rounded-full w-6 h-6">
              1
            </div>
            <img
              src="/assets/demo.png"
              className="object-contain rounded-[44px]  w-28 h-28 sm:w-32 sm:h-32 overflow-clip"
            ></img>
          </div>

          <span className="text-[10px] sm:text-xs text-white font-medium">
            Connect Your Plugin
          </span>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="relative rounded-[44px] shadow-slate-800 shadow-md h-32 w-32 sm:h-36 sm:w-36  bg-gradient-to-b from-slate-950 to-slate-900 pt-4 pl-3.5 pb-2">
            <div className="absolute top-2 left-3 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r flex items-center justify-center from-[#D446F1] to-fuchsia-700 text-sm shadow-md shadow-fuchsia-700 text-white p-3 rounded-full w-6 h-6">
              2
            </div>
            <img
              src="/assets/demo.png"
              className="object-contain rounded-[44px]  w-28 h-28 sm:w-32 sm:h-32 overflow-clip"
            ></img>
          </div>

          <span className="text-[10px] sm:text-xs text-white">
            Interact With It
          </span>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="relative rounded-[44px] shadow-slate-800 shadow-md h-32 w-32 sm:h-36 sm:w-36  bg-gradient-to-b from-slate-950 to-slate-900 pt-4 pl-3.5 pb-2">
            <div className="absolute top-2 left-3 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r flex items-center justify-center from-[#D446F1] to-fuchsia-700 text-sm shadow-md shadow-fuchsia-700 text-white p-3 rounded-full w-6 h-6">
              3
            </div>
            <img
              src="/assets/demo.png"
              className="object-contain rounded-[44px]  w-28 h-28 sm:w-32 sm:h-32 overflow-clip"
            ></img>
          </div>

          <span className="text-[10px] sm:text-xs text-white">
            Converse and Learn
          </span>
        </div>
      </div>
      <button className="bg-gradient-to-r rounded-[20px] flex flex-row gap-1 items-center justify-center from-[#D446F1] to-fuchsia-700 text-white font-normal text-xs lg:text-md p-2 mb-10">
        Get the free app
      </button>
    </div>
  );
}

export default Services;
