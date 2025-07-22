import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Shapes */}
      <motion.div 
        className="absolute opacity-10"
        initial={{ x: -100, y: -100 }}
        animate={{ 
          x: [-100, 50, -50, -100],
          y: [-100, -50, 50, -100]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "easeInOut"
        }}
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 191, 67, 0.8) 0%, rgba(139, 191, 67, 0) 70%)',
          filter: 'blur(40px)',
          top: '5%',
          left: '5%'
        }}
      />
      <motion.div 
        className="absolute opacity-10"
        initial={{ x: '80vw', y: '50vh' }}
        animate={{ 
          x: ['80vw', '70vw', '75vw', '80vw'],
          y: ['50vh', '60vh', '55vh', '50vh']
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "easeInOut"
        }}
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 191, 67, 0.8) 0%, rgba(139, 191, 67, 0) 70%)',
          filter: 'blur(40px)',
        }}
      />
      <motion.div 
        className="absolute opacity-10"
        initial={{ x: '30vw', y: '80vh' }}
        animate={{ 
          x: ['30vw', '35vw', '25vw', '30vw'],
          y: ['80vh', '75vh', '85vh', '80vh']
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "easeInOut"
        }}
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 191, 67, 0.8) 0%, rgba(139, 191, 67, 0) 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
};

export default AnimatedBackground; 