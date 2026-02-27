import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Leaf } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function BenefitCard({ icon, title, description, delay }: BenefitCardProps) {
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
      style={{ backgroundColor: 'var(--color-bg-white)' }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.15)',
      }}
    >
      <div 
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
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
          color: 'var(--color-text-muted)',
          fontFamily: 'Inter, sans-serif',
          lineHeight: 'var(--line-height-body)',
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export function WhyClean() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    <section 
      id="why-clean"
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1770773885958-19f06d6eb0d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMHNvbGFyJTIwcGFuZWxzJTIwcm9vZnRvcCUyMGNpdHl8ZW58MXx8fHwxNzcyMTMxMjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Dusty solar panels over city"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '16/10' }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontFamily: 'Poppins, sans-serif',
                lineHeight: 'var(--line-height-heading)',
              }}
            >
              Understanding the Importance of Solar Panel Cleaning
            </h2>
            <p 
              className="text-lg mb-6"
              style={{ 
                color: 'var(--color-text-main)',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 'var(--line-height-body)',
              }}
            >
              Here in North Texas, your solar panels face unique challenges—from 
              intense summer heat to seasonal pollen and dust storms. Clean panels 
              maximize energy output, translating into better returns on your investment 
              and a cleaner environment for Allen and our surrounding communities.
            </p>
            <p 
              className="text-lg"
              style={{ 
                color: 'var(--color-text-muted)',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 'var(--line-height-body)',
              }}
            >
              Regular professional cleaning ensures your solar panels perform at their 
              best, especially during the scorching Texas summer months when energy 
              demands are highest.
            </p>
          </motion.div>
        </div>

        {/* Benefit Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <BenefitCard
            icon={<Zap size={28} style={{ color: 'var(--color-accent-sky)' }} />}
            title="Maximizes Energy Capture"
            description="Clean panels can improve efficiency by up to 20%, ensuring you get the most from the powerful Texas sun."
            delay={0.3}
          />
          <BenefitCard
            icon={<Shield size={28} style={{ color: 'var(--color-accent-sky)' }} />}
            title="Extends Panel Lifespan"
            description="Regular cleaning prevents buildup that can cause long-term damage, protecting your investment for years to come."
            delay={0.45}
          />
          <BenefitCard
            icon={<Leaf size={28} style={{ color: 'var(--color-accent-sky)' }} />}
            title="Optimizes Resource Use"
            description="Better performance means more renewable energy and less reliance on traditional power sources in our community."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
