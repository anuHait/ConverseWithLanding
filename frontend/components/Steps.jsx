import React from "react";

function Steps() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-32 bg-black">
      <div className=" flex flex-col items-center justify-center text-center">
        <div className=" text-[24px] md:text-[28px] lg:text-[48px] font-medium font-['Inter'] ">
          <span className="gradient-text-red">Click Picture</span>{" "}
          <span className="gradient-text-gray">or</span> {""}
          <span className="gradient-text-red">Just Type</span>
        </div>
        <div className=" text-[24px] md:text-[28px] lg:text-[48px] font-medium font-['Inter'] ">
          <span className="gradient-text-gray">any Question</span>{" "}
          <span className="gradient-text-gray2">you got</span> {""}
          <span className="gradient-text-gray">we got it</span>
        </div>
        <div className=" gradient-text-gray text-[24px] md:text-[28px] lg:text-[48px]  font-medium font-['Inter'] ">
          <span className="">Right</span>
        </div>
      </div>
      {/*Images mapping */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-[88%] md:w-[85%] pt-10">
        {/*Box 1 */}
        <div className="w-[85%] md:w-[50%] lg:w-[40%] h-80 p-8 flex flex-col items-start justify-start rounded-[46px]  bg-gradient-to-r from-slate-800 from-5%  to-slate-900 to-90% text-white">
          <p className="font-semibold ">List and Board</p>
          <p className="font-extralight text-sm md:text-md">
            Switch between list and board layout to
          </p>
          <p className="font-extralight text-sm md:text-md">
            view work from any angle
          </p>
        </div>
        {/*Box 2 */}
        <div className="relative w-[85%] md:w-[50%] lg:w-[40%] h-80 p-8 flex flex-col items-start justify-start rounded-[46px] overflow-visible bg-gradient-to-r from-slate-800 from-10%  via-fuchsia-950 to-slate-900 to-90% brightness-75 text-white">
  <img
    src="/assets/question.png"
    className="absolute bottom-[-14px] right-[-14px] w-32 h-32"
  />
  <div className="flex flex-col">
    <p className="font-semibold">Make it Yours</p>
    <p className="font-extralight text-sm md:text-md">Quickly apply filters to</p>
    <p className="font-extralight text-sm md:text-md">refine your issue lists and create custom</p>
    <p className="font-extralight text-sm md:text-md">views.</p>
  </div>
  <div className="flex items-end justify-end w-[90%] mt-8">
    <p className="bg-fuchsia-600 p-3 font-semibold rounded-tl-xl rounded-tr-xl rounded-bl-xl text-xs lg:text-sm  text-gray-200 shadow-inherit">
      Chat with me to clear your doubts
    </p>
  </div>
</div>

      </div>
    </div>
  );
}

export default Steps;
