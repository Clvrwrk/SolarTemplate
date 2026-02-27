import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function McKinneyFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How often should I clean my solar panels in McKinney, TX?',
      answer: 'In McKinney\'s climate with high pollen counts in spring and construction dust year-round, we recommend professional cleaning at least twice per year—ideally in early spring before peak pollen season and in late fall after tree debris settles. If you notice a significant drop in energy output or visible buildup, additional cleanings may be beneficial.'
    },
    {
      question: 'Will cleaning my solar panels void the warranty?',
      answer: 'Not when done correctly! Powerup Solar Cleaning Services uses warranty-safe methods including deionized water systems and soft-bristle brushes that comply with manufacturer specifications. We avoid pressure washers and abrasive chemicals that could damage panels or void warranties. We can provide documentation of our cleaning methods for your warranty records.'
    },
    {
      question: 'How much can dirty panels reduce my energy output?',
      answer: 'Studies show that dirty solar panels in North Texas can lose 15-25% of their energy production capacity. McKinney\'s unique environmental factors—persistent pollen, construction dust from Collin County development, and bird droppings—create a film that blocks sunlight and reduces efficiency. Professional cleaning typically restores panels to baseline performance.'
    },
    {
      question: 'Is rainwater enough to clean my solar panels?',
      answer: 'Unfortunately, no. While rain can rinse away loose dust, it lacks the pressure needed to remove baked-on pollen, bird droppings, and stubborn grime. In fact, rainwater can leave mineral deposits that create new spots on your panels. Professional cleaning with deionized water ensures a streak-free finish and maximum light absorption.'
    },
    {
      question: 'What makes Powerup different from other solar cleaning services in McKinney?',
      answer: 'Powerup specializes in McKinney\'s specific environmental challenges. We understand Collin County\'s development patterns, seasonal pollen cycles, and local HOA requirements. Our technicians use deionized water systems, soft-bristle tools, and warranty-safe techniques. We\'re fully licensed, insured, and focused on data-driven results that maximize your ROI.'
    },
    {
      question: 'Do you offer service in my McKinney neighborhood?',
      answer: 'Yes! We serve all McKinney neighborhoods including Stonebridge Ranch, Craig Ranch, Eldorado, Tucker Hill, and surrounding Collin County communities. Our service area covers residential and commercial properties throughout McKinney, Plano, Frisco, Allen, and Prosper.'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="font-['Poppins'] text-3xl md:text-4xl text-center mb-12"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontWeight: 'var(--weight-bold)',
            lineHeight: 'var(--line-height-heading)'
          }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden"
              style={{ 
                border: '2px solid var(--color-border-color)',
                backgroundColor: 'white'
              }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-5 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
              >
                <h3 
                  className="font-['Poppins'] pr-4"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  {faq.question}
                </h3>
                {expandedIndex === index ? (
                  <ChevronUp 
                    className="w-6 h-6 flex-shrink-0"
                    style={{ color: 'var(--color-action-orange)' }}
                  />
                ) : (
                  <ChevronDown 
                    className="w-6 h-6 flex-shrink-0"
                    style={{ color: 'var(--color-text-muted)' }}
                  />
                )}
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div 
                  className="p-5 pt-0 font-['Inter']"
                  style={{ 
                    color: 'var(--color-text-main)',
                    lineHeight: 'var(--line-height-body)'
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-12 p-6 rounded-xl text-center"
          style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
        >
          <p 
            className="font-['Inter'] text-lg mb-4"
            style={{ color: 'var(--color-text-main)' }}
          >
            Still have questions about solar panel cleaning in McKinney?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-6 py-3 rounded-lg font-['Poppins'] transition-all duration-300"
            style={{
              backgroundColor: 'var(--color-action-orange)',
              color: 'white',
              fontWeight: 'var(--weight-semibold)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
