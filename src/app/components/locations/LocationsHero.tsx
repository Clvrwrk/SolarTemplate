import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export function LocationsHero() {
  const [zipCode, setZipCode] = useState('');
  const navigate = useNavigate();

  // Allen zip codes for demo
  const allenZipCodes = ['75002', '75013'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!zipCode.trim()) {
      toast.error('Please enter a zip code');
      return;
    }

    // Check if it's an Allen zip code
    if (allenZipCodes.includes(zipCode.trim())) {
      toast.success('Great news! We service your area.', {
        description: 'Redirecting to your local page...',
      });
      setTimeout(() => {
        navigate('/Solar-Panel-Cleaning-Allen-Texas');
      }, 1000);
    } else {
      toast.info('Checking service availability...', {
        description: `We're looking up service options for ${zipCode}. Please scroll down to see all our service areas.`,
      });
      
      // Scroll to service areas
      setTimeout(() => {
        const element = document.getElementById('service-areas');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1500);
    }
  };

  return (
    <section 
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ 
        backgroundColor: 'var(--color-primary-navy)',
        minHeight: '70vh',
      }}
    >
      {/* Geometric Overlay Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(30deg, var(--color-accent-sky) 12%, transparent 12.5%, transparent 87%, var(--color-accent-sky) 87.5%, var(--color-accent-sky)),
            linear-gradient(150deg, var(--color-accent-sky) 12%, transparent 12.5%, transparent 87%, var(--color-accent-sky) 87.5%, var(--color-accent-sky)),
            linear-gradient(30deg, var(--color-accent-sky) 12%, transparent 12.5%, transparent 87%, var(--color-accent-sky) 87.5%, var(--color-accent-sky)),
            linear-gradient(150deg, var(--color-accent-sky) 12%, transparent 12.5%, transparent 87%, var(--color-accent-sky) 87.5%, var(--color-accent-sky))
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px',
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex items-center justify-center gap-2"
        >
          <MapPin size={28} style={{ color: 'var(--color-action-orange)' }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
          style={{ 
            fontFamily: 'Poppins, sans-serif',
            lineHeight: 'var(--line-height-heading)',
          }}
        >
          Find Solar Panel Cleaning Near You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto"
          style={{ 
            color: 'rgba(52, 152, 219, 0.9)',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 'var(--line-height-body)',
          }}
        >
          Our professional team is dedicated to delivering top-tier cleaning solutions 
          across North Texas. Enter your zip code or select your city below to secure a 
          clearer, more efficient power source.
        </motion.p>

        {/* Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSearch}
          className="max-w-xl mx-auto"
        >
          <div 
            className="flex items-center rounded-full overflow-hidden shadow-lg"
            style={{ backgroundColor: 'white' }}
          >
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Enter your zip code..."
              className="flex-1 px-6 py-4 text-lg outline-none"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                color: 'var(--color-text-main)',
              }}
            />
            <button
              type="submit"
              className="px-8 py-4 transition-all duration-300 flex items-center gap-2 font-semibold"
              style={{
                backgroundColor: 'var(--color-action-orange)',
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-action-orange-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-action-orange)';
              }}
            >
              <Search size={20} />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm mt-6"
          style={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Try: 75002 (Allen) • 75024 (Plano) • 75034 (Frisco)
        </motion.p>
      </div>
    </section>
  );
}
