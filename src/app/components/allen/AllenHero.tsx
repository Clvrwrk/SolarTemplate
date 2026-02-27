import { motion } from 'motion/react';
import { CheckCircle, Shield, MapPin } from 'lucide-react';

export function AllenHero() {
  const scrollToContact = () => {
    const element = document.getElementById('allen-contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ minHeight: '85vh' }}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1755569645703-9b84c3ee1280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdWJ1cmJhbiUyMGhvbWUlMjBUZXhhcyUyMGJsdWUlMjBza3l8ZW58MXx8fHwxNzcyMTMxNzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          filter: 'blur(2px)',
        }}
      />
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(11, 43, 83, 0.82)' }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
          style={{ 
            fontFamily: 'Poppins, sans-serif',
            lineHeight: 'var(--line-height-heading)',
          }}
        >
          Expert Residential Solar Panel Cleaning in Allen, TX
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl mx-auto"
          style={{ 
            color: 'rgba(255, 255, 255, 0.9)',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 'var(--line-height-body)',
          }}
        >
          Maximize efficiency with our expert solar panel cleaning services. We protect 
          your Allen home's investment by safely removing tough Texas dust, spring pollen, 
          and debris so your panels harness optimal energy.
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={scrollToContact}
          className="px-10 py-5 rounded-lg font-bold text-xl shadow-lg transition-all duration-300"
          style={{
            backgroundColor: 'var(--color-action-orange)',
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
          }}
          whileHover={{ 
            y: -3,
            boxShadow: '0 12px 30px -5px rgba(242, 140, 40, 0.5)',
          }}
          whileTap={{ y: 1 }}
        >
          Get My Free Allen Quote
        </motion.button>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8"
        >
          <div className="flex items-center gap-2">
            <MapPin 
              size={24} 
              style={{ color: 'var(--color-action-orange)' }}
            />
            <span 
              className="text-white text-sm sm:text-base font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Locally Owned
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <CheckCircle 
              size={24} 
              style={{ color: 'var(--color-action-orange)' }}
            />
            <span 
              className="text-white text-sm sm:text-base font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Eco-Friendly Products
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Shield 
              size={24} 
              style={{ color: 'var(--color-action-orange)' }}
            />
            <span 
              className="text-white text-sm sm:text-base font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Fully Insured
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}