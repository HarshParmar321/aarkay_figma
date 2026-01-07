'use client'

import React from 'react'

const Hero = () => {
  return (
    <section className="w-full h-[532.1px] md:h-[1312px] bg-[#626973] flex flex-col items-center px-5 md:px-16 py-16 md:py-28 gap-12 md:gap-20 overflow-x-hidden">
      <div className="w-full max-w-[335px] md:max-w-[1280px] h-[404.1px] md:h-[1088px] flex flex-col items-center gap-12 md:gap-20">
        {/* Content Column */}
        <div className="w-full max-w-[335px] md:max-w-[768px] h-[160px] md:h-[240px] flex flex-col items-center gap-6 md:gap-8">
          <div className="w-full h-[160px] md:h-[240px] flex flex-col items-center gap-5 md:gap-6">
            {/* Heading */}
            <h1 className="w-full h-[88px] md:h-[184px] text-[40px] md:text-[84px] font-bold leading-[110%] text-center tracking-[0.01em] text-[#FFFFFF] font-merriweather">
              Building with intention
            </h1>
            
            {/* Text */}
            <p className="w-full h-[52px] md:h-[32px] text-[16px] md:text-[20px] font-normal leading-[160%] text-center text-[#FFFFFF] font-inter">
              We create thoughtful digital experiences that combine beautiful design with powerful functionality
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative w-full max-w-[335px] md:max-w-[1280px] h-[196.1px] md:h-[768px]">
          {/* Placeholder Image 1 - Center */}
          <div className="absolute h-[154.22px] md:h-[604px] left-[26.98%] md:left-[27.66%] right-[26.98%] md:right-[27.66%] top-0 bg-gray-400 rounded-[16px] flex items-center justify-center">
            <svg className="w-8 h-8 md:w-16 md:h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          {/* Placeholder Image 2 - Left */}
          <div className="absolute h-[130.73px] md:h-[512px] left-0 right-[60.98%] md:right-[60%] top-[65.37px] md:top-[256px] bg-gray-400 rounded-[16px] flex items-center justify-center">
            <svg className="w-6 h-6 md:w-14 md:h-14 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          {/* Placeholder Image 3 - Right */}
          <div className="absolute h-[98.05px] md:h-[384px] left-[60.98%] md:left-[60%] right-0 top-[20.43px] md:top-[80px] bg-gray-400 rounded-[16px] flex items-center justify-center">
            <svg className="w-5 h-5 md:w-12 md:h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
