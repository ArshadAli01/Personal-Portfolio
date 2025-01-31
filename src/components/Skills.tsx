import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, FileJson, Monitor, Cpu, Database,
  Server, Box, Terminal, Figma, Github
} from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
      className="bg-white rounded-lg p-6 flex flex-col items-center justify-center space-y-4 shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-gray-800 w-12 h-12">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-800">{name}</h3>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { icon: <Code2 size={48} />, name: 'HTML/CSS' },
    { icon: <FileJson size={48} />, name: 'JavaScript' },
    { icon: <Monitor size={48} />, name: 'React' },
    { icon: <Cpu size={48} />, name: 'Java' },
    { icon: <Database size={48} />, name: 'MySQL' },
    { icon: <Server size={48} />, name: 'MongoDB' },
    { icon: <Box size={48} />, name: 'Docker' },
    { icon: <Terminal size={48} />, name: 'Linux' },
    { icon: <Figma size={48} />, name: 'Figma' },
    { icon: <Github size={48} />, name: 'GitHub' }
  ];

  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I use to create exceptional software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;