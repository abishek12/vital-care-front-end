"use client";
import { motion } from "framer-motion";

export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const iconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.1,
    },
  },
};

const AboutCard = ({ icon, title, desc }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="inline-flex size-11 items-center justify-center rounded-full bg-[#e23d35]/10 text-[#e23d35]">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-extrabold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
};

const AboutValueCard = ({ icon: Icon, title, desc, variants }) => {
  return (
    <motion.div
      variants={variants || cardVariants}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        className="inline-flex size-11 items-center justify-center rounded-full bg-[#e23d35] text-white ring-4 ring-[#e23d35]/20"
        variants={iconVariants}
      >
        <Icon className="size-6" aria-hidden="true" />
      </motion.div>
      <h3 className="mt-4 text-lg font-extrabold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
    </motion.div>
  );
};

export { AboutCard, AboutValueCard };
