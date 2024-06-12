import React from 'react'
import { SiGoogleplay } from "react-icons/si";
function AppFooter() {
  return (
    <div className='bg-slate-900 w-full h-48 flex flex-col items-center justify-center mb-20 gap-5'>
      <h1 className="text-gray-500 text-[22px] md:text-[24px] lg:text-[46px] font-medium font-['Inter'] text-center">Converse Now!</h1>
      <div className='flex flex-row gap-2'>
      <button className="bg-gradient-to-r rounded-[24px] flex flex-row gap-1 items-center justify-center from-[#D446F1] to-fuchsia-700 text-gray-200 font-normal text-xs lg:text-md py-1 px-2 ">Sign up for free</button>
      <button className='py-1 px-4 rounded-lg bg-gray-100 flex flex-row items-center justify-start gap-2'>
      <SiGoogleplay className='text-black text-xl' />
      <div className='flex flex-col text-black items-start'>
      <p className='text-xs'>GET IT ON</p>
      <p className='text-md'>Google Play</p>
      </div>
      </button>
      </div>

    </div>
  )
}

export default AppFooter