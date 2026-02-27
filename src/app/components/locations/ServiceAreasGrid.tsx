import { ServiceAreaCard } from './ServiceAreaCard';

export function ServiceAreasGrid() {
  const serviceAreas = [
    {
      county: 'Collin County Area',
      cities: [
        { name: 'Allen, TX', url: '/Solar-Panel-Cleaning-Allen-Texas' },
        { name: 'Plano, TX' },
        { name: 'Frisco, TX' },
        { name: 'McKinney, TX', url: '/solar-panel-cleaning-mckinney-tx' },
        { name: 'Prosper, TX' },
        { name: 'Celina, TX' },
      ],
      defaultExpanded: true,
    },
    {
      county: 'Dallas County Area',
      cities: [
        { name: 'North Dallas, TX' },
        { name: 'Richardson, TX' },
        { name: 'Garland, TX' },
        { name: 'Addison, TX' },
        { name: 'Carrollton, TX' },
        { name: 'Farmers Branch, TX' },
      ],
      defaultExpanded: false,
    },
    {
      county: 'Denton County Area',
      cities: [
        { name: 'Denton, TX' },
        { name: 'Lewisville, TX' },
        { name: 'Flower Mound, TX' },
        { name: 'Little Elm, TX' },
        { name: 'The Colony, TX' },
        { name: 'Highland Village, TX' },
      ],
      defaultExpanded: false,
    },
  ];

  return (
    <section 
      id="service-areas"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-white)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ 
              color: 'var(--color-primary-navy)',
              fontFamily: 'Poppins, sans-serif',
              lineHeight: 'var(--line-height-heading)',
            }}
          >
            Our North Texas Service Areas
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ 
              color: 'var(--color-text-muted)',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 'var(--line-height-body)',
            }}
          >
            Select your city to view location-specific information and get started with 
            your solar panel cleaning service today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreas.map((area, index) => (
            <ServiceAreaCard
              key={index}
              county={area.county}
              cities={area.cities}
              defaultExpanded={area.defaultExpanded}
            />
          ))}
        </div>

        {/* Mobile Tip */}
        <div 
          className="mt-8 p-4 rounded-lg md:hidden text-center"
          style={{ backgroundColor: 'var(--color-bg-light-blue)' }}
        >
          <p 
            className="text-sm"
            style={{ 
              color: 'var(--color-primary-navy)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            💡 <strong>Tip:</strong> Tap on a county to expand and view all cities
          </p>
        </div>
      </div>
    </section>
  );
}