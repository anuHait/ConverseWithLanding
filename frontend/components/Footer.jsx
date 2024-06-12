import React from "react";

function Footer() {
  return (
    <div className="bg-slate-900 w-full  flex flex-col items-center justify-center  ">
      <div className="h-fit w-[85%] flex flex-col gap-5 bg-gradient-to-b from-gray-800 to-slate-900 mt-10 rounded-t-[40px] shadow-md text-white p-10">
        <div className="flex flex-row justify-between">
          <h1>CONVERSE WITH</h1>
          <div className="hidden md:flex flex-row gap-3">
            <p>About us</p>
            <p>Blogs</p>
            <p>Contact Us</p>
            <p>Plugins</p>
            <p>Nikaru</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-start gap-6 mb-8 border-b-2 border-gray-500">
          <div className="w-[50%] flex flex-col gap-3 items-start justify-start">
            <p className="bg-fuchsia-600 p-1 text-black font-medium rounded-lg">
              Contact us :
            </p>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <div className="flex flex-col mb-5">
              <p>Address: 1234 Main St</p>
              <p>Moonstone City, Stardust State 12345</p>
            </div>
          </div>
          <div className="w-[50%] flex flex-row items-center justify-center bg-gray-800 rounded-lg border h-36 gap-2">
          <input className="w-[70%] lg:w-[75%] outline-none border border-gray-100 bg-gray-800 p-3 rounded-lg" placeholder="Email"></input>
          <button className="bg-gradient-to-r rounded-[20px] flex flex-row gap-1 items-center justify-center shadow shadow-fuchsia-600 from-[#D446F1] to-fuchsia-700 text-black font-medium text-xs lg:text-md px-5 py-2 ">Send</button>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <p>© 2021 Positivus</p>
          </div>
      </div>
    </div>
  );
}

export default Footer;
