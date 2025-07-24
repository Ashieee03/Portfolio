import React from "react";
import { motion } from "framer-motion";

const SpringDigitalSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-[600px] lg:h-[822px] bg-[#030e02] overflow-hidden py-8 lg:py-0">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-transparent to-green-900/20"></div>
      
      <div className="w-full max-w-[1309px] mx-auto lg:absolute lg:left-[63px] lg:top-[51px] flex flex-col justify-start items-start gap-8 px-4 lg:px-0 py-8 lg:py-0">
        {/* First Row */}
        <motion.div 
          className="w-full flex flex-col lg:flex-row justify-start items-center gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img 
            className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[32px] object-cover shadow-2xl" 
            src="/images/springdigital/Rectangle.png"
            alt="Spring Digital Services Design 1"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img 
            className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[32px] object-cover shadow-2xl" 
            src="/images/springdigital/Rectangle-1.png"
            alt="Spring Digital Services Design 2"
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="w-full lg:w-[680px] flex flex-col justify-start items-start text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-full lg:w-[466px] text-white text-4xl md:text-5xl lg:text-7xl font-bold font-['Poppins'] leading-tight lg:leading-[80px] mb-6">
              Spring Digital Services
            </div>
            <div className="w-full flex flex-wrap justify-center lg:justify-start items-center gap-6 lg:gap-28">
              <motion.div 
                className="flex flex-col justify-start items-start gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-white text-lg lg:text-2xl font-semibold font-['Poppins']">
                  Graphics
                </div>
                <div>
                  <svg width="38" height="5" viewBox="0 0 38 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="38" height="4" fill="white"/>
                  </svg>
                </div>
              </motion.div>
              <motion.div 
                className="flex flex-col justify-start items-start gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-white text-lg lg:text-2xl font-semibold font-['Poppins']">
                  Logo
                </div>
                <div>
                  <svg width="38" height="5" viewBox="0 0 38 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="38" height="4" fill="white"/>
                  </svg>
                </div>
              </motion.div>
              <motion.div 
                className="flex flex-col justify-start items-start gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-white text-lg lg:text-2xl font-semibold font-['Poppins']">
                  Branding
                </div>
                <div>
                  <svg width="38" height="5" viewBox="0 0 38 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="38" height="4" fill="white"/>
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Second Row */}
        <motion.div 
          className="w-full flex flex-col md:flex-row justify-start items-center gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.img 
            className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[32px] object-cover shadow-2xl" 
            src="/images/springdigital/Rectangle-2.png"
            alt="Spring Digital Services Design 3"
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img 
            className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[32px] object-cover shadow-2xl" 
            src="/images/springdigital/Rectangle-3.png"
            alt="Spring Digital Services Design 4"
            whileHover={{ scale: 1.05, rotate: -3 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img 
            className="w-full max-w-[500px] h-60 md:h-72 lg:w-[555px] lg:h-80 rounded-[32px] object-cover shadow-2xl" 
            src="/images/springdigital/Rectangle-4.png"
            alt="Spring Digital Services Main Design"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
      
      {/* Floating Background Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400 rounded-full opacity-10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-green-300 rounded-full opacity-10 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default SpringDigitalSection; 