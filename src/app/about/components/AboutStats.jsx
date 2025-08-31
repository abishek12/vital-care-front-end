"use client"

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Counter component for counting animation
const Counter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      // Extract numeric value from props (handles % and + symbols)
      const numValue = parseInt(value.replace(/\D/g, ''));
      
      let duration = 2000; // 2 seconds default
      
      // Adjust duration based on the value size
      if (numValue > 100) duration = 2500;
      if (numValue > 500) duration = 3000;
      
      let startTime = null;
      
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Ease out function for smooth deceleration
        const easeOut = 1 - Math.pow(1 - percentage, 3);
        
        const currentCount = Math.floor(easeOut * numValue);
        
        setCount(currentCount);
        
        if (progress < duration) {
          requestAnimationFrame(animateCount);
        } else {
          // Ensure we end at the exact value
          setCount(numValue);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [isInView, value]);
  
  // Format the displayed value with original symbols
  const displayValue = () => {
    if (value.includes('+')) return `${count}+`;
    if (value.includes('%')) return `${count}%`;
    return count;
  };

  return (
    <motion.div 
      ref={ref}
      variants={itemVariants}
      className="relative flex flex-col items-center justify-center rounded-xl bg-white py-4 text-center"
    >
      <motion.div 
        className="text-3xl font-extrabold text-[#0b3a74]"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {isInView ? displayValue() : value.replace(/\d/g, '0').replace('+', '').replace('%', '')}
      </motion.div>
      
      <motion.div 
        className="mt-1 text-xs text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

const AboutStats = () => {
  return (
    <section aria-label="Key statistics" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <motion.div 
          className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Counter value="10+" label="Years Combined Experience" />
          <Counter value="50+" label="Qualified Support Staff" />
          <Counter value="120+" label="Participants Served" />
          <Counter value="96%" label="Positive Feedback" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStats;