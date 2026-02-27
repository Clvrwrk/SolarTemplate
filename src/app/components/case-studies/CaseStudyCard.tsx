import { MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { AnimatedCounter } from './AnimatedCounter';

export interface CaseStudyData {
  id: string;
  type: 'residential' | 'commercial';
  location: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  stats: {
    yieldIncrease: number;
    systemSize: string;
    additionalMetric: string;
  };
  challenge: string;
  approach: string;
  result: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudyData;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const [expandedSection, setExpandedSection] = useState<'challenge' | 'approach' | 'result' | null>(null);

  const toggleSection = (section: 'challenge' | 'approach' | 'result') => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    { 
      id: 'challenge' as const, 
      title: '1. The Challenge', 
      content: caseStudy.challenge,
      icon: '🎯'
    },
    { 
      id: 'approach' as const, 
      title: '2. The Approach', 
      content: caseStudy.approach,
      icon: '🔧'
    },
    { 
      id: 'result' as const, 
      title: '3. The Result', 
      content: caseStudy.result,
      icon: '📊'
    }
  ];

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
        {/* Column A: Visual Evidence */}
        <div>
          <BeforeAfterSlider
            beforeImage={caseStudy.beforeImage}
            afterImage={caseStudy.afterImage}
            beforeAlt={`Before cleaning - ${caseStudy.title}`}
            afterAlt={`After cleaning - ${caseStudy.title}`}
          />

          {/* Stat Block */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div 
              className="text-center p-4 rounded-lg"
              style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
            >
              <div 
                className="font-['Poppins'] text-3xl mb-1"
                style={{ 
                  color: 'var(--color-action-orange)',
                  fontWeight: 'var(--weight-bold)'
                }}
              >
                +<AnimatedCounter target={caseStudy.stats.yieldIncrease} suffix="%" />
              </div>
              <div 
                className="font-['Inter'] text-xs"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Energy Yield
              </div>
            </div>

            <div 
              className="text-center p-4 rounded-lg"
              style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
            >
              <div 
                className="font-['Poppins'] text-3xl mb-1"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-bold)'
                }}
              >
                {caseStudy.stats.systemSize}
              </div>
              <div 
                className="font-['Inter'] text-xs"
                style={{ color: 'var(--color-text-muted)' }}
              >
                System Size
              </div>
            </div>

            <div 
              className="text-center p-4 rounded-lg"
              style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
            >
              <div 
                className="font-['Poppins'] text-2xl md:text-3xl mb-1"
                style={{ 
                  color: 'var(--color-accent-sky)',
                  fontWeight: 'var(--weight-bold)'
                }}
              >
                {caseStudy.stats.additionalMetric}
              </div>
              <div 
                className="font-['Inter'] text-xs"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Protected
              </div>
            </div>
          </div>
        </div>

        {/* Column B: Scientific Breakdown */}
        <div>
          {/* Location Badge */}
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{ 
              backgroundColor: 'var(--color-accent-sky)',
              color: 'white'
            }}
          >
            <MapPin className="w-4 h-4" />
            <span className="font-['Inter'] text-sm">{caseStudy.location}</span>
          </div>

          {/* Project Title */}
          <h3 
            className="font-['Poppins'] text-2xl md:text-3xl mb-6"
            style={{ 
              color: 'var(--color-primary-navy)',
              fontWeight: 'var(--weight-bold)',
              lineHeight: 'var(--line-height-heading)'
            }}
          >
            {caseStudy.title}
          </h3>

          {/* Accordion Sections */}
          <div className="space-y-3">
            {sections.map((section) => (
              <div 
                key={section.id}
                className="rounded-lg overflow-hidden"
                style={{ border: '1px solid var(--color-border-color)' }}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-4 py-3 flex items-center justify-between transition-all duration-300 hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{section.icon}</span>
                    <span 
                      className="font-['Poppins'] text-left"
                      style={{ 
                        color: 'var(--color-primary-navy)',
                        fontWeight: 'var(--weight-semibold)'
                      }}
                    >
                      {section.title}
                    </span>
                  </div>
                  {expandedSection === section.id ? (
                    <ChevronUp 
                      className="w-5 h-5"
                      style={{ color: 'var(--color-accent-sky)' }}
                    />
                  ) : (
                    <ChevronDown 
                      className="w-5 h-5"
                      style={{ color: 'var(--color-text-muted)' }}
                    />
                  )}
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedSection === section.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div 
                    className="px-4 py-4 font-['Inter'] leading-relaxed"
                    style={{ 
                      backgroundColor: 'var(--color-bg-gray)',
                      color: 'var(--color-text-main)'
                    }}
                  >
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
