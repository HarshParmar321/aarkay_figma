'use client'

import React from 'react'

const Principles = () => {
  return (
    <section className="w-full h-[3128px] bg-[#E8E9EB] flex flex-col items-center px-16 py-28 gap-20">
      <div className="w-full max-w-[1280px] h-[2904px] flex flex-col items-center gap-20">
        {/* Section Title */}
        <div className="w-full max-w-[768px] h-[72px] flex flex-col items-center gap-4">
          <div className="w-full h-[72px] flex flex-col items-center gap-6">
            <h2 className="w-full h-[72px] text-[60px] font-bold leading-[120%] text-center tracking-[0.01em] text-[#08090A] font-merriweather">
              Principles
            </h2>
          </div>
        </div>

        {/* Component - Cards Container */}
        <div className="w-full h-[2752px] flex flex-col items-center gap-16">
          
          {/* Card 1 - Content Left, Image Right */}
          <div className="w-full h-[640px] bg-[#E8E9EB] border-2 border-[#08090A] rounded-[16px] flex flex-row items-start">
            {/* Content */}
            <div className="w-[640px] h-[640px] flex flex-col justify-center items-start p-12 gap-8">
              <div className="w-full h-[111px] flex flex-col items-start gap-2">
                <div className="w-full h-[111px] flex flex-col items-start gap-6">
                  <h3 className="w-full h-[58px] text-[48px] font-bold leading-[120%] tracking-[0.01em] text-[#08090A] font-merriweather">
                    Restraint over excess
                  </h3>
                  <p className="w-full h-[29px] text-[18px] font-normal leading-[160%] text-[#08090A] font-inter">
                    We believe in the power of simplicity. Every element should serve a purpose.
                  </p>
                </div>
              </div>
            </div>
            {/* Placeholder Image */}
            <div className="w-[640px] h-[640px] bg-gray-300"></div>
          </div>

          {/* Card 2 - Image Left, Content Right */}
          <div className="w-full h-[640px] bg-[#E8E9EB] border-2 border-[#08090A] rounded-[16px] flex flex-row items-start">
            {/* Placeholder Image */}
            <div className="w-[640px] h-[640px] bg-gray-300"></div>
            {/* Content */}
            <div className="w-[640px] h-[640px] flex flex-col justify-center items-start p-12 gap-8">
              <div className="w-full h-[172px] flex flex-col items-start gap-2">
                {/* Tagline Wrapper */}
                <div className="w-[52px] h-[24px] flex flex-row items-center">
                  <span className="w-full h-full text-[16px] font-semibold leading-[150%] text-[#08090A] font-inter">
                    02
                  </span>
                </div>
                <div className="w-full h-[140px] flex flex-col items-start gap-6">
                  <h3 className="w-full h-[58px] text-[48px] font-bold leading-[120%] tracking-[0.01em] text-[#08090A] font-merriweather">
                    Time as a tool
                  </h3>
                  <p className="w-full h-[58px] text-[18px] font-normal leading-[160%] text-[#08090A] font-inter">
                    Great work takes time. We embrace thoughtful iteration and deliberate progress.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Content Left, Image Right */}
          <div className="w-full h-[640px] bg-[#E8E9EB] border-2 border-[#08090A] rounded-[16px] flex flex-row items-start">
            {/* Content */}
            <div className="w-[640px] h-[640px] flex flex-col justify-center items-start p-12 gap-8">
              <div className="w-full h-[172px] flex flex-col items-start gap-2">
                {/* Tagline Wrapper */}
                <div className="w-[48px] h-[24px] flex flex-row items-center">
                  <span className="w-full h-full text-[16px] font-semibold leading-[150%] text-[#08090A] font-inter">
                    03
                  </span>
                </div>
                <div className="w-full h-[140px] flex flex-col items-start gap-6">
                  <h3 className="w-full h-[58px] text-[48px] font-bold leading-[120%] tracking-[0.01em] text-[#08090A] font-merriweather">
                    Precision in craft
                  </h3>
                  <p className="w-full h-[58px] text-[18px] font-normal leading-[160%] text-[#08090A] font-inter">
                    Details matter. We obsess over every pixel, interaction, and line of code.
                  </p>
                </div>
              </div>
            </div>
            {/* Placeholder Image */}
            <div className="w-[640px] h-[640px] bg-gray-300"></div>
          </div>

          {/* Card 4 - Image Left, Content Right */}
          <div className="w-full h-[640px] bg-[#E8E9EB] border-2 border-[#08090A] rounded-[16px] flex flex-row items-start">
            {/* Placeholder Image */}
            <div className="w-[640px] h-[640px] bg-gray-300"></div>
            {/* Content */}
            <div className="w-[640px] h-[640px] flex flex-col justify-center items-start p-12 gap-8">
              <div className="w-full h-[230px] flex flex-col items-start gap-2">
                {/* Tagline Wrapper */}
                <div className="w-[55px] h-[24px] flex flex-row items-center">
                  <span className="w-full h-full text-[16px] font-semibold leading-[150%] text-[#08090A] font-inter">
                    04
                  </span>
                </div>
                <div className="w-full h-[198px] flex flex-col items-start gap-6">
                  <h3 className="w-full h-[116px] text-[48px] font-bold leading-[120%] tracking-[0.01em] text-[#08090A] font-merriweather">
                    Endurance over trends
                  </h3>
                  <p className="w-full h-[58px] text-[18px] font-normal leading-[160%] text-[#08090A] font-inter">
                    We build for longevity, creating work that remains relevant for years.
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
