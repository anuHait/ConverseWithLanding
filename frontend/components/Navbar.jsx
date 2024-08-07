"use client"
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Link from 'next/navigation'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <div className='fixed p-3 z-20 border-b border-gray-600 hidden md:flex md:flex-row items-center justify-center w-full bg-slate-900 bg-opacity-70'>
        <div className='w-[70%] flex flex-row items-center justify-between'>
          <div className="flex flex-row gap-5">
            <p>About us</p>
            <Link href="/blog"><p>Blogs</p></Link>
            <Link href="/contactus"><p>Contact Us</p></Link>
            <Link href="/plugins"><p>Plugins</p></Link>
            <Link href="/nikaru"><p>Nikaru</p></Link>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <h1>Log in</h1>
          <button className="bg-gradient-to-r rounded-[20px] flex flex-row gap-1 items-center justify-center from-[#D446F1] to-fuchsia-700 text-white font-normal text-xs lg:text-md p-2 shadow shadow-fuchsia-600">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className={`fixed p-3 flex flex-row md:hidden items-center justify-between w-full z-50 border-b border-gray-600 bg-slate-900 bg-opacity-70`}>
        {
          isOpen ? <ImCross onClick={() => setIsOpen(!isOpen)} className='text-xl text-white' /> : <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} className='text-2xl text-white' />
        }
        <h1 className='text-white'>CONVERSE WITH</h1>
        <button className="bg-gradient-to-r rounded-[20px] flex flex-row gap-1 items-center z-50 justify-center from-[#D446F1] to-fuchsia-700 text-white font-normal text-xs lg:text-md p-2 shadow shadow-fuchsia-600">
          Sign Up
        </button>
      </div>

      {
        isOpen && <div className='bg-fuchsia-900 md:hidden fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-40'>
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className='text-white font-semibold'>About us</p>
            <p className='text-white font-semibold'>Blogs</p>
            <p className='text-white font-semibold'>Contact Us</p>
            <p className='text-white font-semibold'>Plugins</p>
            <p className='text-white font-semibold'>Nikaru</p>
          </div>
        </div>
      }
    </>
  );
}

export default Navbar;
