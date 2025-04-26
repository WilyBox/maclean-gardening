'use client';

import { motion } from "framer-motion";

type Service = {
  title: string;
  description: string;
  imageUrl: string;
};

type ServicesGridProps = {
  services: Service[];
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

const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <motion.ul
      className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {services.map((service, index) => (
        <motion.li
          key={index}
          className="p-6 border rounded-xl shadow-md flex flex-col items-start gap-4 bg-white"
          variants={itemVariants}
        >
        <h3 className="text-2xl font-semibold inline-block border-b-2 border-green-500 pb-1">{service.title}</h3>

          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-40 object-cover rounded-md"
          />

          <p className="text-gray-700 mt-2">
            {service.description}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ServicesGrid;
