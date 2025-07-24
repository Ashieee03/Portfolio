import { Button } from "./ui/button";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function HeroSection(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'initial' | 'compiled' | 'scattered'>('initial');
  const portfolioControls = useAnimation();

  useEffect(() => {
    // Trigger the compile and scatter animation sequence
    const animatePortfolio = async () => {
      // First, compile all images to center
      setAnimationPhase('compiled');
      await portfolioControls.start("compiled");
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 800));
      // Then scatter to final positions
      setAnimationPhase('scattered');
      await portfolioControls.start("scattered");
      setIsLoaded(true);
    };

    const timer = setTimeout(animatePortfolio, 1000);
    return () => clearTimeout(timer);
  }, [portfolioControls]);

  // Animation variants for portfolio images
  const portfolioVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
      x: 0,
      y: 0,
      rotate: 0,
    },
    compiled: {
      opacity: 1,
      scale: 0.8,
      x: 0,
      y: 0,
      rotate: 0,
    },
    scattered: {
      opacity: 1,
      scale: 1,
    }
  };

  // Transition settings
  const portfolioTransition = {
    duration: 0.8,
    ease: [0.4, 0, 0.2, 1] as const
  };

  // Individual positions for scattered state
  const scatteredPositions = {
    mac: { x: 0, y: 0, rotate: 0, scale: 1 },
    iphone1: { x: -180, y: 20, rotate: -15, scale: 1 },
    iphone2: { x: 180, y: 20, rotate: 15, scale: 1 },
    portfolio1: { x: -200, y: -120, rotate: -12, scale: 1 },
    portfolio2: { x: 200, y: -100, rotate: 12, scale: 1 }
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-[#030e02] overflow-hidden pt-32" id="home">
      {/* Enhanced Background elements with harmonious color scheme */}
      <div className="absolute inset-0 w-full h-full">
        {/* Main radial gradient background - more curved/oval with harmonious colors */}
        <motion.div 
          className="absolute w-[2359px] h-[1539px] left-[-462px] top-[-980px] rounded-[1179.5px/769.5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shadow-[inset_14px_4px_4px_-1px_rgba(0,0,0,0.25)]" 
          style={{
            background: 'radial-gradient(ellipse 50% 50% at 62% 45%, #030e02 38%, rgba(165, 184, 93, 0.16) 100%), linear-gradient(180deg, #030e02 0%, rgba(74, 107, 45, 1) 100%)'
          }}
          animate={{
            scale: [1, 1.02, 1],
            rotate: [0, 1, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Rectangle overlay */}
        <div className="absolute w-[1536px] h-[1148px] left-0 top-0" />

        {/* Enhanced animated glow effects with consistent green tones */}
        <motion.div 
          className="absolute w-[1027px] h-[1027px] left-[545px] top-[-841px] bg-[#4a6b2d]/40 rounded-full blur-[77.8px]"
          animate={{ 
            scale: [1, 1.2, 1.1, 1],
            opacity: [0.4, 0.7, 0.5, 0.4],
            x: [0, 20, -10, 0],
            y: [0, -30, 15, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute w-16 h-16 left-[23px] top-[-129px] bg-[#4a6b2d]/40 rounded-full blur-[77.8px]"
          animate={{ 
            y: [0, -30, 10, 0], 
            x: [0, 15, -5, 0],
            scale: [1, 1.4, 1.2, 1],
            opacity: [0.4, 0.8, 0.6, 0.4]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute w-16 h-16 left-[347px] top-[517px] bg-[#a5b85d]/30 rounded-full blur-[77.8px]"
          animate={{ 
            y: [0, 25, -10, 0], 
            x: [0, -15, 8, 0],
            scale: [1, 1.3, 1.1, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Additional floating background elements with harmonious green theme */}
        <motion.div 
          className="absolute top-1/2 left-1/5 w-40 h-40 bg-[#4a6b2d] rounded-full opacity-8 blur-3xl"
          animate={{ 
            y: [0, -35, 10, 0], 
            x: [0, 20, -10, 0],
            scale: [1, 1.2, 1.1, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-[#2e4c1a] rounded-full opacity-12 blur-3xl"
          animate={{ 
            y: [0, 30, -15, 0], 
            x: [0, -18, 12, 0],
            opacity: [0.12, 0.25, 0.18, 0.12]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-[#a5b85d] rounded-full opacity-15 blur-2xl"
          animate={{ 
            scale: [1, 1.4, 1.2, 1],
            rotate: [0, 180, 270, 360],
            opacity: [0.15, 0.3, 0.22, 0.15]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto px-4">
        {/* Main content */}
        <div className="flex flex-col items-center justify-center w-full text-center mb-8">
          <motion.h2 
            className="font-normal italic text-[28px] tracking-[0] mb-4 relative"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <motion.span 
              className="bg-gradient-to-r from-white via-[#a5b85d] to-white bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 8px rgba(165, 184, 93, 0.3)',
                filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.1))'
              }}
            >
              HELLO I&apos;M ASHLEY
            </motion.span>
          </motion.h2>

          <motion.h1 
            className="text-6xl font-bold mb-12 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            <motion.span
              className="bg-gradient-to-r from-white via-[#fbbc05] to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{
                textShadow: '0 0 8px rgba(251, 188, 5, 0.2)',
                filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.1))'
              }}
            >
              SMM,
            </motion.span>{" "}
            <motion.span 
              className="bg-gradient-to-r from-[#a5b85d] via-white to-[#a5b85d] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              style={{
                textShadow: '0 0 8px rgba(165, 184, 93, 0.3)',
                filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.1))'
              }}
            >
              UI/UX
            </motion.span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              style={{
                textShadow: '0 0 8px rgba(255, 255, 255, 0.2)',
                filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.1))'
              }}
            >
              DESIGNER
            </motion.span>
          </motion.h1>

          {/* Portfolio showcase with compile and scatter animation */}
          <motion.div 
            className="relative w-3/4 max-w-[75vw] h-[400px] mx-auto mt-6 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Central Mac monitor */}
            <motion.div 
              className="absolute left top-200 transform -translate-x-1/2 -translate-y-1/2 z-50"
              initial={portfolioVariants.initial}
              animate={{
                ...portfolioVariants[animationPhase],
                x: animationPhase === "scattered" ? scatteredPositions.mac.x : 0,
                y: animationPhase === "scattered" ? scatteredPositions.mac.y : 0,
                rotate: animationPhase === "scattered" ? scatteredPositions.mac.rotate : 0,
              }}
              transition={portfolioTransition}
            >
              <motion.img
                className="w-[380px] h-auto"
                alt="Mac Studio"
                src="/images/hero-section/mac.png"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Left iPhone */}
            <motion.div 
              className="absolute left-1/3 top-200 transform -translate-x-1/2 -translate-y-1/2 w-[140px] h-auto z-10"
              initial={portfolioVariants.initial}
              animate={{
                ...portfolioVariants[animationPhase],
                x: animationPhase === "scattered" ? scatteredPositions.iphone1.x : 0,
                y: animationPhase === "scattered" ? scatteredPositions.iphone1.y : 0,
                rotate: animationPhase === "scattered" ? scatteredPositions.iphone1.rotate : 0,
              }}
              transition={portfolioTransition}
            >
              <motion.img
                className="w-full h-auto"
                alt="iPhone 1"
                src="/images/hero-section/iphone1.png"
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Right iPhone */}
            <motion.div 
              className="absolute left-1/2 top-200 transform -translate-x-1/2 -translate-y-1/2 w-[140px] h-auto z-10"
              initial={portfolioVariants.initial}
              animate={{
                ...portfolioVariants[animationPhase],
                x: animationPhase === "scattered" ? scatteredPositions.iphone2.x : 0,
                y: animationPhase === "scattered" ? scatteredPositions.iphone2.y : 0,
                rotate: animationPhase === "scattered" ? scatteredPositions.iphone2.rotate : 0,
              }}
              transition={portfolioTransition}
            >
              <motion.img
                className="w-full h-auto"
                alt="iPhone 2"
                src="/images/hero-section/iphone2.png"
                whileHover={{ scale: 1.1, rotate: 8 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Top left portfolio piece */}
            <motion.div 
              className="absolute left top-200 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] z-20"
              initial={portfolioVariants.initial}
              animate={{
                ...portfolioVariants[animationPhase],
                x: animationPhase === "scattered" ? scatteredPositions.portfolio1.x : 0,
                y: animationPhase === "scattered" ? scatteredPositions.portfolio1.y : 0,
                rotate: animationPhase === "scattered" ? scatteredPositions.portfolio1.rotate : 0,
              }}
              transition={portfolioTransition}
            >
              <motion.img
                className="w-full h-full object-cover rounded-lg"
                alt="Portfolio 1"
                src="/images/hero-section/Portfolio1.png"
                whileHover={{ scale: 1.15, rotate: -5, z: 100 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Top right portfolio piece */}
            <motion.div 
              className="absolute left- top-200 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] z-40"
              initial={portfolioVariants.initial}
              animate={{
                ...portfolioVariants[animationPhase],
                x: animationPhase === "scattered" ? scatteredPositions.portfolio2.x : 0,
                y: animationPhase === "scattered" ? scatteredPositions.portfolio2.y : 0,
                rotate: animationPhase === "scattered" ? scatteredPositions.portfolio2.rotate : 0,
              }}
              transition={portfolioTransition}
            >
              <motion.img
                className="w-full h-full object-cover rounded-lg"
                alt="Portfolio 2"
                src="/images/hero-section/Portfolio2.png"
                whileHover={{ scale: 1.15, rotate: 12, z: 100 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Floating particles around portfolio */}
            {isLoaded && [...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#a5b85d] rounded-full opacity-60"
                initial={{ 
                  x: Math.random() * 400 - 200, 
                  y: Math.random() * 400 - 200,
                  scale: 0 
                }}
                animate={{
                  x: Math.random() * 600 - 300,
                  y: Math.random() * 600 - 300,
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Action buttons with enhanced animations */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div 
            className="flex items-center justify-center gap-8 px-12 py-5 rounded-[90px] backdrop-blur-[15px] bg-[linear-gradient(90deg,rgba(217,217,217,0.1)_0%,rgba(115,115,115,0.2)_100%)] shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="link"
                className="text-[#fbbc05] font-medium text-base h-auto"
              >
                See My Works
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="link"
                className="text-white font-medium text-base h-auto"
              >
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 