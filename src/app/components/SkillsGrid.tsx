'use client';

import { motion } from "framer-motion";

type Skill = {
  title: string;
  description: string;
  imageUrl?: string;
};

type SkillsGridProps = {
  skills: Skill[];
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SkillsGrid = ({ skills }: SkillsGridProps) => {
  return (
    <motion.ul
      className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      
      {skills.map((skill, index) => (
        <motion.li
          key={index}
          className="p-4 m-1 border rounded-lg shadow-md flex items-start gap-4"
          variants={itemVariants}
        >
          <img src={skill.imageUrl}
              alt={skill.title}
              className="w-16 h-16 object-contain"
          />
          <div>
            <h3 className="text-xl text-gray-900 font-semibold">{skill.title}</h3>
            <p className="text-gray-600 mt-2">{skill.description}</p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SkillsGrid;
