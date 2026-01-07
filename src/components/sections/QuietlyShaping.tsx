'use client'

import React from 'react'

const QuietlyShaping = () => {
  return (
    <section className="w-full h-[900px] bg-[#E8E9EB] flex flex-col justify-center items-center px-16 py-28 gap-20 relative">
      <div className="w-full max-w-[1280px] h-[353px] flex flex-col items-center gap-20 z-10">
        {/* Content Column */}
        <div className="w-full max-w-[768px] h-[353px] flex flex-col items-center gap-8">
          <div className="w-full h-[272px] flex flex-col items-center gap-6">
            {/* Heading */}
            <h2 className="w-full h-[184px] text-[84px] font-bold leading-[110%] text-center tracking-[0.01em] text-[#08090A] font-merriweather">
              Quietly shaping what's next
            </h2>
            
            {/* Text */}
            <p className="w-full h-[64px] text-[20px] font-normal leading-[160%] text-center text-[#08090A] font-inter">
              We believe in the power of thoughtful design and strategic thinking. Our approach combines 
              creativity with purpose, crafting solutions that not only look beautiful but also deliver 
              meaningful results for our clients and their users.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="w-[251px] h-[49px] flex flex-row items-center gap-4">
          <button className="w-[113px] h-[49px] bg-gradient-to-r from-[#1F2937] to-[#4B5563] rounded-[6px] flex flex-row justify-center items-center px-6 py-[10px] gap-2">
            <span className="w-[65px] h-[29px] text-[18px] font-medium leading-[160%] text-[#FFFFFF] font-inter">
              Work
            </span>
          </button>
          <button className="w-[122px] h-[49px] border-2 border-[#08090A] rounded-[6px] flex flex-row justify-center items-center px-6 py-[10px] gap-2">
            <span className="w-[74px] h-[29px] text-[18px] font-medium leading-[160%] text-[#08090A] font-inter">
              About
            </span>
          </button>
        </div>
      </div>

      {/* Background Image Container */}
      <div className="absolute h-[900px] left-[-8.29%] right-[-6.82%] top-1/2 -translate-y-1/2 z-0">
        {/* Placeholder Images with exact positioning */}
        <div className="absolute h-[260px] left-[82.73%] right-[1.58%] top-1/2 -translate-y-1/2 translate-y-[365px] bg-gray-300 rounded-[16px]"></div>
        <div className="absolute h-[115px] left-[57.58%] right-[31.99%] top-1/2 -translate-y-1/2 translate-y-[347.5px] bg-gray-300 rounded-[16px]"></div>
        <div className="absolute h-[260px] left-[24.58%] right-[59.74%] top-1/2 -translate-y-1/2 translate-y-[410px] bg-gray-300 rounded-[16px]"></div>
        <div className="absolute h-[144px] left-[85.39%] right-[1.58%] top-1/2 -translate-y-1/2 -translate-y-[153px] bg-gray-300 rounded-[16px]"></div>
        <div className="absolute h-[230px] left-[62.83%] right-[23.3%] top-1/2 -translate-y-1/2 -translate-y-[425px] bg-gray-300 rounded-[16px]"></div>
        <div className="absolute h-[173px] left-[41.95%] right-[47.61%] top-1/2 -translate-y-1/2 -translate-y-[318.5px] bg-gray-300 rounded-[16px]"></div>
        <div className="absolute h-[173px] left-[15.89%] right-[68.42%] top-1/2 -translate-y-1/2 -translate-y-[453.5px] bg-gray-300 rounded-[16px]"></div>
        <div className="absolute h-[260px] left-[0.26%] right-[84.05%] top-1/2 -translate-y-1/2 bg-gray-300 rounded-[16px]"></div>
      </div>
    </section>
  )
}

export default QuietlyShaping
