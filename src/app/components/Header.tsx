import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-primary-navy)' }}
            >
              <span 
                className="text-lg font-bold"
                style={{ 
                  color: 'var(--color-action-orange)',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                PF
              </span>
            </div>
            <div>
              <h1 
                className="text-lg font-bold leading-tight"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                Power Up Solar
              </h1>
              <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                Cleaning Services
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="transition-colors"
              style={{ color: 'var(--color-text-main)' }}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-clean')}
              className="transition-colors"
              style={{ color: 'var(--color-text-main)' }}
            >
              Why Clean?
            </button>
            <button
              onClick={() => navigate('/about-us')}
              className="transition-colors"
              style={{ color: 'var(--color-text-main)' }}
            >
              About
            </button>
            <button
              onClick={() => navigate('/our-solar-cleaning-process')}
              className="transition-colors"
              style={{ color: 'var(--color-text-main)' }}
            >
              Our Process
            </button>
            <button
              onClick={() => navigate('/service-areas')}
              className="transition-colors"
              style={{ color: 'var(--color-text-main)' }}
            >
              Service Areas
            </button>
            <button
              onClick={() => navigate('/contact-us')}
              className="transition-colors"
              style={{ color: 'var(--color-text-main)' }}
            >
              Contact
            </button>
          </nav>

          {/* CTA Button - Desktop */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            style={{
              backgroundColor: 'var(--color-action-orange)',
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              transform: 'translateY(0)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.backgroundColor = 'var(--color-action-orange-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'var(--color-action-orange)';
            }}
          >
            Get a Free Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: 'var(--color-primary-navy)' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 pt-4 pb-2">
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left py-2 px-4 rounded transition-colors"
                  style={{ color: 'var(--color-text-main)' }}
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('why-clean')}
                  className="text-left py-2 px-4 rounded transition-colors"
                  style={{ color: 'var(--color-text-main)' }}
                >
                  Why Clean?
                </button>
                <button
                  onClick={() => {
                    navigate('/about-us');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left py-2 px-4 rounded transition-colors"
                  style={{ color: 'var(--color-text-main)' }}
                >
                  About
                </button>
                <button
                  onClick={() => {
                    navigate('/our-solar-cleaning-process');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left py-2 px-4 rounded transition-colors"
                  style={{ color: 'var(--color-text-main)' }}
                >
                  Our Process
                </button>
                <button
                  onClick={() => {
                    navigate('/service-areas');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left py-2 px-4 rounded transition-colors"
                  style={{ color: 'var(--color-text-main)' }}
                >
                  Service Areas
                </button>
                <button
                  onClick={() => {
                    navigate('/contact-us');
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-2 px-6 py-3 rounded-lg font-semibold text-center"
                  style={{
                    backgroundColor: 'var(--color-action-orange)',
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Get a Free Quote
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}