import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function TrustSection() {
  const benefits = [
    'Eco-friendly techniques that prevent damage',
    'State-of-the-art equipment and specialized care',
    'Fully insured and locally trusted professionals',
    'Boost energy production by up to 20% or more',
  ];

  return (
    <section 
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontFamily: 'Poppins, sans-serif',
                lineHeight: 'var(--line-height-heading)',
              }}
            >
              Serving Texas Homeowners & Businesses
            </h2>
            
            <p 
              className="text-lg mb-6"
              style={{ 
                color: 'var(--color-text-main)',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 'var(--line-height-body)',
              }}
            >
              Whether residential or commercial, our tailored solutions ensure that your 
              solar investments yield optimal returns. Clean panels can boost your system's 
              energy production by up to 20% or more, allowing you to rely less on 
              traditional energy sources.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle 
                    size={24} 
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--color-accent-sky)' }}
                  />
                  <span 
                    className="text-lg"
                    style={{ 
                      color: 'var(--color-text-main)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1771479755134-9c1e3143c110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMGR1c3R5JTIwc29sYXIlMjBwYW5lbHMlMjByZXNpZGVudGlhbHxlbnwxfHx8fDE3NzIxNTY5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Dusty solar panels in need of professional cleaning"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '4/3' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
