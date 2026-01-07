'use client'

import React from 'react'

const BuildTogether = () => {
  return (
    <section className="w-full h-[433px] bg-[#525253] flex flex-col items-center px-16 py-28 gap-20">
      <div className="w-full max-w-[1280px] h-[209px] flex flex-col items-start gap-20">
        {/* Column */}
        <div className="w-full max-w-[768px] h-[209px] flex flex-col items-start gap-8">
          {/* Content */}
          <div className="w-full h-[128px] flex flex-col items-start gap-6">
            {/* Heading */}
            <h2 className="w-full h-[72px] text-[60px] font-bold leading-[120%] tracking-[0.01em] text-[#FFFFFF] font-merriweather">
              Let's build together
            </h2>
            
            {/* Text */}
            <p className="w-full h-[32px] text-[20px] font-normal leading-[160%] text-[#FFFFFF] font-inter">
              Ready to create something meaningful? We're here to help bring your vision to life.
            </p>
          </div>

          {/* Actions */}
          <div className="w-[249px] h-[49px] flex flex-row items-start gap-4">
            <button className="w-[116px] h-[49px] bg-[#FFFFFF] border border-[#FFFFFF] rounded-[6px] flex flex-row justify-center items-center px-6 py-[10px] gap-2">
              <span className="w-[68px] h-[29px] text-[18px] font-medium leading-[160%] text-[#08090A] font-inter">
                Work
              </span>
            </button>
            <button className="w-[117px] h-[49px] border-2 border-[#FFFFFF] rounded-[6px] flex flex-row justify-center items-center px-6 py-[10px] gap-2">
              <span className="w-[69px] h-[29px] text-[18px] font-medium leading-[160%] text-[#FFFFFF] font-inter">
                About
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildTogether
