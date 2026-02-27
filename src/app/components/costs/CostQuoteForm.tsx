import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { LeadWizard } from '../forms/LeadWizard';

const faqs = [
  {
    id: 'faq-1',
    question: 'How often should I have my solar panels cleaned in Allen, TX?',
    answer: 'We recommend professional cleaning every 6 months in Allen due to high pollen counts in spring and summer dust. However, if you notice a significant drop in energy production or visible buildup, more frequent cleaning may be beneficial.'
  },
  {
    id: 'faq-2',
    question: 'Will cleaning my solar panels void the warranty?',
    answer: 'Professional cleaning using proper techniques and deionized water will not void your warranty. In fact, many manufacturers require regular maintenance. DIY cleaning with harsh chemicals or abrasive tools, however, can void warranties.'
  },
  {
    id: 'faq-3',
    question: 'How much can dirty solar panels reduce my energy output?',
    answer: 'Studies show that dirty solar panels can reduce energy output by 15-20% or more. In Texas\'s dusty environment, this loss can accumulate quickly, directly impacting your return on investment and monthly savings.'
  },
  {
    id: 'faq-4',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, checks, and electronic payments. Payment is due upon completion of service, and we provide detailed invoices for your records.'
  },
  {
    id: 'faq-5',
    question: 'Do you offer discounts for regular maintenance plans?',
    answer: 'Yes! We offer discounted rates for customers who sign up for bi-annual or quarterly maintenance plans. Contact us for details on our maintenance packages and seasonal promotions.'
  }
];

export function CostQuoteForm() {
  return (
    <section 
      id="cost-quote-form"
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Intro Text */}
          <div className="text-center mb-12">
            <h3 
              className="font-['Poppins'] text-3xl md:text-4xl mb-6"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-bold)'
              }}
            >
              Maximize Your Allen, TX Solar Investment
            </h3>
            <p 
              className="font-['Inter'] text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ color: 'var(--color-text-main)' }}
            >
              Protect your $30,000 investment. Choose a service provider like Powerup Solar Cleaning Services, where elevated attention to detail aligns with safeguarding your asset's long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div 
              className="bg-white rounded-xl p-8"
              style={{
                boxShadow: '0 4px 20px rgba(11, 43, 83, 0.08)'
              }}
            >
              <h4 
                className="font-['Poppins'] text-2xl mb-6"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-semibold)'
                }}
              >
                Get Your Free Quote
              </h4>

              <LeadWizard />
            </div>

            {/* Right Column - FAQs */}
            <div>
              <h4 
                className="font-['Poppins'] text-2xl mb-6"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-semibold)'
                }}
              >
                Frequently Asked Questions
              </h4>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem 
                    key={faq.id}
                    value={faq.id}
                    className="bg-white rounded-xl overflow-hidden"
                    style={{
                      border: '1px solid var(--color-border-color)',
                      boxShadow: '0 2px 8px rgba(11, 43, 83, 0.04)'
                    }}
                  >
                    <AccordionTrigger 
                      className="px-6 py-4 font-['Poppins'] text-left hover:no-underline"
                      style={{ 
                        color: 'var(--color-primary-navy)',
                        fontWeight: 'var(--weight-medium)'
                      }}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent 
                      className="px-6 pb-4 font-['Inter'] leading-relaxed"
                      style={{ color: 'var(--color-text-main)' }}
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}