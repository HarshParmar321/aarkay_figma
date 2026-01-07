'use client'

import React from 'react'

const Principles = () => {
  return (
    <section className="w-full h-[2513px] md:h-[3128px] bg-[#E8E9EB] flex flex-col items-center px-5 md:px-16 py-16 md:py-28 gap-12 md:gap-20 overflow-x-hidden">
      <div className="w-full max-w-[335px] md:max-w-[1280px] h-[2385px] md:h-[3128px] flex flex-col items-start md:items-center gap-12 md:gap-20">
        {/* Section Title */}
        <div className="w-full max-w-[335px] md:max-w-[768px] h-[43px] md:h-[272px] flex flex-col items-center gap-3 md:gap-4">
          {/* Content */}
          <div className="w-full h-[43px] md:h-[272px] flex flex-col items-center gap-5 md:gap-6">
            {/* Heading */}
            <h2 className="w-full h-[43px] md:h-[184px] text-[36px] md:text-[84px] font-bold leading-[120%] text-center tracking-[0.01em] text-[#08090A] font-merriweather">
              Principles
            </h2>
          </div>
        </div>

        {/* Component */}
        <div className="w-full h-[2294px] md:h-[2856px] flex flex-col items-center gap-6 md:gap-20">
          {/* Card 1 - No Tagline */}
          <div className="w-full h-[531px] md:h-[640px] bg-[#E8E9EB] border-2 border-[#08090A] rounded-[16px] flex flex-col items-start md:flex-row">
            {/* Content */}
            <div className="w-full md:w-[640px] h-[196px] md:h-[640px] flex flex-col items-start px-6 md:p-12 gap-6">
              <div className="w-full h-[148px] flex flex-col items-start gap-2">
                {/* Content */}
                <div className="w-full h-[148px] flex flex-col items-start gap-5">
                  {/* Heading */}
                  <h3 className="w-full h-[76px] md:h-[116px] text-[32px] md:text-[48px] font-bold leading-[120%] tracking-[0.01em] text-[#08090A] font-merriweather">
                    Strategic thinking
                  </h3>
                  
                  {/* Text */}
                  <p className="w-full h-[52px] md:h-[64px] text-[16px] md:text-[20px] font-normal leading-[160%] text-[#08090A] font-inter">
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                  </p>
                </div>
              </div>
            </div>
            {/* Placeholder Image */}
            <div className="w-full h-[335px] md:w-[640px] md:h-[640px] bg-gray-400 rounded-[16px] flex items-center justify-center">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Card 2 - With Tagline "02" - Image Left, Content Right */}
          <div className="w-full h-[551px] md:h-[640px] bg-[#E8E9EB] border-2 border-[#08090A] rounded-[16px] flex flex-col md:flex-row">
            {/* Placeholder Image */}
            <div className="w-full h-[335px] md:w-[640px] md:h-[640px] bg-gray-400 rounded-[16px] flex items-center justify-center">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            {/* Content */}
            <div className="w-full md:w-[640px] h-[216px] md:h-[640px] flex flex-col justify-center items-start px-6 md:p-12 gap-8">
              <div className="w-full h-[172px] flex flex-col items-start gap-2">
                {/* Tagline Wrapper */}
                <div className="w-[52px] h-[24px] flex flex-row items-center">
                  <span className="w-full h-full text-[16px] font-semibold leading-[150%] text-[#08090A] font-inter">
                    02
                  </span>
                </div>
                {/* Content */}
                <div className="w-full h-[140px] flex flex-col items-start gap-6">
                  {/* Heading */}
                  <h3 className="w-full h-[58px] text-[48px] font-bold leading-[120%] tracking-[0.01em] text-[#08090A] font-merriweather">
                    User-centered design
                  </h3>
                  
                  {/* Text */}
                  <p className="w-full h-[58px] text-[18px] font-normal leading-[160%] text-[#08090A] font-inter">
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - With Tagline "03" - Content Left, Image Right */}
          <div className="w-full h-[551px] md:h-[640px] bg-[#E8E9EB] border-2 border-[#08090A] rounded-[16px] flex flex-col md:flex-row">
            {/* Content */}
            <div className="w-full md:w-[640px] h-[216px] md:h-[640px] flex flex-col justify-center items-start px-6 md:p-12 gap-8">
              <div className="w-full h-[172px] flex flex-col items-start gap-2">
                {/* Tagline Wrapper */}
                <div className="w-[48px] h-[24px] flex flex-row items-center">
                  <span className="w-full h-full text-[16px] font-semibold leading-[150%] text-[#08090A] font-inter">
                    03
                  </span>
                </div>
                {/* Content */}
                <div className="w-full h-[140px] flex flex-col items-start gap-6">
                  {/* Heading */}
                  <h3 className="w-full h-[58px] text-[48px] font-bold leading-[120%] tracking-[0.01em] text-[#08090A] font-merriweather">
                    Technical excellence
                  </h3>
                  
                  {/* Text */}
                  <p className="w-full h-[58px] text-[18px] font-normal leading-[160%] text-[#08090A] font-inter">
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                  </p>
                </div>
              </div>
            </div>
            {/* Placeholder Image */}
            <div className="w-full h-[335px] md:w-[640px] md:h-[640px] bg-gray-400 rounded-[16px] flex items-center justify-center">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Card 4 - With Tagline "04" - Image Left, Content Right */}
          <div className="w-full h-[589px] md:h-[640px] bg-[#E8E9EB] border-2 border-[#08090A] rounded-[16px] flex flex-col md:flex-row">
            {/* Placeholder Image */}
            <div className="w-full h-[335px] md:w-[640px] md:h-[640px] bg-gray-400 rounded-[16px] flex items-center justify-center">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            {/* Content */}
            <div className="w-full md:w-[640px] h-[254px] md:h-[640px] flex flex-col justify-center items-start px-6 md:p-12 gap-8">
              <div className="w-full h-[206px] flex flex-col items-start gap-2">
                {/* Tagline Wrapper */}
                <div className="w-[55px] h-[24px] flex flex-row items-center">
                  <span className="w-full h-full text-[16px] font-semibold leading-[150%] text-[#08090A] font-inter">
                    04
                  </span>
                </div>
                {/* Content */}
                <div className="w-full h-[174px] flex flex-col items-start gap-6">
                  {/* Heading */}
                  <h3 className="w-full h-[76px] text-[48px] font-bold leading-[120%] tracking-[0.01em] text-[#08090A] font-merriweather">
                    Endurance over trends
                  </h3>
                  
                  {/* Text */}
                  <p className="w-full h-[78px] text-[18px] font-normal leading-[160%] text-[#08090A] font-inter">
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Principles
