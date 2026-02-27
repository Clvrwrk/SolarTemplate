import { useEffect, useRef, useState } from 'react';
import { 
  CloudSun, 
  ShieldCheck, 
  Zap, 
  Droplet, 
  ClipboardCheck, 
  Power,
  Check,
  AlertTriangle
} from 'lucide-react';

interface TimelinePhase {
  number: number;
  icon: React.ElementType;
  title: string;
  body: string;
  callout?: {
    type: 'info' | 'warning';
    title?: string;
    content: string;
  };
  bullets?: string[];
  grid?: string[];
  footer?: string;
  side: 'left' | 'right';
}

const phases: TimelinePhase[] = [
  {
    number: 1,
    icon: CloudSun,
    title: 'The Pre-Flight Triage & Thermal Scheduling',
    body: 'Our process begins before we ever dispatch a truck. When you book a service, we evaluate your local environmental zone and the ambient temperature forecast.',
    callout: {
      type: 'info',
      title: 'Why it matters:',
      content: 'Glass solar panels baking in the mid-day sun can reach internal temperatures exceeding 150°F. Hitting them with cold water causes a rapid contraction known as thermal shock, which can instantly shatter the glass or cause invisible micro-cracking within the silicon cells. We schedule our arrivals strictly for early mornings, late evenings, or overcast windows.'
    },
    side: 'left'
  },
  {
    number: 2,
    icon: ShieldCheck,
    title: 'Site Securing & OSHA Fall Protection',
    body: 'Upon arrival, our first priority is the safety of our crew and your property. Before a ladder is extended, our technicians perform a ground-level hazard assessment, checking for overhead power lines, compromised roof decking, and safe ladder footing.',
    bullets: [
      'Strict OSHA-compliant fall protection established.',
      'Level II technicians utilize rated anchor points, harnesses, and dual-lanyard tie-offs.',
      'We never walk on or bear weight on the solar modules themselves to prevent mechanical stress and catastrophic cell failure.'
    ],
    side: 'right'
  },
  {
    number: 3,
    icon: Zap,
    title: 'Electrical Isolation & The "Pre-Flight" Inspection',
    body: 'Water and high-voltage direct current (DC) do not mix. Before a single drop of water touches your array, our technicians execute a Lockout/Tagout (LOTO) protocol. We shut down your string inverter or DC optimizers, physically tag the disconnect, and use a calibrated multimeter to verify zero voltage.',
    grid: [
      'Pre-existing micro-cracks or shattered glass.',
      'Degradation of the factory Anti-Reflective (AR) coating.',
      'Galvanic corrosion on the aluminum frames.',
      'Signs of pest nesting, chewed wiring, or blocked frame drainage channels.'
    ],
    footer: 'We take date-stamped photographs of these anomalies. This "Pre-Flight" report protects you by identifying warranty-level hardware failures before the cleaning begins.',
    side: 'left'
  },
  {
    number: 4,
    icon: Droplet,
    title: 'Precision Hydrology & The OEM-Compliant Wash',
    body: 'We never use unfiltered tap water, high-pressure washers, or harsh chemical detergents, all of which will instantly void your panel warranty and strip the delicate AR coating. Instead, we manufacture our own cleaning solution on-site using a multi-stage Deionization (DI) and Reverse Osmosis (RO) filtration system.',
    callout: {
      type: 'info',
      content: 'The TDS Test: Before the water hits your roof, we test it with a digital meter. We ensure the Total Dissolved Solids (TDS) measure below 75 parts per million (ppm), guaranteeing a spot-free dry. The Agitation: We apply this ultra-pure water at low pressure (under 40 PSI) using specialized, non-abrasive nylon brushes.'
    },
    side: 'right'
  },
  {
    number: 5,
    icon: ClipboardCheck,
    title: 'Post-Cleaning Diagnostics & Authorized Minor Repairs',
    body: 'Once the array is rinsed and drying spot-free, we perform our post-flight physical verification. If we spot minor, non-electrical mechanical issues caused by wind or prior improper maintenance, we fix them on the spot as a courtesy.',
    bullets: [
      'Re-torquing loose mid-clamps and wire-management clips.',
      'Safely re-seating disconnected MC4 electrical connectors (pressing until the manufacturer-required audible "click" prevents arc faults).'
    ],
    callout: {
      type: 'warning',
      title: 'Note:',
      content: 'If we discover a major electrical fault or a failed microinverter, we document it for you so you can immediately contact your original installation company or a licensed electrician.'
    },
    side: 'left'
  },
  {
    number: 6,
    icon: Power,
    title: 'System Re-Energization & The Compliance Handover',
    body: 'With the physical work complete, we remove our LOTO devices and execute the precise inverter reboot sequence, verifying the system displays a normal, green operational status.',
    callout: {
      type: 'info',
      title: 'The Handover:',
      content: 'You receive your Post-Flight Service Report, including before-and-after photos, water quality (TDS) readings, and a hardware anomaly log.'
    },
    side: 'right'
  }
];

export function ProcessTimeline() {
  const [visibleNodes, setVisibleNodes] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleNodes(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      elements.forEach(el => {
        if (observerRef.current) {
          observerRef.current.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Timeline Container */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div 
            className="hidden md:block absolute top-0 bottom-0 w-1 left-1/2 -ml-0.5"
            style={{ backgroundColor: 'var(--color-border-color)' }}
          />

          {/* Left Line - Mobile */}
          <div 
            className="md:hidden absolute top-0 bottom-0 w-1 left-5"
            style={{ backgroundColor: 'var(--color-border-color)' }}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="timeline-item relative"
                data-index={index}
              >
                {/* Node (Dot) */}
                <div 
                  className={`absolute w-6 h-6 rounded-full border-4 bg-white z-10 transition-all duration-500 
                    ${phase.side === 'left' ? 'md:left-1/2 md:-ml-3' : 'md:left-1/2 md:-ml-3'} 
                    left-5 -ml-3`}
                  style={{
                    top: '24px',
                    borderColor: visibleNodes.has(index) ? 'var(--color-action-orange)' : 'var(--color-border-color)',
                    backgroundColor: visibleNodes.has(index) ? 'var(--color-action-orange)' : 'white',
                    boxShadow: visibleNodes.has(index) ? '0 0 15px rgba(242, 140, 40, 0.6)' : 'none'
                  }}
                />

                {/* Card */}
                <div
                  className={`
                    timeline-card
                    md:w-[calc(50%-40px)]
                    w-[calc(100%-60px)]
                    ml-14 md:ml-0
                    transition-all duration-700 ease-out
                    ${phase.side === 'left' ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}
                    ${visibleNodes.has(index) ? 'opacity-100 translate-x-0' : 'opacity-0'}
                  `}
                  style={{
                    transform: !visibleNodes.has(index) 
                      ? phase.side === 'left' ? 'translateX(-50px)' : 'translateX(50px)'
                      : 'translateX(0)'
                  }}
                >
                  <div 
                    className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-action-orange)' }}
                      >
                        <phase.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div 
                          className="font-['Poppins'] text-sm mb-1"
                          style={{ 
                            color: 'var(--color-action-orange)',
                            fontWeight: 'var(--weight-semibold)'
                          }}
                        >
                          Phase {phase.number}
                        </div>
                        <h3 
                          className="font-['Poppins'] text-xl md:text-2xl"
                          style={{ 
                            color: 'var(--color-primary-navy)',
                            fontWeight: 'var(--weight-bold)',
                            lineHeight: 'var(--line-height-heading)'
                          }}
                        >
                          {phase.title}
                        </h3>
                      </div>
                    </div>

                    {/* Body */}
                    <p 
                      className="font-['Inter'] mb-4"
                      style={{ 
                        color: 'var(--color-text-main)',
                        lineHeight: 'var(--line-height-body)'
                      }}
                    >
                      {phase.body}
                    </p>

                    {/* Callout Box */}
                    {phase.callout && (
                      <div 
                        className="p-4 rounded-lg mb-4"
                        style={{ 
                          backgroundColor: phase.callout.type === 'warning' 
                            ? 'rgba(239, 68, 68, 0.1)' 
                            : 'var(--color-accent-sky-light)',
                          borderLeft: `4px solid ${
                            phase.callout.type === 'warning' 
                              ? '#EF4444' 
                              : 'var(--color-accent-sky)'
                          }`
                        }}
                      >
                        {phase.callout.title && (
                          <p 
                            className="font-['Poppins'] mb-2"
                            style={{ 
                              color: 'var(--color-primary-navy)',
                              fontWeight: 'var(--weight-semibold)'
                            }}
                          >
                            {phase.callout.title}
                          </p>
                        )}
                        <p 
                          className="font-['Inter'] text-sm"
                          style={{ 
                            color: 'var(--color-text-main)',
                            lineHeight: 'var(--line-height-body)'
                          }}
                        >
                          {phase.callout.content}
                        </p>
                      </div>
                    )}

                    {/* Bullets */}
                    {phase.bullets && (
                      <div className="space-y-2 mb-4">
                        {phase.bullets.map((bullet, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <div 
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: 'var(--color-accent-sky)' }}
                            >
                              <Check className="w-3 h-3 text-white" strokeWidth={3} />
                            </div>
                            <p 
                              className="font-['Inter'] text-sm flex-1"
                              style={{ 
                                color: 'var(--color-text-main)',
                                lineHeight: 'var(--line-height-body)'
                              }}
                            >
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Grid */}
                    {phase.grid && (
                      <div className="mb-4">
                        <p 
                          className="font-['Poppins'] mb-3"
                          style={{ 
                            color: 'var(--color-primary-navy)',
                            fontWeight: 'var(--weight-semibold)'
                          }}
                        >
                          Audit Checklist:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {phase.grid.map((item, i) => (
                            <div 
                              key={i}
                              className="flex gap-2 items-start p-3 rounded"
                              style={{ backgroundColor: 'var(--color-bg-gray)' }}
                            >
                              <AlertTriangle 
                                className="w-4 h-4 flex-shrink-0 mt-0.5"
                                style={{ color: 'var(--color-action-orange)' }}
                              />
                              <p 
                                className="font-['Inter'] text-sm"
                                style={{ color: 'var(--color-text-main)' }}
                              >
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    {phase.footer && (
                      <p 
                        className="font-['Inter'] text-sm italic mt-4 pt-4"
                        style={{ 
                          color: 'var(--color-text-muted)',
                          borderTop: '1px solid var(--color-border-color)'
                        }}
                      >
                        {phase.footer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
