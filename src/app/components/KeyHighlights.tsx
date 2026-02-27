import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Sprout, Clock } from 'lucide-react';

interface HighlightProps {
  icon: React.ReactNode;
  text: string;
  delay: number;
}

function Highlight({ icon, text, delay }: HighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3 min-w-[250px] justify-center sm:justify-start"
    >
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
      >
        {icon}
      </div>
      <span 
        className="text-white font-medium text-sm sm:text-base"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {text}
      </span>
    </motion.div>
  );
}

export function KeyHighlights() {
  return (
    <section 
      className="py-8 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-primary-navy)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-6 sm:gap-8">
          <Highlight
            icon={<TrendingUp size={20} color="white" />}
            text="Enhances efficiency by up to 20%"
            delay={0}
          />
          <Highlight
            icon={<Sprout size={20} color="white" />}
            text="Eco-friendly techniques"
            delay={0.15}
          />
          <Highlight
            icon={<Clock size={20} color="white" />}
            text="Extends panel lifespan"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
