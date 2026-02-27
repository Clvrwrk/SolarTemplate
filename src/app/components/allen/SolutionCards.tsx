import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Leaf, Shield, Droplet } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function SolutionCard({ icon, title, description, delay }: CardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="p-6 rounded-xl shadow-md transition-all duration-300"
      style={{ backgroundColor: 'var(--color-bg-light-blue)' }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 12px 35px -10px rgba(52, 152, 219, 0.3)',
      }}
    >
      <div 
        className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
        style={{ backgroundColor: 'white' }}
      >
        {icon}
      </div>
      <h3 
        className="text-xl font-semibold mb-3"
        style={{ 
          color: 'var(--color-primary-navy)',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        {title}
      </h3>
      <p 
        style={{ 
          color: 'var(--color-text-main)',
          fontFamily: 'Inter, sans-serif',
          lineHeight: 'var(--line-height-body)',
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export function SolutionCards() {
  return (
    <section 
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontFamily: 'Poppins, sans-serif',
            lineHeight: 'var(--line-height-heading)',
          }}
        >
          The Power Up Solution for Allen Homes
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <SolutionCard
            icon={<Leaf size={32} style={{ color: 'var(--color-accent-sky)' }} />}
            title="Safe & Eco-Friendly"
            description="We use eco-friendly options, using agents that effectively remove grime without harming the panels or the environment (or your landscaping!)."
            delay={0}
          />
          <SolutionCard
            icon={<Shield size={32} style={{ color: 'var(--color-accent-sky)' }} />}
            title="Protect Your Investment"
            description="Residential cleanings can prevent potential damages caused by neglected panels, such as cracking from accumulated heat or unintended scratches from improper cleaning methods."
            delay={0.15}
          />
          <SolutionCard
            icon={<Droplet size={32} style={{ color: 'var(--color-accent-sky)' }} />}
            title="The Right Techniques"
            description="We strictly avoid using pressure washers or high-pressure hoses, as they can damage the panels and their mounting systems. Instead, we use non-abrasive brushes and filtered water."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
