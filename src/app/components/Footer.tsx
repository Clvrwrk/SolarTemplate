import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const serviceAreas = [
    'Allen, TX',
    'Plano, TX',
    'Frisco, TX',
    'McKinney, TX',
    'Prosper, TX',
    'Celina, TX',
  ];

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
      }
    }
  };

  return (
    <footer 
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ 
        backgroundColor: 'var(--color-primary-navy)',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'white' }}
              >
                <span 
                  className="text-lg font-bold"
                  style={{ 
                    color: 'var(--color-action-orange)',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  PF
                </span>
              </div>
              <div>
                <h3 
                  className="text-lg font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Power Up Solar
                </h3>
                <p className="text-xs opacity-80">Cleaning Services</p>
              </div>
            </div>
            <p 
              className="text-sm opacity-90 mb-4"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                lineHeight: 'var(--line-height-body)',
              }}
            >
              Professional solar panel cleaning services for residential and commercial 
              properties throughout North Texas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('why-clean')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Why Clean?
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/about-us')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/our-solar-cleaning-process')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/contact-us')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/dallas-solar-cleaning-case-studies')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/press-media-kit')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Press & Media
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 
              className="font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Service Areas
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-sm opacity-90">{area}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('/service-areas')}
              className="text-xs mt-4 px-4 py-2 rounded transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--color-action-orange)',
                color: 'white',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-action-orange-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-action-orange)';
              }}
            >
              View All Service Areas
            </button>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact Us
            </h4>
            <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 opacity-75" />
                <span className="text-sm opacity-90">
                  Allen, TX 75002
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={18} className="flex-shrink-0 mt-0.5 opacity-75" />
                <a 
                  href="tel:+12145550123" 
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  (214) 555-0123
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={18} className="flex-shrink-0 mt-0.5 opacity-75" />
                <a 
                  href="mailto:info@powerupsolar.com" 
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  info@powerupsolar.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 mt-8 text-center text-sm opacity-75"
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <p>
            © {new Date().getFullYear()} Power Up Solar Cleaning Services. All rights reserved.
          </p>
          <p className="mt-2">
            Fully Licensed & Insured • Serving Allen, TX and North Texas Communities
          </p>
        </div>
      </div>
    </footer>
  );
}