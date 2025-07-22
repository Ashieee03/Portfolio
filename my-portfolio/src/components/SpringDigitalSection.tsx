import React from "react";

const SpringDigitalSection: React.FC = () => {
  return (
    <div className="relative w-full h-[822px] bg-neutral-950 overflow-hidden">
      <div className="w-[1309px] left-[63px] top-[51px] absolute flex flex-col justify-start items-start gap-8">
        {/* First Row */}
        <div className="self-stretch flex justify-start items-center gap-8">
          <img 
            className="w-80 h-80 rounded-[32px] object-cover shadow-2xl" 
            src="/images/springdigital/Rectangle.png"
            alt="Spring Digital Services Design 1"
          />
          <img 
            className="w-80 h-80 rounded-[32px] object-cover shadow-2xl" 
            src="/images/springdigital/Rectangle-1.png"
            alt="Spring Digital Services Design 2"
          />
          <div className="w-[680px] flex flex-col justify-start items-start">
            <div className="w-[466px] h-72 text-white text-7xl font-bold font-['Poppins'] leading-[80px]">
              Spring Digital Services
            </div>
            <div className="self-stretch flex justify-center items-center gap-28">
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="text-white text-2xl font-semibold font-['Poppins']">
                  Graphics
                </div>
                <div>
                  <svg width="38" height="5" viewBox="0 0 38 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="38" height="4" fill="white"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="text-white text-2xl font-semibold font-['Poppins']">
                  Logo
                </div>
                <div>
                  <svg width="38" height="5" viewBox="0 0 38 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="38" height="4" fill="white"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="text-white text-2xl font-semibold font-['Poppins']">
                  Branding
                </div>
                <div>
                  <svg width="38" height="5" viewBox="0 0 38 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="38" height="4" fill="white"/>
                  </svg>
                </div>
              </div>
              <div className="w-9 h-1" />
            </div>
          </div>
        </div>
        
        {/* Second Row */}
        <div className="flex justify-start items-center gap-8">
          <img 
            className="w-80 h-80 rounded-[32px] object-cover shadow-2xl" 
            src="/images/springdigital/Rectangle-2.png"
            alt="Spring Digital Services Design 3"
          />
          <img 
            className="w-80 h-80 rounded-[32px] object-cover shadow-2xl" 
            src="/images/springdigital/Rectangle-3.png"
            alt="Spring Digital Services Design 4"
          />
          <img 
            className="w-[555px] h-80 rounded-[32px] object-cover shadow-2xl" 
            src="/images/springdigital/Rectangle-4.png"
            alt="Spring Digital Services Main Design"
          />
        </div>
      </div>
    </div>
  );
};

export default SpringDigitalSection; 