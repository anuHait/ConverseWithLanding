import React from 'react'

function LandingCard() {
  return (
    <div className='flex flex-col items-start justify-start gap-3 p-6 w-56 lg:w-64 h-fit bg-gradient-to-b from-gray-800 to-gray-600 rounded-[36px] border border-gray-400 '>
      <button className='text-xs lg:text-md px-3 py-1.5 font-normal bg-gradient-to-b from-gray-600 to-slate-600 rounded-[48px] border border-white/opacity-50  text-gray-200 '>Publish</button>
      <p className='font-semibold text-sm text-gray-300'>Save time<br/>by scheduling posts</p>
      <div className="text-[12px] text-gray-300   ">Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.</div>
    </div>
  )
}

export default LandingCard
