'use client'

import React from 'react'

const EnduringWork = () => {
  return (
    <section className="w-full h-[374px] md:h-[496px] bg-[#626973] flex flex-col items-center px-5 md:px-16 py-16 md:py-28 gap-12 md:gap-20 overflow-x-hidden">
      <div className="w-full max-w-[335px] md:max-w-[1280px] h-[246px] md:h-[272px] flex flex-col items-center gap-12 md:gap-20">
        {/* Content */}
        <div className="w-full max-w-[335px] md:max-w-[768px] h-[246px] md:h-[272px] flex flex-col items-center gap-6 md:gap-8">
          {/* Section Title */}
          <div className="w-full h-[246px] md:h-[272px] flex flex-col items-center gap-3 md:gap-4">
            {/* Tagline Wrapper */}
            <div className="w-[86px] h-[24px] flex flex-row items-center">
              <span className="w-full h-full text-[16px] font-semibold leading-[150%] text-center text-[#FFFFFF] font-inter">
                Tagline
              </span>
            </div>
            
            {/* Content */}
            <div className="w-full h-[210px] md:h-[232px] flex flex-col items-center gap-5 md:gap-6">
              {/* Heading */}
              <h2 className="w-full h-[86px] md:h-[144px] text-[36px] md:text-[60px] font-bold leading-[120%] text-center tracking-[0.01em] text-[#FFFFFF] font-merriweather">
                We exist to craft enduring work
              </h2>
              
              {/* Text */}
              <p className="w-full h-[104px] md:h-[64px] text-[16px] md:text-[20px] font-normal leading-[160%] text-center text-[#FFFFFF] font-inter">
                In a world of fleeting trends and disposable content, we focus on creating work that lasts. 
                Every project is an opportunity to build something meaningful—digital experiences that resonate 
                with users and stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnduringWork
