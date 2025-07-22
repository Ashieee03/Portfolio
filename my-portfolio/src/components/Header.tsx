import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Enhanced animation values based on scroll position
  const opacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const blur = useTransform(scrollY, [0, 100], [8, 12]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const translateY = useTransform(scrollY, [0, 100], [0, -3]);
  
  const menuItems = ['Home', 'About', 'Projects', 'Contact'];

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu item hover variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        stiffness: 400,
        damping: 10
      }
    }),
    hover: { 
      scale: 1.1, 
      color: '#ffffff', 
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };
  
  // Container animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring" as const,
        stiffness: 400,
        damping: 20,
        when: "beforeChildren" as const,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.header 
      style={{ y: translateY, scale }}
      className="fixed top-6 left-0 right-0 z-50 w-full px-4"
    >
      <motion.div 
        style={{ opacity }}
        className={`max-w-[500px] mx-auto px-6 py-3 rounded-[90px] backdrop-blur-[15px] backdrop-brightness-[100%] ${
          scrolled 
            ? 'bg-[linear-gradient(90deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.7)_100%)] shadow-lg' 
            : 'bg-[linear-gradient(90deg,rgba(217,217,217,0.15)_0%,rgba(115,115,115,0.25)_100%)]'
        }`}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="text-white text-xl font-bold mr-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: 0.2,
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            <a href="#" className="flex items-center">
              <span className="ml-2">Portfolio</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:block"
          >
            <ul className="flex space-x-8">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item}
                  custom={index}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm transition-colors relative"
                  >
                    <span className={`${
                      scrolled ? 'text-white' : 'text-gray-200 hover:text-white'
                    }`}>
                      {item}
                    </span>
                    <motion.span 
                      className="absolute -bottom-1 left-0 h-0.5 bg-[#fbbc05]"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.2 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="md:hidden overflow-hidden mt-4"
          >
            <motion.div 
              className="bg-[rgba(0,0,0,0.8)] backdrop-blur-[15px] rounded-2xl mx-4 shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <motion.ul className="flex flex-col p-4">
                {menuItems.map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="py-3 border-b border-gray-800 last:border-0"
                  >
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-300 hover:text-white block transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 