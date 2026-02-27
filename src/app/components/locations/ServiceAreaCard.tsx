import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

interface CityLink {
  name: string;
  url?: string;
}

interface ServiceAreaCardProps {
  county: string;
  cities: CityLink[];
  defaultExpanded?: boolean;
}

export function ServiceAreaCard({ county, cities, defaultExpanded = false }: ServiceAreaCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const navigate = useNavigate();

  const handleCityClick = (city: CityLink) => {
    if (city.url) {
      navigate(city.url);
    } else {
      // For demo purposes, scroll to contact form
      const element = document.getElementById('custom-quote');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg"
      style={{ 
        backgroundColor: 'white',
        border: '1px solid var(--color-border-color)',
      }}
    >
      {/* Card Header - Clickable on Mobile */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-5 flex items-center justify-between md:cursor-default"
        style={{ backgroundColor: 'var(--color-bg-light-blue)' }}
      >
        <h3 
          className="text-xl font-semibold"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {county}
        </h3>
        <ChevronDown 
          size={24}
          className="md:hidden transition-transform duration-300"
          style={{ 
            color: 'var(--color-primary-navy)',
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {/* City Links - Always visible on desktop, expandable on mobile */}
      <div className="hidden md:block">
        <CityList cities={cities} onCityClick={handleCityClick} />
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <CityList cities={cities} onCityClick={handleCityClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CityList({ cities, onCityClick }: { cities: CityLink[]; onCityClick: (city: CityLink) => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ul className="p-6 space-y-3">
      {cities.map((city, index) => (
        <li key={index}>
          <button
            onClick={() => onCityClick(city)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="city-link w-full text-left flex items-center gap-2 py-2 transition-all duration-300"
            style={{
              color: hoveredIndex === index ? 'var(--color-action-orange)' : 'var(--color-primary-navy)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              transform: hoveredIndex === index ? 'translateX(5px)' : 'translateX(0)',
            }}
          >
            <ArrowRight
              size={18}
              className="transition-all duration-300"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-10px)',
                color: 'var(--color-action-orange)',
              }}
            />
            <span>{city.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
