import { motion } from 'motion/react';
import { CheckCircle, Shield, MapPin } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg-white)' }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sun-rays" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="var(--color-accent-sky)" />
              <line x1="50" y1="50" x2="50" y2="20" stroke="var(--color-accent-sky)" strokeWidth="1" />
              <line x1="50" y1="50" x2="80" y2="50" stroke="var(--color-accent-sky)" strokeWidth="1" />
              <line x1="50" y1="50" x2="70" y2="30" stroke="var(--color-accent-sky)" strokeWidth="1" />
              <line x1="50" y1="50" x2="30" y2="30" stroke="var(--color-accent-sky)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sun-rays)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontFamily: 'Poppins, sans-serif',
            lineHeight: 'var(--line-height-heading)',
          }}
        >
          Expert Solar Panel Cleaning Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          style={{ 
            color: 'var(--color-text-main)',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 'var(--line-height-body)',
          }}
        >
          Maximize efficiency with our professional solar panel cleaning services. 
          Our expert team ensures your panels harness optimal energy by removing dirt 
          and debris from the intense Texas sun.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={scrollToContact}
          className="px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300"
          style={{
            backgroundColor: 'var(--color-action-orange)',
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
          }}
          whileHover={{ 
            y: -3,
            boxShadow: '0 10px 25px -5px rgba(242, 140, 40, 0.4)',
          }}
          whileTap={{ y: 1 }}
        >
          Schedule Your Cleaning Today
        </motion.button>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8"
        >
          <div className="flex items-center gap-2">
            <CheckCircle 
              size={24} 
              style={{ color: 'var(--color-accent-sky)' }}
            />
            <span 
              className="text-sm sm:text-base"
              style={{ 
                color: 'var(--color-text-main)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Eco-Friendly Products
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Shield 
              size={24} 
              style={{ color: 'var(--color-accent-sky)' }}
            />
            <span 
              className="text-sm sm:text-base"
              style={{ 
                color: 'var(--color-text-main)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Fully Insured
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin 
              size={24} 
              style={{ color: 'var(--color-accent-sky)' }}
            />
            <span 
              className="text-sm sm:text-base"
              style={{ 
                color: 'var(--color-text-main)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Serving Allen, TX & Surrounding Areas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
