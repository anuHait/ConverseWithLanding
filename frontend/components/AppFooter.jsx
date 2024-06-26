import React from 'react'
import { SiGoogleplay } from "react-icons/si";
function AppFooter() {
  return (
    <div className='bg-banner bg-black mix-blend-normal bg-cover	 flex flex-col items-center justify-center p-4 gap-5'>
      <h1 className="text-gray-500 text-[22px] md:text-[24px] lg:text-[46px] font-medium font-['Inter'] text-center">Converse Now!</h1>
      <div className='flex flex-row gap-2'>
      <button className="bg-gradient-to-r rounded-[24px] flex flex-row gap-1 items-center justify-center from-[#D446F1] to-fuchsia-700 text-gray-200 font-normal text-xs lg:text-md py-1 px-2 ">Sign up for free</button>
      <button className='py-1 px-4 rounded-lg bg-gray-100 flex flex-row items-center justify-start gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="google-play" width="22" height="22"><path fill="#2196F3" d="M8.32 7.68.58 15.42c-.37-.35-.57-.83-.57-1.35V1.93C.01 1.4.22.92.6.56l7.72 7.12z"></path><path fill="#FFC107" d="M15.01 8c0 .7-.38 1.32-1.01 1.67l-2.2 1.22-2.73-2.52-.75-.69 2.89-2.89L14 6.33c.63.35 1.01.97 1.01 1.67z"></path><path fill="#4CAF50" d="M8.32 7.68.6.56C.7.46.83.37.96.29 1.59-.09 2.35-.1 3 .26l8.21 4.53-2.89 2.89z"></path><path fill="#F44336" d="M11.8 10.89 3 15.74c-.31.18-.66.26-1 .26-.36 0-.72-.09-1.04-.29a1.82 1.82 0 0 1-.38-.29l7.74-7.74.75.69 2.73 2.52z"></path></svg>
      <div className='flex flex-col text-black items-start'>
      <p className='text-xs font-semibold'>GET IT ON</p>
      <p className='text-md font-bold'>Google Play</p>
      </div>
      </button>
      </div>

    </div>
  )
}

export default AppFooter