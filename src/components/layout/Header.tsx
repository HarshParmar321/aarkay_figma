'use client'

import React from 'react'

const Header = () => {
  return (
    <header className="w-full h-[72px] bg-[#E8E9EB] flex flex-col justify-center items-center px-16">
      <div className="w-full max-w-[1312px] h-[45px] flex flex-row justify-center items-center gap-8">
        {/* Content */}
        <div className="w-[548.5px] h-[32px] flex flex-row items-center gap-0">
          {/* Company Logo */}
          <div className="w-[84px] h-[32px] bg-gradient-to-br from-orange-500 to-black rounded-sm"></div>
        </div>

        {/* Navigation Links */}
        <div className="w-[151px] h-[29px] flex flex-row items-center gap-8">
          <a href="#work" className="w-[52px] h-[29px] flex flex-row justify-center items-center gap-1 text-[18px] font-normal leading-[160%] text-[#08090A] font-inter">
            Work
          </a>
          <a href="#careers" className="w-[67px] h-[29px] flex flex-row justify-center items-center gap-1 text-[18px] font-normal leading-[160%] text-[#08090A] font-inter">
            Careers
          </a>
        </div>

        {/* Actions */}
        <div className="w-[548.5px] h-[45px] flex flex-row justify-end items-center gap-4">
          <button className="w-[114px] h-[45px] bg-gradient-to-r from-[#1F2937] to-[#4B5563] rounded-[6px] flex flex-row justify-center items-center px-5 py-2 gap-2">
            <span className="w-[74px] h-[29px] text-[18px] font-medium leading-[160%] text-[#FFFFFF] font-inter">
              Contact
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
