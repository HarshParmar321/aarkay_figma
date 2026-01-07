'use client'

import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full h-[388px] bg-[#18202C] flex flex-col items-center px-16 py-20 gap-20">
      <div className="w-full max-w-[1280px] h-[228px] flex flex-col items-center gap-20">
        {/* Content */}
        <div className="w-full max-w-[480px] h-[90px] flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="w-[84px] h-[32px] flex flex-col items-start gap-6">
            <div className="w-[84px] h-[32px] bg-gradient-to-br from-orange-500 to-black rounded-sm"></div>
          </div>
          
          {/* Links */}
          <div className="w-full h-[26px] flex flex-row flex-wrap justify-center items-center gap-8">
            <a href="#about" className="w-[48px] h-[26px] text-[16px] font-semibold leading-[160%] text-[#FFFFFF] font-inter">
              About
            </a>
            <a href="#careers" className="w-[62px] h-[26px] text-[16px] font-semibold leading-[160%] text-[#FFFFFF] font-inter">
              Careers
            </a>
            <a href="#contact" className="w-[62px] h-[26px] text-[16px] font-semibold leading-[160%] text-[#FFFFFF] font-inter">
              Contact
            </a>
            <a href="#home" className="w-[46px] h-[26px] text-[16px] font-semibold leading-[160%] text-[#FFFFFF] font-inter">
              Home
            </a>
            <a href="#work" className="w-[41px] h-[26px] text-[16px] font-semibold leading-[160%] text-[#FFFFFF] font-inter">
              Work
            </a>
          </div>
        </div>

        {/* Credits */}
        <div className="w-full h-[58px] flex flex-col items-center gap-8">
          {/* Divider */}
          <div className="w-full h-0 border-2 border-[#FFFFFF]"></div>
          
          {/* Row */}
          <div className="w-full h-[26px] flex flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="w-[339px] h-[26px] text-[16px] font-normal leading-[160%] text-[#FFFFFF] font-inter">
              © 2025 Arkaay Analytics. All rights reserved.
            </div>
            
            {/* Footer Links */}
            <div className="w-[401px] h-[26px] flex flex-row items-center gap-6">
              <a href="#privacy" className="w-[105px] h-[26px] text-[16px] font-normal leading-[160%] underline text-[#FFFFFF] font-inter">
                Privacy Policy
              </a>
              <a href="#terms" className="w-[128px] h-[26px] text-[16px] font-normal leading-[160%] underline text-[#FFFFFF] font-inter">
                Terms of Service
              </a>
              <a href="#cookies" className="w-[120px] h-[26px] text-[16px] font-normal leading-[160%] underline text-[#FFFFFF] font-inter">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
