'use client'

import React from 'react'

const Hero = () => {
  return (
    <section className="w-full h-[1312px] bg-[#626973] flex flex-col items-center px-16 py-28 gap-20">
      <div className="w-full max-w-[1280px] h-[1088px] flex flex-col items-center gap-20">
        {/* Content Column */}
        <div className="w-full max-w-[768px] h-[240px] flex flex-col items-center gap-8">
          <div className="w-full h-[240px] flex flex-col items-center gap-6">
            {/* Heading */}
            <h1 className="w-full h-[184px] text-[84px] font-bold leading-[110%] text-center tracking-[0.01em] text-[#FFFFFF] font-merriweather">
              Building with intention
            </h1>
            
            {/* Text */}
            <p className="w-full h-[32px] text-[20px] font-normal leading-[160%] text-center text-[#FFFFFF] font-inter">
              We create thoughtful digital experiences that combine beautiful design with powerful functionality
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full h-[768px] relative">
          {/* Placeholder Images with exact positioning */}
          <div className="absolute h-[604px] left-[27.66%] right-[27.66%] top-0 bg-gray-300 rounded-[16px]"></div>
          <div className="absolute h-[512px] left-0 right-[60%] top-[256px] bg-gray-300 rounded-[16px]"></div>
          <div className="absolute h-[384px] left-[60%] right-0 top-[80px] bg-gray-300 rounded-[16px]"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
