import React from "react";

const features = [
  "Logo",
  "Graphics",
  "Rebranding",
  "Facebook",
  "Menu"
];

const The7amSection: React.FC = () => {
  return (
    <section className="relative w-full h-[1024px] bg-zinc-100 overflow-hidden">
      {/* Arrow Icon */}
      <div className="absolute left-[1424px] top-[698px] text-black text-[256px] font-normal font-['Astro_Futuristic_Font'] select-none pointer-events-none">
        v
      </div>
      
      {/* Button */}
      <button className="absolute left-[61px] top-[509px] w-28 h-14 bg-yellow-400 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-300 transition">
        View Project
      </button>
      
      {/* Yellow Gradient Circle */}
      <div className="absolute w-[2731px] h-[1781px] left-[-673px] top-[-571px] bg-yellow-50 rounded-full shadow-lg shadow-[inset_14px_4px_4px_-1px_rgba(0,0,0,0.25)] pointer-events-none" />
      
      {/* Radial Background */}
      <div className="absolute w-[1536px] h-[1024px] left-[-96px] top-0 bg-[radial-gradient(ellipse_at_28%_8%,#09090b_38%,#bbf7d0_20%)] opacity-80 pointer-events-none" />
      
      {/* Title */}
      <div className="absolute left-[64px] top-[55px]">
        <h2 className="text-white text-7xl font-bold font-poppins leading-[104px]">The 7A.M.</h2>
      </div>
      
      {/* Description */}
      <div className="absolute w-[749px] left-[71px] top-[159px]">
        <span className="text-white text-2xl font-normal font-poppins">
          Focus on creating impactful narratives that engage audience. By utilizing
        </span>
        <span className="text-white text-2xl font-extrabold font-poppins"> social media tactics</span>
        <span className="text-white text-2xl font-normal font-poppins"> and </span>
        <span className="text-white text-2xl font-extrabold font-poppins">captivating content</span>
        <span className="text-white text-2xl font-normal font-poppins">
          , successfully grown follower base and boosted brand visibility. This strategy merges creativity with data insights, ensuring each post captures attention and builds a dedicated community.
        </span>
      </div>
      
      {/* Features List */}
      <div className="absolute w-[1301px] h-36 px-8 left-[442px] top-[818px] bg-gradient-to-r from-white/30 to-white/20 rounded-[32px] backdrop-blur-md flex flex-row items-center justify-center gap-20">
        {features.map((feature, idx) => (
          <div key={feature} className="flex flex-col items-start gap-2">
            <div className="text-white text-2xl font-semibold font-poppins">{feature}</div>
            <div>
              <svg width="38" height="4" viewBox="0 0 38 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="4" fill="white"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mockup Images */}
      <img
        src="/images/the7am/Rectangle.png"
        alt="7am Mockup 1"
        className="absolute w-[536px] h-80 left-[854px] top-[52px] rounded-[32px] shadow-lg"
      />
      <img
        src="/images/the7am/Image.png"
        alt="7am Mockup 2"
        className="absolute w-96 h-96 left-[449px] top-[422px] rounded-[32px] shadow-lg"
      />
      <img
        src="/images/the7am/Rectangle-1.png"
        alt="7am Mockup 3"
        className="absolute w-96 h-[548px] left-[49px] top-[412px] rounded-[33px] shadow-lg"
      />
      <img
        src="/images/the7am/Rectangle-2.png"
        alt="7am Mockup 4"
        className="absolute w-[533px] h-96 left-[857px] top-[422px] rounded-[32px] shadow-lg"
      />
    </section>
  );
};

export default The7amSection; 