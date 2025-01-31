import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

const projects: Project[] = [
  {
    title: 'BookRead',
    description: 'Digital library management system with advanced search capabilities',
    image: 'https://images.unsplash.com/photo-1491841651911-c44c30c34548?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://github.com/BizFuzz',
    category: 'Web App'
  },
  {
    title: 'Adaptive Headlight',
    description: 'IoT-based smart lighting system for improved road safety',
    image: 'https://images.unsplash.com/photo-1553341640-9397992456f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://github.com/ArshadAli01/AdaptiveAutomobileHeadlightProject',
    category: 'IoT'
  },
  {
    title: 'ResumeLens',
    description: 'AI-powered resume analysis and optimization tool',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600',
    link: 'https://github.com/ArshadAli01/ResumeLens.git',
    category: 'AI'
  },
  {
    title: 'acronymGenerator',
    description: 'Smart tool for generating meaningful acronyms',
    image: 'https://media.istockphoto.com/id/1143496243/photo/acronym-word-written-in-wooden-cube-newspaper.jpg?s=1024x1024&w=is&k=20&c=CndIWoOhRGi8IH5mu0Y7EiI4OKQnp8_QXXQe3KWG9WU=',
    link: 'https://acronym-generator-zeta.vercel.app/',
    category: 'Tool'
  },
  {
    title: 'VitaWeb',
    description: 'Modern portfolio website generator',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://vita-web-three.vercel.app/',
    category: 'Web App'
  },
  {
    title: '8PuzzleGame',
    description: 'Interactive puzzle game with AI solver',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=600',
    link: 'https://8-puzzle-game-sigma.vercel.app/',
    category: 'Game'
  },
  {
    title: 'NoteMaking Website',
    description: 'Cloud-based note-taking application',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600',
    link: 'https://note-making-website.vercel.app/',
    category: 'Web App'
  },
  {
    title: 'TicTacToe',
    description: 'Classic game with unbeatable AI opponent',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=600',
    link: 'https://tic-tac-toe-khaki-nu.vercel.app/',
    category: 'Game'
  },
  {
    title: 'ToDoList',
    description: 'Smart task management application',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600',
    link: 'https://roaring-kangaroo-05bcae.netlify.app/',
    category: 'Web App'
  }
];

const ProjectCard: React.FC<Project & { delay: number }> = ({ title, description, image, link, category, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full mb-3">
              {category}
            </span>
            <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {description}
            </p>
            <motion.a
              href={link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              GO TO PROJECT <ExternalLink size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects, demonstrating my expertise across different technologies and domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;