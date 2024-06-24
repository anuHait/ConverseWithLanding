import React from "react";

function Footer() {
  return (
    <div className="bg-black w-full  flex flex-col items-center justify-center  ">
      <div className="h-fit w-[93%] sm:w-[85%] flex flex-col gap-5 bg-gradient-to-b from-gray-800 to-slate-900 mt-10 rounded-t-[40px] shadow-md text-white p-7 sm:p-10">
        <div className="flex flex-col gap-2 md:flex-row justify-between">
          <h1>CONVERSE WITH</h1>
          <div className="hidden md:flex flex-row gap-3">
            <p>About us</p>
            <p>Blogs</p>
            <p>Contact Us</p>
            <p>Plugins</p>
            <p>Nikaru</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  md:items-center md:justify-center w-full gap-6 mb-8 border-b-2 border-gray-500">
          <div className="w-full md:w-[50%] flex flex-col gap-3 items-start justify-start">
            <p className="bg-fuchsia-600 p-1 text-black font-medium rounded-lg text-sm sm:text-md">
              Contact us :
            </p>
            <p className="text-sm sm:text-md">Email: info@positivus.com</p>
            <p className="text-sm sm:text-md">Phone: 555-567-8901</p>
            <div className="flex flex-col mb-5">
              <p className="text-sm sm:text-md">Address: 1234 Main St</p>
              <p className="text-sm sm:text-md">Moonstone City, Stardust State 12345</p>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex flex-row items-center justify-center bg-gray-800 rounded-lg border h-36 gap-2">
          <input className="w-[65%] md:w-[70%] lg:w-[75%] outline-none border border-gray-100 bg-gray-800 p-3 rounded-lg" placeholder="Email"></input>
          <button className="bg-gradient-to-r rounded-[20px] flex flex-row gap-1 items-center justify-center shadow shadow-fuchsia-600 from-[#D446F1] to-fuchsia-700 text-black font-medium text-xs lg:text-md px-5 py-2 ">Send</button>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <p className="text-xs sm:text-md md:text-md">Privacy Policy</p>
            <p className="text-xs sm:text-md md:text-md">Terms of Service</p>
          </div>
          <p className="text-xs sm:text-md md:text-md">© 2021 Positivus</p>
          </div>
      </div>
    </div>
  );
}

export default Footer;
