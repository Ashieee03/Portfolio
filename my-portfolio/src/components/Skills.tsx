import { motion } from 'framer-motion';
import { FaFigma, FaSketch } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiMiro, SiAdobecreativecloud } from 'react-icons/si';

const softwareIcons = [
  { Icon: FaFigma, color: '#F24E1E', name: 'Figma' },
  { Icon: SiAdobephotoshop, color: '#31A8FF', name: 'Photoshop' },
  { Icon: SiAdobeillustrator, color: '#FF9A00', name: 'Illustrator' },
  { Icon: SiAdobexd, color: '#FF61F6', name: 'XD' },
  { Icon: FaSketch, color: '#F7B500', name: 'Sketch' },
  { Icon: SiMiro, color: '#FFD02F', name: 'Miro' },
  { Icon: SiAdobecreativecloud, color: '#FF0000', name: 'Adobe CC' },
];

const skillCategories = [
  { 
    name: "Design Skills",
    skills: [
      { name: "UI Design", level: 95 },
      { name: "UX Research", level: 90 },
      { name: "Wireframing", level: 92 },
      { name: "Prototyping", level: 94 },
    ] 
  },
  { 
    name: "Software",
    skills: [
      { name: "Adobe Suite", level: 92 },
      { name: "Figma", level: 95 },
      { name: "Sketch", level: 88 },
      { name: "Miro", level: 85 },
    ] 
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider font-heading">
            <span className="text-primary">Skills</span> & Software
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Proficient in industry-leading design tools and methodologies to create outstanding user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Skill Categories */}
          <div>
            {skillCategories.map((category, idx) => (
              <div key={idx} className="mb-12">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-xl font-bold mb-6 text-white"
                >
                  {category.name}
                </motion.h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <motion.div 
                        className="h-1.5 bg-gray-700 rounded-full"
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: skillIdx * 0.1 }}
                      >
                        <motion.div 
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIdx * 0.1 + 0.2 }}
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Software Icons */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl font-bold mb-8 text-white"
            >
              Software Proficiency
            </motion.h3>
            <div className="grid grid-cols-3 gap-8">
              {softwareIcons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center justify-center p-4 bg-darkBg rounded-lg shadow-lg"
                >
                  <item.Icon size={40} color={item.color} className="mb-3" />
                  <p className="text-sm text-gray-300">{item.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 