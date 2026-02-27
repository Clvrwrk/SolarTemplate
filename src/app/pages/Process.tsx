import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ProcessHero } from '../components/process/ProcessHero';
import { ProcessTimeline } from '../components/process/ProcessTimeline';
import { ProcessGuarantee } from '../components/process/ProcessGuarantee';

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Professional Solar Panel Cleaning Process - Powerup Solar Cleaning Services",
      "description": "Our 6-step certified solar panel cleaning process follows OEM guidelines and OSHA safety standards for warranty-safe, engineering-grade results.",
      "totalTime": "PT2H",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Pre-Flight Triage & Thermal Scheduling",
          "text": "We evaluate your local environmental zone and ambient temperature forecast to schedule arrivals during early mornings, late evenings, or overcast windows to prevent thermal shock damage.",
          "url": "https://powerupsolarclean.com/our-solar-cleaning-process#phase-1"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Site Securing & OSHA Fall Protection",
          "text": "Our technicians perform ground-level hazard assessments and establish strict OSHA-compliant fall protection using rated anchor points, harnesses, and dual-lanyard tie-offs.",
          "url": "https://powerupsolarclean.com/our-solar-cleaning-process#phase-2"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Electrical Isolation & Pre-Flight Inspection",
          "text": "We execute Lockout/Tagout (LOTO) protocol, shut down inverters, and conduct a comprehensive pre-cleaning inspection documenting any pre-existing damage.",
          "url": "https://powerupsolarclean.com/our-solar-cleaning-process#phase-3"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Precision Hydrology & OEM-Compliant Wash",
          "text": "Using deionized water systems with TDS below 75 ppm and low-pressure application under 40 PSI, we clean panels with non-abrasive nylon brushes following manufacturer specifications.",
          "url": "https://powerupsolarclean.com/our-solar-cleaning-process#phase-4"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Post-Cleaning Diagnostics & Minor Repairs",
          "text": "We perform post-flight verification and provide courtesy repairs including re-torquing loose clamps and re-seating MC4 connectors to prevent arc faults.",
          "url": "https://powerupsolarclean.com/our-solar-cleaning-process#phase-5"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "System Re-Energization & Compliance Handover",
          "text": "We execute the precise inverter reboot sequence and deliver your Post-Flight Service Report with before-and-after photos, TDS readings, and hardware anomaly log.",
          "url": "https://powerupsolarclean.com/our-solar-cleaning-process#phase-6"
        }
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Solar Panel Cleaning",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Powerup Solar Cleaning Services",
        "telephone": "(214) 555-0123",
        "email": "info@powerupsolar.com"
      },
      "areaServed": {
        "@type": "State",
        "name": "Texas"
      },
      "description": "Engineering-grade solar panel cleaning following OEM guidelines, OSHA safety standards, using deionized water systems and warranty-safe methods.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Solar Panel Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "OEM-Compliant Solar Panel Cleaning",
              "description": "Warranty-safe cleaning using deionized water, soft-bristle brushes, and thermal scheduling to prevent damage"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Post-Flight Service Report",
              "description": "Comprehensive documentation including before-and-after photos, TDS readings, and hardware inspection results"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is thermal scheduling important for solar panel cleaning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Glass solar panels in mid-day sun can reach internal temperatures exceeding 150°F. Hitting them with cold water causes thermal shock, which can shatter glass or cause invisible micro-cracking. We schedule arrivals for early mornings, late evenings, or overcast windows."
          }
        },
        {
          "@type": "Question",
          "name": "What is deionized water and why do you use it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use multi-stage Deionization (DI) and Reverse Osmosis (RO) filtration to ensure Total Dissolved Solids (TDS) measure below 75 ppm. This guarantees a spot-free dry and prevents mineral deposits that can reduce panel efficiency and void warranties."
          }
        },
        {
          "@type": "Question",
          "name": "Will your cleaning process void my solar panel warranty?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Our entire process follows Original Equipment Manufacturer (OEM) guidelines. We never use high-pressure washers, abrasive materials, or harsh chemicals that could void warranties. We provide documentation of our warranty-safe methods."
          }
        }
      ]
    }
  ]
};

export default function Process() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <title>Our Solar Panel Cleaning Process | 6-Step Certified Method | Powerup</title>
        <meta 
          name="description" 
          content="Discover our engineering-grade solar panel cleaning process. 6 steps following OEM guidelines & OSHA standards. Deionized water, thermal scheduling, warranty-safe methods." 
        />
        <meta 
          name="keywords" 
          content="solar panel cleaning process, OEM compliant cleaning, deionized water cleaning, OSHA solar cleaning, warranty safe solar maintenance, thermal scheduling solar panels" 
        />
      </Helmet>

      <ProcessHero />
      <ProcessTimeline />
      <ProcessGuarantee />
    </>
  );
}
