"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number; // задержка в секундах
  duration?: number; // длительность анимации
}

export default function FadeInSection({ 
  children, 
  delay = 0, 
  duration = 0.6 
}: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}      
      whileInView={{ opacity: 1, y: 0 }}   
      transition={{ duration, delay }}     
      viewport={{ once: true, amount: 0.2 }} 
    >
      {children}
    </motion.div>
  );
}
