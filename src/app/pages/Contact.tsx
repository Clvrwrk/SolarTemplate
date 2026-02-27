import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactMethods } from '../components/contact/ContactMethods';
import { ContactBusiness } from '../components/contact/ContactBusiness';

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Power Up Solar Cleaning Services",
      "description": "Contact Power Up Solar Cleaning for professional solar panel cleaning, critter guard installation, and solar attic ventilation services in North Texas.",
      "image": "https://powerupsolarclean.com/logo.png",
      "telephone": "(555) 123-4567",
      "email": "support@powerupsolarclean.com",
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
        },
        {
          "@type": "City",
          "name": "Prosper",
          "containedInPlace": {
            "@type": "State",
            "name": "Texas"
          }
        },
        {
          "@type": "City",
          "name": "Celina",
          "containedInPlace": {
            "@type": "State",
            "name": "Texas"
          }
        }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "priceRange": "$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Solar Maintenance Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Solar Panel Cleaning",
              "description": "Professional solar panel cleaning for residential properties"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Solar Panel Cleaning",
              "description": "Commercial-grade solar panel maintenance and cleaning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Critter Guard Installation",
              "description": "Solar panel critter guard installation to prevent pest damage"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Solar Attic Ventilation",
              "description": "Solar-powered attic ventilation installation and maintenance"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/powerupsolar",
        "https://www.instagram.com/powerupsolar"
      ]
    },
    {
      "@type": "ContactPage",
      "name": "Contact Power Up Solar Cleaning",
      "description": "Get in touch with Power Up Solar Cleaning for a free quote on solar panel cleaning, critter guards, or solar attic ventilation services.",
      "url": "https://powerupsolarclean.com/contact-us",
      "mainEntity": {
        "@type": "Organization",
        "name": "Power Up Solar Cleaning Services",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "(555) 123-4567",
          "contactType": "Customer Service",
          "areaServed": "US-TX",
          "availableLanguage": "English",
          "contactOption": ["TollFree", "HearingImpairedSupported"]
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are your business hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 2:00 PM. We also offer 24/7 online booking for your convenience."
          }
        },
        {
          "@type": "Question",
          "name": "Where do you provide solar panel cleaning services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We proudly serve over 3,000 customers across the Greater DFW Metroplex, including Allen, McKinney, Plano, Frisco, Prosper, and Celina in Collin and Dallas Counties."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Power Up Solar Cleaning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can call us at (555) 123-4567, text us, email support@powerupsolarclean.com, or fill out our online contact form for a free quote. We respond to all inquiries within 24 hours."
          }
        }
      ]
    }
  ]
};

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <title>Contact Us | Free Solar Cleaning Quote | Power Up Solar</title>
        <meta 
          name="description" 
          content="Contact Power Up Solar Cleaning for a free quote on solar panel cleaning, critter guards, or solar attic ventilation. Call (555) 123-4567 or request a quote online." 
        />
        <meta 
          name="keywords" 
          content="contact solar cleaning, solar panel cleaning quote Allen TX, Power Up Solar contact, Texas solar cleaning services, free solar quote" 
        />
      </Helmet>

      <ContactHero />
      <ContactMethods />
      <ContactBusiness />
    </>
  );
}
