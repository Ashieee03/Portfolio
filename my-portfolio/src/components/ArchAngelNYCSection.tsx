import React from "react";
import { motion } from "framer-motion";

const ArchAngelNYCSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-[800px] lg:h-[1033px] bg-gradient-to-br from-green-300/20 via-neutral-500/50 via-[18%] to-neutral-950 to-[25%] overflow-hidden py-8 lg:py-0">
      {/* Arrow Icon */}
      <div className="hidden lg:block absolute left-[1424px] top-[642px] text-black text-[256px] font-normal font-['Astro_Futuristic_Font'] leading-none">
        v
      </div>
      
      {/* Title and Description */}
      <motion.div 
        className="absolute w-full max-w-[600px] lg:w-96 left-[5%] md:left-[8%] lg:left-[58px] top-[20px] lg:top-[98px] flex flex-col justify-start items-start px-4 lg:px-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="w-full lg:w-[718px] text-white text-4xl md:text-6xl lg:text-7xl font-bold font-['Poppins'] leading-tight lg:leading-[64px]">
          Arch Angels NYC
        </div>
        <div className="w-full lg:w-[638px] text-white text-lg md:text-xl lg:text-2xl font-normal font-['Poppins'] mt-4">
          Creative digital solutions for a modern lifestyle brand, focusing on bold visual storytelling and engaging social media content that resonates with urban audiences.
        </div>
      </motion.div>
      
      {/* Left Side Images */}
      <motion.div 
        className="absolute w-full max-w-[600px] lg:w-[655px] left-[5%] lg:left-[58px] top-[300px] lg:top-[534px] flex justify-start items-center gap-4 lg:gap-8 px-4 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.img 
          className="w-20 h-28 md:w-32 md:h-40 lg:w-64 lg:h-80 rounded-2xl object-cover shadow-xl" 
          src="/images/arcangelsnyx/Rectangle.png"
          alt="Arch Angel NYC Design 1"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img 
          className="w-16 h-28 md:w-24 md:h-40 lg:w-44 lg:h-80 rounded-2xl object-cover shadow-xl" 
          src="/images/arcangelsnyx/Rectangle-1.png"
          alt="Arch Angel NYC Design 2"
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img 
          className="w-16 h-28 md:w-24 md:h-40 lg:w-44 lg:h-80 rounded-[20px] object-cover shadow-xl" 
          src="/images/arcangelsnyx/Rectangle-2.png"
          alt="Arch Angel NYC Design 3"
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      {/* Right Side Images */}
      <div className="hidden lg:block">
        <motion.img 
          className="absolute w-[607px] h-60 left-[786px] top-[107px] rounded-[32px] object-cover shadow-2xl" 
          src="/images/arcangelsnyx/Rectangle-3.png"
          alt="Arch Angel NYC Main Visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        />
        <motion.img 
          className="absolute w-[607px] h-56 left-[792px] top-[388px] rounded-[32px] object-cover shadow-2xl" 
          src="/images/arcangelsnyx/Rectangle-4.png"
          alt="Arch Angel NYC Secondary Visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        />
        <motion.img 
          className="absolute w-[619px] h-56 left-[780px] top-[666px] rounded-[32px] object-cover shadow-2xl" 
          src="/images/arcangelsnyx/Rectangle-5.png"
          alt="Arch Angel NYC Tertiary Visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        />
      </div>
      
      {/* Glassmorphic Service List - Mobile Responsive */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 lg:left-[709px] lg:top-[473px] lg:origin-top-left lg:rotate-180 w-[90%] max-w-[600px] lg:w-[1301px] h-36 px-4 lg:px-8 bg-gradient-to-r from-white/30 to-white/20 rounded-[32px] backdrop-blur-md flex flex-col justify-center items-start gap-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="lg:origin-top-left lg:rotate-180 flex justify-center items-center gap-8 lg:gap-20 w-full">
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-white text-lg lg:text-2xl font-semibold font-['Poppins']">
              Graphics
            </div>
            <div>
              <svg width="38" height="4" viewBox="0 0 38 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="4" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-white text-lg lg:text-2xl font-semibold font-['Poppins']">
              Blog Articles
            </div>
            <div>
              <svg width="38" height="4" viewBox="0 0 38 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="4" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-white text-lg lg:text-2xl font-semibold font-['Poppins']">
              Reels
            </div>
            <div>
              <svg width="38" height="4" viewBox="0 0 38 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="4" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-white text-lg lg:text-2xl font-semibold font-['Poppins']">
              Tiktok
            </div>
            <div>
              <svg width="38" height="4" viewBox="0 0 38 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="4" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Floating Background Elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-400 rounded-full opacity-10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-green-300 rounded-full opacity-10 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ArchAngelNYCSection; 