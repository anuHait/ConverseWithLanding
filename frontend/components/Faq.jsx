"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null) {
      contentRefs.current[openIndex].style.maxHeight = contentRefs.current[openIndex].scrollHeight + "px";
    }
  }, [openIndex]);

  const faqItems = [
    "Do you offer freelancers?",
    "How does the payment process work?",
    "What is your refund policy?",
    "How can I contact support?",
    "What services do you provide?"
  ];

  const faqAnswers = [
    "Yes, we offer freelancers for various tasks and projects.",
    "Our payment process is simple and secure, allowing for multiple payment options.",
    "We offer a 30-day refund policy for all our services.",
    "You can contact support through our contact form or by emailing support@example.com.",
    "We provide a wide range of services including web development, graphic design, and digital marketing."
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-black gap-10 pt-20 pb-20">
      <h1 className="gradient-text-gray text-[26px] md:text-[34px] lg:text-[48px] font-medium font-['Inter'] ">
        FAQs
      </h1>
      <div className="w-[70%] lg:w-[55%]">
        <div className="w-full overflow-hidden flex flex-col gap-3">
          {faqItems.map((item, index) => (
            <div key={index} className="flex flex-col shadow bg-gray-800">
              <div className="flex flex-row gap-1">
                <div className="w-1 bg-purple-600"></div>
                <div
                  className="accordion-header p-3.5 cursor-pointer flex justify-between items-center flex-row font-medium w-full"
                  onClick={() => handleToggle(index)}
                >
                  <p className="flex flex-row gap-1 items-center text-gray-200 text-xs md:text-md">
                    {item}
                  </p>
                  <span className="text-md md:text-xl font-bold text-gray-200">
                    {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`accordion-body-wrapper ${openIndex === index ? "open" : ""}`}
                style={{ maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0" }}
              >
                <div className="w-1 bg-purple-600"></div>
                <div className="accordion-body p-3.5 text-sm md:text-md bg-gray-700 text-gray-200">
                  {faqAnswers[index]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
