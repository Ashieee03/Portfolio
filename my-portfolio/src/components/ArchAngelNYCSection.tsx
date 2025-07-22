import React from "react";

const ArchAngelNYCSection: React.FC = () => {
  return (
    <div className="relative w-full h-[1033px] bg-gradient-to-br from-green-300/20 via-neutral-500/50 via-[18%] to-neutral-950 to-[25%] overflow-hidden">
      {/* Arrow Icon */}
      <div className="absolute left-[1424px] top-[642px] text-black text-[256px] font-normal font-['Astro_Futuristic_Font'] leading-none">
        v
      </div>
      
      {/* Left Side Images */}
      <div className="absolute w-[655px] left-[58px] top-[534px] flex justify-start items-center gap-8">
        <img 
          className="w-64 h-80 rounded-2xl object-cover shadow-xl" 
          src="/images/arcangelsnyx/Rectangle.png"
          alt="Arch Angel NYC Design 1"
        />
        <img 
          className="w-44 h-80 rounded-2xl object-cover shadow-xl" 
          src="/images/arcangelsnyx/Rectangle-1.png"
          alt="Arch Angel NYC Design 2"
        />
        <img 
          className="w-44 h-80 rounded-[20px] object-cover shadow-xl" 
          src="/images/arcangelsnyx/Rectangle-2.png"
          alt="Arch Angel NYC Design 3"
        />
      </div>
      
      {/* Title and Description */}
      <div className="absolute w-96 left-[58px] top-[98px] flex flex-col justify-start items-start">
        <div className="w-[718px] text-white text-7xl font-bold font-['Poppins'] leading-[64px]">
          Arch Angels NYC
        </div>
        <div className="w-[638px] text-white text-2xl font-normal font-['Poppins'] mt-4">
          Creative digital solutions for a modern lifestyle brand, focusing on bold visual storytelling and engaging social media content that resonates with urban audiences.
        </div>
      </div>
      
      {/* Right Side Images */}
      <img 
        className="absolute w-[607px] h-60 left-[786px] top-[107px] rounded-[32px] object-cover shadow-2xl" 
        src="/images/arcangelsnyx/Rectangle-3.png"
        alt="Arch Angel NYC Main Visual"
      />
      <img 
        className="absolute w-[607px] h-56 left-[792px] top-[388px] rounded-[32px] object-cover shadow-2xl" 
        src="/images/arcangelsnyx/Rectangle-4.png"
        alt="Arch Angel NYC Secondary Visual"
      />
      <img 
        className="absolute w-[619px] h-56 left-[780px] top-[666px] rounded-[32px] object-cover shadow-2xl" 
        src="/images/arcangelsnyx/Rectangle-5.png"
        alt="Arch Angel NYC Tertiary Visual"
      />
      
      {/* Glassmorphic Service List */}
      <div className="absolute w-[1301px] h-36 px-8 left-[709px] top-[473px] origin-top-left rotate-180 bg-gradient-to-r from-white/30 to-white/20 rounded-[32px] backdrop-blur-md flex flex-col justify-center items-start gap-2">
        <div className="origin-top-left rotate-180 flex justify-center items-center gap-20">
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-white text-2xl font-semibold font-['Poppins']">
              Graphics
            </div>
            <div>
              <svg width="38" height="4" viewBox="0 0 38 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="4" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-white text-2xl font-semibold font-['Poppins']">
              Blog Articles
            </div>
            <div>
              <svg width="38" height="4" viewBox="0 0 38 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="4" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-white text-2xl font-semibold font-['Poppins']">
              Reels
            </div>
            <div>
              <svg width="38" height="4" viewBox="0 0 38 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="4" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-white text-2xl font-semibold font-['Poppins']">
              Tiktok
            </div>
            <div>
              <svg width="38" height="4" viewBox="0 0 38 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="4" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchAngelNYCSection; 