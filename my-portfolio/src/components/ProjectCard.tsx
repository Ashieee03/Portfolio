import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  mockups?: string[];
  tags: string[];
  isDark?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  mockups = [], 
  tags, 
  isDark = false 
}) => {
  return (
    <section className={`w-full py-20 ${isDark ? 'bg-forest-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className={`order-2 lg:order-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={`mb-8 text-body-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className={`px-4 py-1 rounded-full text-sm ${
                    isDark ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                variant="default" 
                className={isDark 
                  ? "bg-brand-accent text-gray-900 hover:bg-brand-accent/90" 
                  : "bg-brand-primary text-white hover:bg-brand-primary/90"
                }
              >
                VIEW PROJECT
              </Button>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            {mockups && mockups.length > 0 ? (
              mockups.map((mockup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, x: index * 15 - 15 }}
                  whileInView={{ opacity: 1, y: 0, x: index * 15 - 15 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${index > 0 ? 'absolute top-0 left-0' : ''} w-full`}
                  style={{ zIndex: mockups.length - index }}
                >
                  <img 
                    src={mockup} 
                    alt={`${title} mockup ${index + 1}`} 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard; 