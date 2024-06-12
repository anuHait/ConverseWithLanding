import React from "react";

function GetOnBoard() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-32 bg-black">
      <div className=" flex flex-col items-center justify-center text-center gap-2">
        <h1 className="gradient-text-pink text-[26px] md:text-[34px] lg:text-[48px] font-medium font-['Inter'] ">
          GET ON BOARD WITH US
        </h1>
        <p className="text-gray-200 text:xs md:text-sm">
          Meet some authors ready with us
        </p>
      </div>
      {/*Images mapping */}
      <div className="flex  gap-4 items-center justify-center flex-row w-full sm:w-[85%] xl:w-[80%] pt-20 pb-20">
        {/*Box 1 */}
        {<div className="border-2 hidden md:block border-teal-600 h-48 w-44 rounded-[14px] shadow-lg shadow-teal-500 p-2">
          <div className="w-full h-full relative">
            <img
              src="/assets/anu.jpg"
              className="object-cover w-full h-full brightness-75"
            ></img>
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-sm font-medium text-white">
                EMMA <br /> REYNOLDS
              </p>
              <p className="text-xs text-teal-500 font-medium">Vue.js</p>
            </div>
          </div>
        </div>}
        {/*Box 2 */}
        <div className="border-2 border-sky-600 h-52 w-32 md:w-44 rounded-[14px] shadow-lg shadow-sky-500 p-2">
          <div className="w-full h-full relative">
            <img
              src="/assets/anu.jpg"
              className="object-cover w-full h-full brightness-75"
            ></img>
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-sm font-medium text-white">
                EMMA <br /> REYNOLDS
              </p>
              <p className="text-xs text-sky-500 font-medium">Vue.js</p>
            </div>
          </div>
        </div>
        {/*Box 3 */}
        <div className="border-2 border-rose-500 h-60 w-32 md:w-44 rounded-[14px] shadow-lg shadow-rose-500 p-2">
          <div className="w-full h-full relative">
            <img
              src="/assets/anu.jpg"
              className="object-cover w-full h-full brightness-75"
            ></img>
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-sm font-medium text-white">
                EMMA <br /> REYNOLDS
              </p>
              <p className="text-xs text-rose-500 font-medium">Vue.js</p>
            </div>
          </div>
        </div>
        {/*Box 4 */}
        <div className="border-2 border-amber-400 h-52 w-32 md:w-44 rounded-[14px] shadow-lg shadow-amber-500 p-2">
          <div className="w-full h-full relative">
            <img
              src="/assets/anu.jpg"
              className="object-cover w-full h-full brightness-75"
            ></img>
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-sm font-medium text-white">
                EMMA <br /> REYNOLDS
              </p>
              <p className="text-xs text-amber-500 font-medium">Vue.js</p>
            </div>
          </div>
        </div>
        {/*Box 5 */}
        <div className="border-2 hidden md:block border-fuchsia-600 h-48 w-44 rounded-[14px] shadow-lg shadow-fuchsia-500 p-2">
          <div className="w-full h-full relative">
            <img
              src="/assets/anu.jpg"
              className="object-cover w-full h-full brightness-75"
            ></img>
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-sm font-medium text-white">
                EMMA <br /> REYNOLDS
              </p>
              <p className="text-xs text-fuchsia-500 font-medium">Vue.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetOnBoard;
