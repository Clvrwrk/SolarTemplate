import { useState } from 'react';
import { motion } from 'motion/react';
import { LeadWizard } from '../forms/LeadWizard';

interface CustomQuoteFormProps {
  cityName: string;
}

export function CustomQuoteForm({ cityName }: CustomQuoteFormProps) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, var(--color-primary-navy) 0%, #0a1f3d 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-4"
            style={{
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Get Your Free {cityName} Quote
          </h2>
          <p
            className="text-center text-lg mb-10 max-w-2xl mx-auto"
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Professional solar panel cleaning services in {cityName}. Same-day appointments available!
          </p>

          <div
            className="rounded-2xl shadow-lg p-6 sm:p-8"
            style={{ 
              backgroundColor: 'var(--color-bg-white)',
              border: '1px solid var(--color-border-color)',
            }}
          >
            <LeadWizard context="inline" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}