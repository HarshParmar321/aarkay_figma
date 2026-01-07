'use client'

import React from 'react'

const QuietlyShaping = () => {
  return (
    <section className="w-full h-[812px] md:h-[900px] bg-[#E8E9EB] flex flex-col justify-center items-center px-5 md:px-16 py-16 md:py-28 gap-12 md:gap-20 relative isolate overflow-x-hidden overflow-hidden">
      <div className="w-full max-w-[335px] md:max-w-[1280px] h-[256px] md:h-[353px] flex flex-col items-start md:items-center gap-12 md:gap-20 z-10">
        {/* Column */}
        <div className="w-full max-w-[335px] md:max-w-[768px] h-[256px] md:h-[353px] flex flex-col items-center gap-6 md:gap-8">
          {/* Content */}
          <div className="w-full h-[186px] md:h-[272px] flex flex-col items-center gap-5 md:gap-6">
            {/* Heading */}
            <h2 className="w-full h-[88px] md:h-[184px] text-[40px] md:text-[84px] font-bold leading-[110%] text-center tracking-[0.01em] text-[#08090A] font-merriweather">
              Quietly shaping what's next
            </h2>
            
            {/* Text */}
            <p className="w-full h-[78px] md:h-[64px] text-[16px] md:text-[20px] font-normal leading-[160%] text-center text-[#08090A] font-inter">
              Meaningful work requires time, precision, and an unwavering focus on what lasts.
              We build for permanence, not moments.
            </p>
          </div>

          {/* Actions */}
          <div className="w-[235px] md:w-[251px] h-[46px] md:h-[49px] flex flex-row items-center gap-4">
            <button className="w-[106px] md:w-[113px] h-[46px] md:h-[49px] bg-gradient-to-r from-[#1F2937] to-[#4B5563] rounded-[6px] flex flex-row justify-center items-center px-6 py-[10px] gap-2">
              <span className="w-[58px] md:w-[65px] h-[26px] md:h-[29px] text-[16px] md:text-[18px] font-medium leading-[160%] text-[#FFFFFF] font-inter">
                Explore
              </span>
            </button>
            <button className="w-[113px] md:w-[122px] h-[46px] md:h-[49px] border-2 border-[#08090A] rounded-[6px] flex flex-row justify-center items-center px-6 py-[10px] gap-2">
              <span className="w-[65px] md:w-[74px] h-[26px] md:h-[29px] text-[16px] md:text-[18px] font-medium leading-[160%] text-[#08090A] font-inter">
                Connect
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Image Container */}
      <div className="absolute h-[900px] left-[-8.29%] right-[-6.82%] top-[calc(50%-450px+44px)] md:top-1/2 -translate-y-1/2 z-0 overflow-hidden">
        {/* Placeholder Images with exact mobile positioning */}
        <div className="absolute h-[94px] md:h-[260px] left-[81.57%] md:left-[82.73%] right-[-3.34%] md:right-[1.58%] top-[calc(50%-47px+333px)] md:top-[calc(50%-130px+365px)] bg-gray-400 rounded-[16px] flex items-center justify-center">
          <svg className="w-6 h-6 md:w-12 md:h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="absolute h-[45.2px] md:h-[115px] left-[50.52%] md:left-[57.58%] right-[33.72%] md:right-[31.99%] top-[calc(50%-22.6px+298.6px)] md:top-[calc(50%-57.5px+347.5px)] bg-gray-400 rounded-[16px] flex items-center justify-center">
          <svg className="w-4 h-4 md:w-8 md:h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="absolute h-[68px] md:h-[260px] left-[24.58%] right-[59.67%] md:right-[59.74%] top-[calc(50%-34px+344px)] md:top-[calc(50%-130px+410px)] bg-gray-400 rounded-[16px] flex items-center justify-center">
          <svg className="w-5 h-5 md:w-12 md:h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="absolute h-[50px] md:h-[144px] left-[80.87%] md:left-[85.39%] right-[1.75%] md:right-[1.58%] top-[calc(50%-25px-345px)] md:top-[calc(50%-72px-153px)] bg-gray-400 rounded-[16px] flex items-center justify-center">
          <svg className="w-4 h-4 md:w-10 md:h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="absolute h-[94px] md:h-[230px] left-[54.93%] md:left-[62.83%] right-[23.3%] top-[calc(50%-47px-419px)] md:top-[calc(50%-115px-425px)] bg-gray-400 rounded-[16px] flex items-center justify-center">
          <svg className="w-6 h-6 md:w-12 md:h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="absolute h-[68px] md:h-[173px] left-[33.15%] md:left-[41.95%] right-[51.1%] md:right-[47.61%] top-[calc(50%-34px-352px)] md:top-[calc(50%-86.5px-318.5px)] bg-gray-400 rounded-[16px] flex items-center justify-center">
          <svg className="w-5 h-5 md:w-10 md:h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="absolute h-[74.52px] md:h-[173px] left-[9.06%] md:left-[15.89%] right-[65%] md:right-[68.42%] top-[calc(50%-37.26px-452.74px)] md:top-[calc(50%-86.5px-453.5px)] bg-gray-400 rounded-[16px] flex items-center justify-center">
          <svg className="w-5 h-5 md:w-10 md:h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="absolute h-[68px] md:h-[260px] left-[0.25%] md:left-[0.26%] right-[83.99%] md:right-[84.05%] top-[calc(50%-34px+288px)] md:top-[calc(50%-130px+0px)] bg-gray-400 rounded-[16px] flex items-center justify-center">
          <svg className="w-5 h-5 md:w-12 md:h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default QuietlyShaping
