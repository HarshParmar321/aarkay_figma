'use client'

import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full h-[606px] md:h-[388px] bg-[#18202C] flex flex-col items-center px-5 md:px-16 py-12 md:py-20 gap-12 md:gap-20 overflow-x-hidden">
      <div className="w-full max-w-[335px] md:max-w-[1280px] h-[510px] md:h-[228px] flex flex-col items-start md:items-center gap-12 md:gap-20">
        {/* Content */}
        <div className="w-full max-w-[335px] md:max-w-[480px] h-[270px] md:h-[90px] flex flex-col items-center gap-8 md:gap-8">
          {/* Logo */}
          <div className="w-[84px] h-[32px] flex flex-col items-start gap-6">
            <div className="w-[84px] h-[32px] bg-gradient-to-br from-orange-500 to-black rounded-sm"></div>
          </div>
          
          {/* Links */}
          <div className="w-full h-[206px] md:h-[26px] flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-8">
            <a href="#about" className="w-full md:w-[48px] h-[22px] md:h-[26px] text-[14px] md:text-[16px] font-semibold leading-[160%] text-center text-[#FFFFFF] font-inter">
              About
            </a>
            <a href="#careers" className="w-full md:w-[62px] h-[22px] md:h-[26px] text-[14px] md:text-[16px] font-semibold leading-[160%] text-center text-[#FFFFFF] font-inter">
              Careers
            </a>
            <a href="#contact" className="w-full md:w-[62px] h-[22px] md:h-[26px] text-[14px] md:text-[16px] font-semibold leading-[160%] text-center text-[#FFFFFF] font-inter">
              Contact
            </a>
            <a href="#home" className="w-full md:w-[46px] h-[22px] md:h-[26px] text-[14px] md:text-[16px] font-semibold leading-[160%] text-center text-[#FFFFFF] font-inter">
              Home
            </a>
            <a href="#work" className="w-full md:w-[41px] h-[22px] md:h-[26px] text-[14px] md:text-[16px] font-semibold leading-[160%] text-center text-[#FFFFFF] font-inter">
              Work
            </a>
          </div>
        </div>

        {/* Credits */}
        <div className="w-full h-[192px] md:h-[58px] flex flex-col items-center gap-6 md:gap-8">
          {/* Divider */}
          <div className="w-full h-0 border-2 border-[#FFFFFF]"></div>
          
          {/* Row */}
          <div className="w-full h-[152px] md:h-[26px] flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-6">
            {/* Copyright */}
            <div className="w-full md:w-[339px] h-[22px] md:h-[26px] text-[14px] md:text-[16px] font-normal leading-[160%] text-center text-[#FFFFFF] font-inter">
              © 2025 Arkaay Analytics. All rights reserved.
            </div>
            
            {/* Footer Links */}
            <div className="w-full md:w-[401px] h-[98px] md:h-[26px] flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <a href="#privacy" className="w-[92px] md:w-[105px] h-[22px] md:h-[26px] text-[14px] md:text-[16px] font-normal leading-[160%] underline text-center text-[#FFFFFF] font-inter">
                Privacy Policy
              </a>
              <a href="#terms" className="w-[112px] md:w-[128px] h-[22px] md:h-[26px] text-[14px] md:text-[16px] font-normal leading-[160%] underline text-center text-[#FFFFFF] font-inter">
                Terms of Service
              </a>
              <a href="#cookies" className="w-[105px] md:w-[120px] h-[22px] md:h-[26px] text-[14px] md:text-[16px] font-normal leading-[160%] underline text-center text-[#FFFFFF] font-inter">
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
