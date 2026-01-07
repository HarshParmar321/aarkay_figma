'use client'

import React from 'react'

const BuildTogether = () => {
  return (
    <section className="w-full h-[378px] md:h-[433px] bg-[#525253] flex flex-col items-center px-5 md:px-16 py-16 md:py-28 gap-12 md:gap-20 overflow-x-hidden">
      <div className="w-full max-w-[335px] md:max-w-[1280px] h-[250px] md:h-[209px] flex flex-col items-start md:items-start gap-12 md:gap-20">
        <div className="w-full max-w-[335px] md:max-w-[768px] h-[250px] md:h-[209px] flex flex-col items-start md:items-start gap-6 md:gap-8">
          <div className="w-full h-[158px] md:h-[128px] flex flex-col items-start md:items-start gap-5 md:gap-6">
            <h2 className="w-full h-[86px] md:h-[72px] text-[36px] md:text-[60px] font-bold leading-[120%] text-start md:text-start tracking-[0.01em] text-[#FFFFFF] font-merriweather">
              Let's build together
            </h2>
            <p className="w-full h-[52px] md:h-[32px] text-[16px] md:text-[20px] font-normal leading-[160%] text-start md:text-start text-[#FFFFFF] font-inter">
              Ready to create something meaningful? We're here to help bring your vision to life.
            </p>
          </div>
          <div className="w-[235px] md:w-[249px] h-[46px] md:h-[49px] flex flex-row items-start md:items-start gap-4">
            <button className="w-[109px] md:w-[116px] h-[46px] md:h-[49px] bg-[#FFFFFF] border border-[#FFFFFF] rounded-[6px] flex flex-row justify-center items-center px-6 py-[10px] gap-2">
              <span className="w-[61px] md:w-[68px] h-[26px] md:h-[29px] text-[16px] md:text-[18px] font-medium leading-[160%] text-[#08090A] font-inter">
                Work
              </span>
            </button>
            <button className="w-[110px] md:w-[117px] h-[46px] md:h-[49px] border-2 border-[#FFFFFF] rounded-[6px] flex flex-row justify-center items-center px-6 py-[10px] gap-2">
              <span className="w-[62px] md:w-[69px] h-[26px] md:h-[29px] text-[16px] md:text-[18px] font-medium leading-[160%] text-[#FFFFFF] font-inter">
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
