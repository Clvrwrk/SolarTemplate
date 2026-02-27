import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Home, Building2, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');
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

  const residentialTips = [
    'Regularly inspect panels for dirt and debris buildup',
    'Use a soft brush or cloth to avoid scratching surfaces',
    'Clean during cooler parts of the day to prevent thermal shock',
    'Consider professional cleaning for hard-to-reach rooftop installations',
    'Schedule cleanings after major dust storms or pollen season',
  ];

  return (
    <section 
      id="services"
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-white)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontFamily: 'Poppins, sans-serif',
            lineHeight: 'var(--line-height-heading)',
          }}
        >
          Types of Solar Panel Cleaning Services Available
        </motion.h2>

        {/* Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab('residential')}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            style={{
              backgroundColor: activeTab === 'residential' 
                ? 'var(--color-accent-sky)' 
                : 'var(--color-bg-gray)',
              color: activeTab === 'residential' 
                ? 'white' 
                : 'var(--color-text-main)',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <Home size={20} />
            Residential
          </button>
          <button
            onClick={() => setActiveTab('commercial')}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            style={{
              backgroundColor: activeTab === 'commercial' 
                ? 'var(--color-accent-sky)' 
                : 'var(--color-bg-gray)',
              color: activeTab === 'commercial' 
                ? 'white' 
                : 'var(--color-text-main)',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <Building2 size={20} />
            Commercial
          </button>
        </motion.div>

        {/* Residential Content */}
        {activeTab === 'residential' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div className="rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771479755055-6a305f50845e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljaWFuJTIwY2xlYW5pbmclMjBzb2xhciUyMHBhbmVscyUyMHJlc2lkZW50aWFsJTIwcm9vZnxlbnwxfHx8fDE3NzIxMzEyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technician cleaning residential solar panels"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>

            <div className="order-1 md:order-2">
              <h3 
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Residential Solar Panel Cleaning Solutions
              </h3>
              <p 
                className="text-lg mb-6"
                style={{ 
                  color: 'var(--color-text-main)',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 'var(--line-height-body)',
                }}
              >
                Residential solar panel cleaning is essential for homeowners in Allen, Plano, 
                Frisco, and throughout North Texas wanting to maximize their renewable energy 
                investments. Our professional team understands the unique challenges of Texas 
                weather and provides thorough, safe cleaning for your home's solar system.
              </p>

              <div className="space-y-3">
                <h4 
                  className="font-semibold mb-3"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Homeowner Best Practices:
                </h4>
                {residentialTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle 
                      size={20} 
                      className="flex-shrink-0 mt-1"
                      style={{ color: 'var(--color-accent-sky)' }}
                    />
                    <span 
                      style={{ 
                        color: 'var(--color-text-main)',
                        fontFamily: 'Inter, sans-serif',
                        lineHeight: 'var(--line-height-body)',
                      }}
                    >
                      {tip}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Commercial Content */}
        {activeTab === 'commercial' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1547688744-d9864002eab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwc29sYXIlMjBwYW5lbCUyMGluc3RhbGxhdGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MjEzMTI2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Commercial solar panel installation"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>

            <div>
              <h3 
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Commercial Panel Cleaning Options
              </h3>
              <p 
                className="text-lg mb-6"
                style={{ 
                  color: 'var(--color-text-main)',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 'var(--line-height-body)',
                }}
              >
                For businesses throughout the Dallas-Fort Worth metroplex, maintaining clean 
                solar panels is crucial for maximizing your return on investment. Our commercial 
                cleaning services are designed to minimize disruption while delivering professional 
                results for installations of any size.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div 
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
                >
                  <h5 
                    className="font-semibold mb-2"
                    style={{ 
                      color: 'var(--color-primary-navy)',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    Cost Savings
                  </h5>
                  <p 
                    className="text-sm"
                    style={{ 
                      color: 'var(--color-text-muted)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    Regular maintenance reduces long-term operational costs and maximizes 
                    energy production during peak business hours.
                  </p>
                </div>

                <div 
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
                >
                  <h5 
                    className="font-semibold mb-2"
                    style={{ 
                      color: 'var(--color-primary-navy)',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    Extended Lifespan
                  </h5>
                  <p 
                    className="text-sm"
                    style={{ 
                      color: 'var(--color-text-muted)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    Professional cleaning prevents buildup that can cause permanent damage, 
                    protecting your substantial investment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
