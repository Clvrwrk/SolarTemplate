import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AboutHero } from '../components/about/AboutHero';
import { AboutAuthority } from '../components/about/AboutAuthority';
import { AboutMission } from '../components/about/AboutMission';

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Power Up Solar Cleaning Services",
      "description": "Texas-based, family-owned solar panel cleaning company providing engineering-grade maintenance, critter guard installation, and solar attic ventilation services.",
      "image": "https://images.unsplash.com/photo-1715605569717-494ac7c5656a",
      "telephone": "(214) 555-0123",
      "email": "info@powerupsolar.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Allen",
        "addressRegion": "TX",
        "postalCode": "75002",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.1031,
        "longitude": -96.6706
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Allen",
          "containedInPlace": {
            "@type": "State",
            "name": "Texas"
          }
        },
        {
          "@type": "City",
          "name": "McKinney",
          "containedInPlace": {
            "@type": "State",
            "name": "Texas"
          }
        },
        {
          "@type": "City",
          "name": "Plano",
          "containedInPlace": {
            "@type": "State",
            "name": "Texas"
          }
        },
        {
          "@type": "City",
          "name": "Frisco",
          "containedInPlace": {
            "@type": "State",
            "name": "Texas"
          }
        }
      ],
      "foundingDate": "2019",
      "priceRange": "$$",
      "slogan": "Texas-Based. Family-Owned. Engineering-Grade Solar Care.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Solar Maintenance Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Solar Panel Cleaning",
              "description": "OEM-compliant solar panel cleaning using deionized water and advanced filtration technology"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Solar Critter Guard Installation",
              "description": "Premium critter guard installation to protect solar panels from pest damage"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Solar Attic Ventilation",
              "description": "Solar attic ventilation installation to reduce heat buildup and improve home comfort"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "3000"
      }
    },
    {
      "@type": "Organization",
      "name": "Power Up Solar Cleaning Services",
      "url": "https://powerupsolarclean.com",
      "logo": "https://powerupsolarclean.com/logo.png",
      "sameAs": [
        "https://www.facebook.com/powerupsolar",
        "https://www.instagram.com/powerupsolar"
      ],
      "founder": {
        "@type": "Person",
        "name": "Power Up Solar Cleaning Founders"
      },
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Allen",
          "addressRegion": "TX",
          "addressCountry": "US"
        }
      },
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "10"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Power Up Solar Cleaning provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide three main services: OEM-compliant solar panel cleaning using deionized water, solar critter guard installation to protect against pest damage, and solar attic ventilation to reduce heat buildup in Texas summers."
          }
        },
        {
          "@type": "Question",
          "name": "How long has Power Up Solar Cleaning been in business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We have over 5 years of professional experience serving the North Texas community with engineering-grade solar maintenance services."
          }
        },
        {
          "@type": "Question",
          "name": "How many customers has Power Up Solar Cleaning served?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We have proudly served over 3,000 happy Texas customers throughout the North Texas area, including Allen, McKinney, Plano, and Frisco."
          }
        }
      ]
    }
  ]
};

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <title>About Us | Texas Family-Owned Solar Cleaning | Power Up Solar</title>
        <meta 
          name="description" 
          content="Power Up Solar Cleaning is a Texas-based, family-owned company serving 3,000+ customers with engineering-grade solar panel cleaning, critter guards, and attic ventilation." 
        />
        <meta 
          name="keywords" 
          content="about power up solar, Texas solar cleaning company, family owned solar business, solar panel maintenance Texas, North Texas solar services" 
        />
      </Helmet>

      <AboutHero />
      <AboutAuthority />
      <AboutMission />
    </>
  );
}
