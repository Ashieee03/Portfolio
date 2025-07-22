import React from 'react';
import { motion } from 'framer-motion';

const mockups = [
  { src: '/images/visualbrandings/Image.png', alt: 'Branding Mockup 1', rotate: '-rotate-6' },
  { src: '/images/visualbrandings/Image-1.png', alt: 'Branding Mockup 2', rotate: 'rotate-3' },
  { src: '/images/visualbrandings/Rectangle.png', alt: 'Branding Mockup 3', rotate: '-rotate-12' },
  { src: '/images/visualbrandings/Rectangle-1.png', alt: 'Branding Mockup 4', rotate: 'rotate-6' },
  { src: '/images/visualbrandings/Rectangle-2.png', alt: 'Branding Mockup 5', rotate: '-rotate-3' },
];

export const VisualsBrandingBreaker = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-black via-[#0e1b0e] to-green-900 text-white p-10 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Mockup Cards */}
      <div className="flex flex-wrap lg:flex-col gap-5 items-center justify-center">
        {mockups.map((mockup, index) => (
          <motion.div
            key={index}
            className={`w-32 md:w-40 lg:w-48 bg-white p-2 rounded-xl shadow-lg transform ${mockup.rotate}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <img
              src={mockup.src}
              alt={mockup.alt}
              className="w-full h-auto rounded-md object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Right Text */}
      <div className="text-center lg:text-left max-w-lg">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-white">Visuals</span>
          <span className="text-[#B4FF00]">/</span>
          <span className="text-white">Brand</span>
          <span className="text-[#B4FF00]">ing</span>
        </h2>
        <p className="mt-4 text-sm md:text-base tracking-wide text-gray-300">
          BLOG ARTICLES / LOGO / REELS / STORIES / POSTS / SHORT FORMS
        </p>
      </div>
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