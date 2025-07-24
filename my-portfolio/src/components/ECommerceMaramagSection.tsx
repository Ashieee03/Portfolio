import React from "react";
import { motion } from "framer-motion";

const ECommerceMaramagSection: React.FC = () => {
  return (
    <div className="relative w-full h-[1131px] bg-[#030e02] overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute w-[2927px] h-[1493px] left-[-285px] top-[-341px] bg-[radial-gradient(ellipse_at_28%_8%,#030e02_38%,rgba(134,239,172,0.2)_100%)]" />
      
      {/* Title */}
      <motion.div 
        className="absolute left-[15%] md:left-[230px] top-[85px] text-white text-5xl md:text-7xl font-bold font-['Poppins'] leading-tight md:leading-[64px]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        E-Commerce Maramag
      </motion.div>
      
      {/* Subtitle */}
      <motion.div 
        className="absolute left-[15%] md:left-[441px] top-[140px] md:top-[168px] text-white text-lg md:text-2xl font-normal font-['Poppins']"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Web Based E-commerce for Wet Market
      </motion.div>
      
      {/* Main Product Page - Top Left */}
      <motion.img 
        className="absolute w-72 h-80 md:w-96 md:h-[409px] left-[5%] md:left-[283px] top-[220px] md:top-[292px] rounded-2xl shadow-2xl object-cover" 
        src="/images/e-com/Frame 1000004298.png"
        alt="E-Commerce Main Page"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      />
      
      {/* Product Details - Top Right */}
      <motion.img 
        className="absolute w-72 h-60 md:w-96 md:h-80 left-[55%] md:left-[719px] top-[220px] md:top-[292px] rounded-2xl shadow-2xl object-cover" 
        src="/images/e-com/Cart.png"
        alt="Shopping Cart Page"
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      />
      
      {/* Shopping Cart - Large Right */}
      <motion.img 
        className="hidden lg:block absolute w-[650px] h-[527px] left-[1467px] top-[405px] rounded-2xl shadow-2xl object-cover" 
        src="/images/e-com/Cart.png"
        alt="Shopping Cart Desktop View"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
      />
      
      {/* Mobile App View - Bottom Left */}
      <motion.img 
        className="absolute w-72 h-80 md:w-96 md:h-[402px] left-[5%] md:left-[283px] top-[500px] md:top-[765px] rounded-2xl shadow-2xl object-cover" 
        src="/images/e-com/Cart-1.png"
        alt="Mobile E-Commerce View"
        initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
      />
      
      {/* Checkout Process - Bottom Right */}
      <motion.img 
        className="absolute w-72 h-[400px] md:w-96 md:h-[570px] left-[55%] md:left-[719px] top-[500px] md:top-[669px] rounded-2xl shadow-2xl object-cover" 
        src="/images/e-com/Frame 1000004301.png"
        alt="Checkout Process"
        initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        viewport={{ once: true }}
      />
      
      {/* Service Tags - Mobile Responsive */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-[1000px] md:top-[1000px] w-[90%] max-w-[609px] h-36 px-4 md:px-8 bg-gradient-to-r from-white/30 to-white/20 rounded-[32px] backdrop-blur-md flex flex-col justify-center items-center gap-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center items-center gap-8 md:gap-20">
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-white text-lg md:text-2xl font-semibold font-['Poppins']">
              Frontend
            </div>
            <div>
              <svg width="39" height="4" viewBox="0 0 39 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="38" height="4" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-white text-lg md:text-2xl font-semibold font-['Poppins']">
              Backend
            </div>
            <div>
              <svg width="39" height="4" viewBox="0 0 39 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="38" height="4" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-white text-lg md:text-2xl font-semibold font-['Poppins']">
              Database
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

export default ECommerceMaramagSection; 