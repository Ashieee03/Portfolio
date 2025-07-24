import React from "react";
import { motion } from "framer-motion";

const TaylorLeanneSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 overflow-hidden py-16 px-4 md:px-8">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/20 via-transparent to-green-800/10"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.h2 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Taylor
                <br />
                Leanne
                <br />
                Natural
                <br />
                Beauty
              </motion.h2>
              
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-xl md:text-2xl font-medium">
                  Social Media Management
                </h3>
                <motion.div 
                  className="w-16 h-[3px] bg-white"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Images Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Mobile Mockup */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/taylorleanne/Rectangle.png"
                  alt="Taylor Leanne Natural Beauty - Mobile Mockup"
                  className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-3xl"></div>
              </motion.div>
              
              {/* Desktop/Tablet Mockup */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/taylorleanne/Rectangle-1.png"
                  alt="Taylor Leanne Natural Beauty - Desktop Mockup"
                  className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-3xl"></div>
              </motion.div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full opacity-20 blur-xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-300 rounded-full opacity-30 blur-lg"
              animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Floating Background Elements */}
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
    </section>
  );
};

export default TaylorLeanneSection; 