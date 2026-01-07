'use client'

import React from 'react'

const Header = () => {
  return (
    <>
      {/* Mobile Header */}
      <header className="w-full h-[64px] bg-[#E8E9EB] flex flex-col items-center px-0 md:hidden">
        <div className="w-full h-[64px] flex flex-row items-center px-3 py-0 gap-4">
          {/* Container */}
          <div className="w-full h-[64px] flex flex-row justify-center items-center px-3 py-5 gap-4">
            {/* Content */}
            <div className="w-[180px] h-[32px] flex flex-row items-start px-0">
              {/* Company Logo */}
              <div className="w-[84px] h-[32px] bg-gradient-to-br from-orange-500 to-black rounded-sm"></div>
              
              {/* Column */}
              <div className="w-[147px] h-[48px] flex flex-row items-center px-0 gap-2">
                {/* Actions */}
                <div className="w-[91px] h-[34px] flex flex-col justify-center items-end px-0">
                  {/* Button */}
                  <button className="w-[91px] h-[34px] bg-gradient-to-r from-[#1F2937] to-[#4B5563] rounded-[6px] flex flex-row justify-center items-center px-5 py-1 gap-2">
                    <span className="w-[51px] h-[26px] text-[16px] font-medium leading-[160%] text-[#FFFFFF] font-inter">
                      Work
                    </span>
                  </button>
                </div>
                
                {/* Icon */}
                <div className="w-[48px] h-[48px] flex flex-row justify-center items-center px-0 gap-[10px]">
                  {/* close */}
                  <div className="w-[24px] h-[24px] relative">
                    <div className="absolute left-[22.6%] right-[22.6%] top-[22.6%] bottom-[22.6%] bg-[#08090A] border border-[#08090A]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="w-full h-[72px] bg-[#E8E9EB] flex flex-row justify-between items-center px-16 hidden md:flex">
        {/* Logo */}
        <div className="w-[84px] h-[32px] bg-gradient-to-br from-orange-500 to-black rounded-sm"></div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a href="#about" className="text-[16px] font-semibold leading-[160%] text-[#08090A] font-inter hover:text-[#1F2937] transition-colors">
            About
          </a>
          <a href="#work" className="text-[16px] font-semibold leading-[160%] text-[#08090A] font-inter hover:text-[#1F2937] transition-colors">
            Work
          </a>
          <a href="#contact" className="text-[16px] font-semibold leading-[160%] text-[#08090A] font-inter hover:text-[#1F2937] transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-[#1F2937] to-[#4B5563] text-white font-medium rounded-[6px] hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </header>
    </>
  )
}

export default Header
