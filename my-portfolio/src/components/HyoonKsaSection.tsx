import React from "react";
import { motion } from "framer-motion";

const HyoonKsaSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-[800px] lg:h-[1131px] bg-[#030e02] overflow-hidden">
      {/* Background Radial Gradients */}
      <div className="absolute w-[2927px] h-[1493px] left-[2642px] top-[1152px] origin-top-left -rotate-180 bg-[radial-gradient(ellipse_at_28%_8%,#030e02_38%,rgba(134,239,172,0.2)_100%)]" />
      <div className="absolute w-[2086.71px] h-[1241.43px] left-[1630.52px] top-[1269.49px] origin-top-left rotate-[-165deg] bg-[radial-gradient(ellipse_at_28%_8%,#030e02_38%,rgba(134,239,172,0.2)_100%)]" />
      
      {/* Title */}
      <motion.div 
        className="absolute left-[15%] md:left-[35%] lg:left-[501px] top-[68px] text-white text-5xl md:text-6xl lg:text-7xl font-bold font-['Poppins'] leading-tight lg:leading-[64px]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Hyoon Ksa
      </motion.div>
      
      {/* Subtitle */}
      <motion.div 
        className="absolute left-[15%] md:left-[30%] lg:left-[441px] top-[130px] md:top-[150px] lg:top-[168px] text-white text-lg md:text-xl lg:text-2xl font-normal font-['Poppins']"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Redesigned Static Landing Page for Hyoon Ksa
      </motion.div>
      
      {/* Main Central Image */}
      <motion.img 
        className="absolute w-[400px] h-[350px] md:w-[500px] md:h-[420px] lg:w-[565.75px] lg:h-[497.31px] left-[10%] md:left-[25%] lg:left-[391.38px] top-[200px] md:top-[250px] lg:top-[340.58px] rounded-2xl shadow-2xl object-cover" 
        src="/images/hyoonksa/Container.png"
        alt="Hyoon Ksa Main Design"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      />
      
      {/* Frame-1 (Top Right) */}
      <motion.img 
        className="absolute w-60 h-40 md:w-72 md:h-48 lg:w-80 lg:h-60 left-[60%] md:left-[65%] lg:left-[857.85px] top-[180px] md:top-[220px] lg:top-[286px] origin-top-left rotate-[15deg] rounded-lg shadow-xl" 
        src="/images/hyoonksa/Frame-1.png"
        alt="Frame 1 Design"
        initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: 15, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      />
      
      {/* Frame (Left) */}
      <motion.img 
        className="absolute w-60 h-32 md:w-72 md:h-36 lg:w-80 lg:h-44 left-[5%] md:left-[10%] lg:left-[266.62px] top-[280px] md:top-[320px] lg:top-[380.62px] origin-top-left rotate-[-15deg] rounded-lg shadow-xl" 
        src="/images/hyoonksa/Frame.png"
        alt="Frame Design"
        initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: -15, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
      />
      
      {/* Frame 39 (Bottom Left) */}
      <motion.img 
        className="absolute w-60 h-16 md:w-72 md:h-18 lg:w-80 lg:h-20 left-[5%] md:left-[8%] lg:left-[192.98px] top-[480px] md:top-[550px] lg:top-[649.20px] origin-top-left rotate-[-15deg] rounded-lg shadow-xl" 
        src="/images/hyoonksa/Frame 39.png"
        alt="Frame 39 Design"
        initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: -15, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
      />
      
      {/* Frame-2 (Bottom Right) */}
      <motion.img 
        className="absolute w-60 h-24 md:w-72 md:h-28 lg:w-80 lg:h-32 left-[60%] md:left-[65%] lg:left-[963.91px] top-[450px] md:top-[520px] lg:top-[595.30px] origin-top-left rotate-[14.03deg] rounded-lg shadow-xl" 
        src="/images/hyoonksa/Frame-2.png"
        alt="Frame 2 Design"
        initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: 14.03, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        viewport={{ once: true }}
      />
      
      {/* Achievements (Bottom Center) */}
      <motion.img 
        className="absolute w-60 h-12 md:w-72 md:h-14 lg:w-80 lg:h-16 left-[20%] md:left-[25%] lg:left-[401.44px] top-[580px] md:top-[650px] lg:top-[793px] origin-top-left rotate-[11.05deg] rounded-lg shadow-xl" 
        src="/images/hyoonksa/Achievements.png"
        alt="Achievements Design"
        initial={{ opacity: 0, rotate: 25, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: 11.05, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        viewport={{ once: true }}
      />
      
      {/* Glassmorphic Service List - Mobile Responsive */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 lg:left-[1000px] lg:top-[1104px] lg:origin-top-left lg:rotate-180 w-[90%] max-w-[609px] h-36 px-4 lg:px-8 bg-gradient-to-r from-white/30 to-white/20 rounded-[32px] backdrop-blur-md flex flex-col justify-center items-center gap-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        viewport={{ once: true }}
      >
        <div className="lg:origin-top-left lg:rotate-180 flex justify-center items-center gap-8 lg:gap-20">
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-white text-lg lg:text-2xl font-semibold font-['Poppins']">
              Graphics
            </div>
            <div>
              <svg width="39" height="4" viewBox="0 0 39 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="38" height="4" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-white text-lg lg:text-2xl font-semibold font-['Poppins']">
              Reels
            </div>
            <div>
              <svg width="39" height="4" viewBox="0 0 39 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="38" height="4" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-white text-lg lg:text-2xl font-semibold font-['Poppins']">
              Tiktok
            </div>
            <div>
              <svg width="39" height="4" viewBox="0 0 39 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="38" height="4" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Floating Background Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400 rounded-full opacity-5 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-green-300 rounded-full opacity-5 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default HyoonKsaSection; 