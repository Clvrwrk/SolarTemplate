import { useState, useEffect } from 'react';
import { CaseStudiesHero } from '../components/case-studies/CaseStudiesHero';
import { FilterTabs } from '../components/case-studies/FilterTabs';
import { CaseStudyCard, CaseStudyData } from '../components/case-studies/CaseStudyCard';
import { Helmet } from 'react-helmet';

const caseStudies: CaseStudyData[] = [
  {
    id: 'residential-allen',
    type: 'residential',
    location: 'Allen, TX',
    title: 'North Texas Dust & Spring Pollen Remediation',
    beforeImage: 'https://images.unsplash.com/photo-1766788466666-3ca36cb6b48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMGR1c3R5JTIwc29sYXIlMjBwYW5lbHMlMjByZXNpZGVudGlhbCUyMHJvb2YlMjBwb2xsZW58ZW58MXx8fHwxNzcyMTY2MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1771479755134-9c1e3143c110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHNoaW55JTIwc29sYXIlMjBwYW5lbHMlMjByZXNpZGVudGlhbCUyMGJyaWdodHxlbnwxfHx8fDE3NzIxNjYxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      yieldIncrease: 18,
      systemSize: '32',
      additionalMetric: '$30k'
    },
    challenge: 'This homeowner experienced a noticeable decline in energy output during the spring. A thick mixture of high pollen count and persistent dust from local construction formed a film over the panels, obstructing sunlight and causing an estimated 15-20% decrease in energy output.',
    approach: 'We avoided pressure washers or high-pressure hoses, as they can damage the panels and their mounting systems. Instead, our professional team utilized soft-bristle brushes and advanced deionized water systems. This method safely lifted the baked-on grime without leaving mineral deposits that could otherwise void manufacturer warranties.',
    result: 'Post-cleaning data indicated a complete restoration of the system\'s baseline efficiency. By manually removing the layer of debris, we prevented the formation of hotspots that cause strain on specific sections of the panels, thereby securing the homeowner\'s long-term return on investment.'
  },
  {
    id: 'commercial-dallas',
    type: 'commercial',
    location: 'Dallas, TX',
    title: 'Commercial Rooftop Efficiency Restoration',
    beforeImage: 'https://images.unsplash.com/photo-1592818976384-135c0af56c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBzb2xhciUyMHBhbmVsJTIwYXJyYXklMjByb29mdG9wfGVufDF8fHx8MTc3MjE2NjE3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1715605569625-1ec3b5624a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGNvbW1lcmNpYWwlMjBzb2xhciUyMGZhcm0lMjBjbGVhbiUyMHBhbmVsc3xlbnwxfHx8fDE3NzIxNjYxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: {
      yieldIncrease: 15,
      systemSize: '150',
      additionalMetric: 'Secured'
    },
    challenge: 'A commercial facility in the Dallas Metroplex noted decreased operational efficiency. The system was heavily impacted by urban pollution residue and bird droppings. Leaving this untreated risked accelerating wear, increasing the risk of maintenance hiccups, and threatening overall financial returns.',
    approach: 'Given the scale of the commercial installation, our team deployed advanced water-fed pole systems paired with eco-friendly cleaning agents. This data-driven, methodical approach was executed strictly according to manufacturer-compliance standards to ensure the panels were handled delicately and the warranty remained fully intact.',
    result: 'The professional cleaning maximized operational efficiency and output. By mitigating the risks of yield loss due to built-up grime, the business saw a rapid return to peak renewable energy utilization, leading to substantial savings on their overhead utility costs.'
  }
];

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://powerupsolarclean.com/dallas-solar-cleaning-case-studies"
      },
      "headline": "Proven Results: Solar Panel Cleaning Case Studies in the Dallas Metroplex",
      "description": "Explore the data behind our methods. See exactly how Powerup Solar Cleaning Services restores up to 20% energy efficiency for homes and businesses by safely removing dirt, pollen, and environmental pollutants.",
      "image": "https://powerupsolarclean.com/assets/residential-solar-panel-cleaning-photo.jpg",
      "author": {
        "@type": "Organization",
        "name": "Powerup Solar Cleaning Services",
        "url": "https://powerupsolarclean.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Powerup Solar Cleaning Services",
        "logo": {
          "@type": "ImageObject",
          "url": "https://powerupsolarclean.com/assets/logo.png"
        }
      },
      "datePublished": "2023-10-01",
      "dateModified": "2023-10-01",
      "articleSection": "Renewable Energy Maintenance",
      "keywords": "solar panel cleaning, energy yield increase, Allen TX, Dallas commercial solar, residential solar maintenance, deionized water cleaning"
    },
    {
      "@type": "Dataset",
      "name": "Solar Panel Cleaning Efficiency Yield Data - Dallas & Allen, TX",
      "description": "Performance data collected from residential and commercial solar panel cleaning projects. The dataset tracks the recovery of energy output after the manual removal of Texas dust, spring pollen, and urban pollution residue using deionized water systems.",
      "creator": {
        "@type": "Organization",
        "name": "Powerup Solar Cleaning Services"
      },
      "variableMeasured": [
        {
          "@type": "PropertyValue",
          "name": "Energy Yield Increase",
          "description": "The percentage increase in solar energy output post-cleaning, mitigating a 15-20% drop caused by environmental factors.",
          "value": "15-20%"
        },
        {
          "@type": "PropertyValue",
          "name": "Asset Protection",
          "description": "Prevention of hotspots and warranty preservation by avoiding pressure washers and abrasive chemicals.",
          "value": "Warranty Secured"
        },
        {
          "@type": "PropertyValue",
          "name": "Environmental Threat",
          "description": "Primary culprits reducing efficiency in the region.",
          "value": "Dust, Spring Pollen, Bird Droppings, Pollution Residue"
        }
      ],
      "keywords": [
        "solar efficiency drop",
        "15-20% energy output decrease",
        "Texas pollen and dust",
        "solar return on investment"
      ],
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "isAccessibleForFree": true
    }
  ]
};

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial'>('all');

  const filteredCaseStudies = caseStudies.filter(cs => {
    if (activeFilter === 'all') return true;
    return cs.type === activeFilter;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <title>Case Studies - Solar Panel Cleaning Results | Power Up Solar Clean</title>
        <meta 
          name="description" 
          content="Proven results from real solar panel cleaning projects in Dallas and Allen, TX. See how we restore 15-20% energy efficiency through professional cleaning methods." 
        />
      </Helmet>

      <CaseStudiesHero />
      <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          {filteredCaseStudies.length > 0 ? (
            filteredCaseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))
          ) : (
            <div className="text-center py-16">
              <p 
                className="font-['Inter'] text-lg"
                style={{ color: 'var(--color-text-muted)' }}
              >
                No case studies found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
