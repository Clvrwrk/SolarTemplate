import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export function StickyMobileSearch() {
  const [zipCode, setZipCode] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Allen zip codes for demo
  const allenZipCodes = ['75002', '75013'];

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky search after scrolling past hero section (approx 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!zipCode.trim()) {
      toast.error('Please enter a zip code');
      return;
    }

    if (allenZipCodes.includes(zipCode.trim())) {
      toast.success('Great news! We service your area.', {
        description: 'Redirecting to your local page...',
      });
      setTimeout(() => {
        navigate('/Solar-Panel-Cleaning-Allen-Texas');
      }, 1000);
    } else {
      toast.info('Checking service availability...', {
        description: `We're looking up service options for ${zipCode}.`,
      });
      
      // Scroll to custom quote form
      setTimeout(() => {
        const element = document.getElementById('custom-quote');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1500);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed top-16 left-0 right-0 z-40 px-4 py-3 shadow-lg"
          style={{ backgroundColor: 'var(--color-primary-navy)' }}
        >
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <div className="flex-1 flex items-center rounded-full overflow-hidden" style={{ backgroundColor: 'white' }}>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter zip code..."
                className="flex-1 px-4 py-2 text-sm outline-none"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: 'var(--color-text-main)',
                }}
              />
              {zipCode && (
                <button
                  type="button"
                  onClick={() => setZipCode('')}
                  className="px-2"
                  aria-label="Clear search"
                >
                  <X size={16} style={{ color: 'var(--color-text-muted)' }} />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-action-orange)',
                color: 'white',
              }}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
