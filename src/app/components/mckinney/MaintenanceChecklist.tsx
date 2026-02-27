import { Check } from 'lucide-react';

export function MaintenanceChecklist() {
  const items = [
    'Regularly inspect panels for dirt accumulation and physical obstructions.',
    'Trim surrounding trees to prevent shading and debris accumulation.',
    'Secure panel mounts and frames to withstand extreme weather conditions common in McKinney.',
    'Avoid abrasive materials or tools when cleansing surfaces to prevent micro-scratches.',
    'Schedule professional cleaning at least twice per year during peak pollen seasons.',
    'Monitor energy output data to identify potential efficiency drops early.',
    'Ensure gutters and drainage systems are clear to prevent water damage.',
    'Document all maintenance activities for warranty compliance.'
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h3 
          className="font-['Poppins'] text-2xl md:text-3xl mb-8"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontWeight: 'var(--weight-bold)',
            lineHeight: 'var(--line-height-heading)'
          }}
        >
          Long-term Benefits of Routine Cleaning in McKinney
        </h3>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex gap-4 items-start p-4 rounded-lg transition-all duration-300 hover:shadow-md"
              style={{ backgroundColor: 'var(--color-bg-gray)' }}
            >
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'var(--color-accent-sky)' }}
              >
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <p 
                className="font-['Inter'] flex-1"
                style={{ 
                  color: 'var(--color-text-main)',
                  lineHeight: 'var(--line-height-body)'
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        <div 
          className="mt-8 p-6 rounded-xl"
          style={{ 
            backgroundColor: 'var(--color-accent-sky-light)',
            border: '2px solid var(--color-accent-sky)'
          }}
        >
          <p 
            className="font-['Inter'] text-lg"
            style={{ 
              color: 'var(--color-text-main)',
              lineHeight: 'var(--line-height-body)'
            }}
          >
            <strong style={{ color: 'var(--color-primary-navy)' }}>Pro Tip:</strong> In McKinney's 
            climate, scheduling cleanings in early spring (before peak pollen season) and late 
            fall (after tree debris settles) provides optimal year-round performance.
          </p>
        </div>
      </div>
    </section>
  );
}
