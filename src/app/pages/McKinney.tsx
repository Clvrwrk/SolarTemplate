import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { McKinneyHero } from '../components/mckinney/McKinneyHero';
import { ProblemSolution } from '../components/mckinney/ProblemSolution';
import { EnvironmentalChallenges } from '../components/mckinney/EnvironmentalChallenges';
import { LocalSpotlight } from '../components/shared/LocalSpotlight';
import { ReliableServices } from '../components/mckinney/ReliableServices';
import { ProtectingInvestment } from '../components/mckinney/ProtectingInvestment';
import { MaintenanceChecklist } from '../components/mckinney/MaintenanceChecklist';
import { FinalLeadGen } from '../components/mckinney/FinalLeadGen';
import { McKinneyFAQ } from '../components/mckinney/McKinneyFAQ';

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Powerup Solar Cleaning Services - McKinney",
      "image": "https://powerupsolarclean.com/assets/logo.png",
      "@id": "https://powerupsolarclean.com/solar-panel-cleaning-mckinney-tx",
      "url": "https://powerupsolarclean.com/solar-panel-cleaning-mckinney-tx",
      "telephone": "(214) 555-0123",
      "email": "info@powerupsolar.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "McKinney",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.1972,
        "longitude": -96.6397
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.facebook.com/powerupsolar",
        "https://www.instagram.com/powerupsolar"
      ],
      "areaServed": {
        "@type": "City",
        "name": "McKinney",
        "containedIn": {
          "@type": "AdministrativeArea",
          "name": "Texas"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Solar Panel Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Solar Panel Cleaning McKinney TX",
              "description": "Professional residential solar panel cleaning using deionized water systems and warranty-safe methods"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Solar Panel Cleaning McKinney TX",
              "description": "Commercial-grade solar panel maintenance for businesses in Collin County"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "serviceType": "Solar Panel Cleaning",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Powerup Solar Cleaning Services"
      },
      "areaServed": {
        "@type": "City",
        "name": "McKinney",
        "containedIn": "Texas"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "McKinney Solar Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pollen Removal Service",
              "description": "Specialized cleaning to remove McKinney's spring pollen buildup that reduces solar panel efficiency by up to 20%"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Construction Dust Cleaning",
              "description": "Removal of construction dust from Collin County development using soft-bristle brushes and deionized water"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bird Dropping Removal",
              "description": "Safe removal of bird droppings that can damage panels in Texas heat exceeding 100°F"
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
          "name": "How often should I clean my solar panels in McKinney, TX?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In McKinney's climate with high pollen counts in spring and construction dust year-round, we recommend professional cleaning at least twice per year—ideally in early spring before peak pollen season and in late fall after tree debris settles."
          }
        },
        {
          "@type": "Question",
          "name": "Will cleaning my solar panels void the warranty?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not when done correctly! Powerup Solar Cleaning Services uses warranty-safe methods including deionized water systems and soft-bristle brushes that comply with manufacturer specifications. We avoid pressure washers and abrasive chemicals that could damage panels or void warranties."
          }
        },
        {
          "@type": "Question",
          "name": "How much can dirty panels reduce my energy output?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Studies show that dirty solar panels in North Texas can lose 15-25% of their energy production capacity. McKinney's unique environmental factors—persistent pollen, construction dust from Collin County development, and bird droppings—create a film that blocks sunlight and reduces efficiency."
          }
        }
      ]
    }
  ]
};

export default function McKinney() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <title>Best Solar Panel Cleaning McKinney TX | Powerup Solar Clean</title>
        <meta 
          name="description" 
          content="Professional solar panel cleaning in McKinney, TX. Combat pollen, dust & debris with warranty-safe methods. Restore 15-25% energy efficiency. HOA compliant. Call today!" 
        />
        <meta 
          name="keywords" 
          content="solar panel cleaning McKinney TX, McKinney solar cleaning, Collin County solar maintenance, deionized water solar cleaning, warranty-safe solar cleaning" 
        />
      </Helmet>

      <McKinneyHero />
      <ProblemSolution />
      <EnvironmentalChallenges />
      <LocalSpotlight 
        city="McKinney, TX"
        neighborhood="Stonebridge Ranch"
        imageUrl="https://images.unsplash.com/photo-1765924168599-70090fa7365b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdWJ1cmJhbiUyMGhvbWUlMjBzb2xhciUyMHBhbmVscyUyMFRleGFzfGVufDF8fHx8MTc3MjIxMjU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Residential solar panel cleaning in Stonebridge Ranch, McKinney Texas"
        yieldPercentage={18}
        panelCount={24}
        issueResolved="HOA"
        problemParagraph="This McKinney homeowner noticed a sharp spike in their utility bill during the peak of the Texas summer. The culprit? A thick layer of baked-on construction dust and spring pollen that had essentially suffocated the solar array's light transmittance. Combined with strict HOA aesthetic standards, the homeowner was facing both financial loss and potential compliance issues."
        solutionParagraph="Our certified technicians deployed our 6-step standard operating procedure, utilizing multi-stage Reverse Osmosis filtration and deionized water systems. We lifted the abrasive particulate matter safely using soft-bristle brushes and low-pressure techniques, restoring the panels to a spot-free, factory-grade finish. The result: 18% yield recovery, HOA compliance, and secured ROI for the homeowner."
      />
      <ReliableServices />
      <ProtectingInvestment />
      <MaintenanceChecklist />
      <FinalLeadGen />
      <McKinneyFAQ />
    </>
  );
}