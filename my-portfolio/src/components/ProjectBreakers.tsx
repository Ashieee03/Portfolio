import React from 'react';
import { motion } from 'framer-motion';

const mockups = [
  { src: '/images/visualbrandings/Image.png', alt: 'Branding Mockup 1', rotate: -6 },
  { src: '/images/visualbrandings/Image-1.png', alt: 'Branding Mockup 2', rotate: 3 },
  { src: '/images/visualbrandings/Rectangle.png', alt: 'Branding Mockup 3', rotate: -12 },
  { src: '/images/visualbrandings/Rectangle-1.png', alt: 'Branding Mockup 4', rotate: 6 },
  { src: '/images/visualbrandings/Rectangle-2.png', alt: 'Branding Mockup 5', rotate: -3 },
];

export const VisualsBrandingBreaker = () => {
  return (
    <section className="relative w-full h-[863px] bg-gradient-to-b from-[#a5b85d] via-[#4a6b2d] via-[25%] via-[#2e4c1a] via-[50%] via-[#1a2f0f] via-[75%] to-[#030e02] overflow-hidden">
      {/* Arrow Icon - Responsive positioning */}
      <div className="absolute left-[90%] xl:left-[1424px] top-[698px] text-black text-[200px] xl:text-[256px] font-normal font-['Astro_Futuristic_Font'] leading-none">
        v
      </div>
      
      {/* Button - Responsive positioning */}
      <div className="absolute w-28 h-14 left-[5%] xl:left-[61px] top-[509px] bg-[#fbbc05] rounded-xl flex items-center justify-center shadow-lg hover:bg-[#fbbc05]/80 transition-colors cursor-pointer">
        <span className="text-black font-bold text-sm">View Project</span>
      </div>
      
      {/* Background Image Layer */}
      <div className="absolute w-full h-[605px] left-0 top-[-5px]"></div>
      
      {/* Main Radial Background with proper gradient - Responsive */}
      <div 
        className="absolute w-full max-w-[2286px] h-[1340px] left-[-15%] xl:left-[-250px] top-[-5px]"
        style={{
          background: 'radial-gradient(ellipse at 28% 8%, #0a0a0a 38%, rgba(134, 239, 172, 0.2) 100%)'
        }}
      />
      
      {/* Enhanced Background Elements with smooth transition gradients */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'linear-gradient(180deg, #a5b85d 0%, #4a6b2d 25%, #2e4c1a 50%, #1a2f0f 75%, #030e02 100%)'
        }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Blurred Background Elements - Responsive */}
      <motion.div 
        className="absolute w-[60%] max-w-[815px] h-[826px] left-[-20%] xl:left-[-290px] top-[-366px] rounded-full blur-[200px]"
        style={{
          background: 'linear-gradient(180deg, #78716c 0%, transparent 100%)'
        }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute w-[45%] max-w-[599px] h-[600px] left-[-10%] xl:left-[-159px] top-[-336px] bg-stone-500 rounded-full blur-[103.50px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Title - Responsive font sizes and positioning */}
      <motion.div 
        className="absolute w-full max-w-[856px] left-[45%] xl:left-[770px] top-[160px]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-6xl xl:text-9xl font-bold font-['Poppins'] leading-tight xl:leading-[104px]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Visu</span>
          <span className="text-white">als/Bran</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">ding</span>
        </div>
      </motion.div>
      
      {/* Subtitle - Responsive font sizes and positioning */}
      <motion.div 
        className="absolute w-full max-w-[659px] left-[45%] xl:left-[784px] top-[380px] xl:top-[421px] text-white text-lg xl:text-2xl font-normal font-['Poppins']"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        BLOG ARTICLES/LOGO/REELS/STORIES/POSTS/SHORT FORMS
      </motion.div>
      
      {/* Desktop Layout - Portfolio Images with responsive positioning */}
      <div className="hidden lg:block">
        {/* Rectangle - Bottom Left - Responsive */}
        <motion.img 
          className="absolute w-48 xl:w-72 h-64 xl:h-96 left-[5%] xl:left-[62px] top-[500px] xl:top-[669.51px] origin-top-left rotate-[165deg] rounded-[33px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          src={mockups[0].src}
          alt={mockups[0].alt}
          initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 165 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 168 }}
        />
        
        {/* Square Image - Top Left - Responsive */}
        <motion.img 
          className="absolute w-48 xl:w-72 h-48 xl:h-72 left-[10%] xl:left-[142px] top-[20px] xl:top-[22.73px] origin-top-left rotate-[165deg] rounded-[32px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          src={mockups[1].src}
          alt={mockups[1].alt}
          initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 165 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 168 }}
        />
        
        {/* Medium Image - Center - Responsive */}
        <motion.img 
          className="absolute w-40 xl:w-64 h-40 xl:h-64 left-[12%] xl:left-[198px] top-[280px] xl:top-[367.63px] origin-top-left rotate-[165deg] rounded-[32px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          src={mockups[2].src}
          alt={mockups[2].alt}
          initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 165 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 168 }}
        />
        
        {/* Tall Rectangle - Top Right - Responsive */}
        <motion.img 
          className="absolute w-28 xl:w-40 h-56 xl:h-80 left-[32%] xl:left-[454px] top-[50px] xl:top-[67.15px] origin-top-left rotate-[165deg] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          src={mockups[3].src}
          alt={mockups[3].alt}
          initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 165 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 168 }}
        />
        
        {/* Tall Rectangle - Bottom Right - Responsive */}
        <motion.img 
          className="absolute w-28 xl:w-40 h-56 xl:h-80 left-[34%] xl:left-[479px] top-[320px] xl:top-[413.12px] origin-top-left rotate-[165deg] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          src={mockups[4].src}
          alt={mockups[4].alt}
          initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 165 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 168 }}
        />
      </div>
      
      {/* Mobile Responsive Layout */}
      <div className="lg:hidden absolute inset-0 flex flex-col items-center justify-center gap-6 pt-20 pb-20 px-4">
        {/* Mobile Title */}
        <div className="text-4xl md:text-6xl font-bold font-['Poppins'] leading-tight text-center mb-4">
          <span className="text-white">Visuals/</span>
          <span className="text-white">Branding</span>
        </div>
        
        {/* Mobile Subtitle */}
        <div className="text-white text-lg md:text-xl font-normal font-['Poppins'] text-center mb-8 px-4">
          BLOG ARTICLES • LOGO • REELS • STORIES • POSTS • SHORT FORMS
        </div>
        
        {/* Mobile Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {mockups.slice(0, 4).map((mockup, index) => (
            <motion.img
              key={index}
              src={mockup.src}
              alt={mockup.alt}
              className="w-full h-48 rounded-[20px] object-cover shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, rotate: mockup.rotate * 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: mockup.rotate }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
        
        {/* Mobile Button */}
        <div className="mt-8 w-32 h-14 bg-[#fbbc05] rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-black font-bold text-sm">View Project</span>
        </div>
      </div>
      
      {/* Additional smooth floating elements that complement the gradient - Responsive */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-24 xl:w-32 h-24 xl:h-32 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #a5b85d 0%, #4a6b2d 50%, transparent 100%)'
        }}
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-32 xl:w-40 h-32 xl:h-40 rounded-full opacity-8 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #2e4c1a 0%, #030e02 50%, transparent 100%)'
        }}
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-18 xl:w-24 h-18 xl:h-24 rounded-full opacity-12 blur-2xl"
        style={{
          background: 'radial-gradient(circle, #1a2f0f 0%, transparent 100%)'
        }}
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export const UIUXDesignBreaker = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-forest-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - UI/UX Mockups */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[380px] order-1 md:order-1">
            {/* Top wireframe */}
            <motion.div 
              className="absolute top-0 left-4 md:left-20 w-[180px] md:w-[220px] z-20 transform -rotate-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://assets.materialup.com/uploads/c2db5f3f-6da7-4b8e-8c4a-30efc6c1fc60/preview.jpg" 
                alt="UI/UX wireframe" 
                className="w-full h-auto rounded-lg shadow-lg bg-white"
              />
            </motion.div>

            {/* Middle website mockup */}
            <motion.div 
              className="absolute top-1/4 right-4 md:right-10 w-[200px] md:w-[250px] z-30 transform rotate-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://assets.materialup.com/uploads/a5d6d2da-53c5-4f1a-8d5c-3679f2830b9c/preview.jpg" 
                alt="UI/UX website mockup" 
                className="w-full h-auto rounded-lg shadow-lg bg-white"
              />
            </motion.div>

            {/* Bottom e-commerce mockup */}
            <motion.div 
              className="absolute bottom-0 left-0 md:left-4 w-[200px] md:w-[250px] z-10 transform -rotate-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://assets.materialup.com/uploads/b6c33a45-13e5-46b2-b29c-f5fa7c460dfe/preview.jpg" 
                alt="UI/UX e-commerce mockup" 
                className="w-full h-auto rounded-lg shadow-lg bg-white"
              />
            </motion.div>
          </div>

          {/* Right side - Text */}
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 md:text-right">
              <span className="opacity-40">UI</span>
              <span className="text-white">/</span>
              <span className="text-white">UX</span>
              <br />
              <span className="text-white">Des</span>
              <span className="opacity-40">ign</span>
            </h2>
            <p className="text-white text-xs md:text-sm uppercase tracking-wider mt-4 md:text-right">
              LANDING PAGE/ WIREFRAME/ PROTOTYPING
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default { VisualsBrandingBreaker, UIUXDesignBreaker }; 