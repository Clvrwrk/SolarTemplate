import { CopyButton } from './CopyButton';

const citations = [
  {
    label: 'Official Company Name',
    value: 'Powerup Solar Cleaning Services'
  },
  {
    label: 'Primary Service Area',
    value: 'Allen, TX & Collin County'
  },
  {
    label: 'Short Boilerplate (50 Words)',
    value: 'Powerup Solar Cleaning Services is Allen, Texas\'s premier provider of eco-friendly solar maintenance. Using advanced deionized water systems and non-abrasive techniques, we help homeowners and businesses maximize their renewable energy output by up to 20%, ensuring optimal performance and warranty compliance.'
  },
  {
    label: 'Long Boilerplate (100 Words)',
    value: 'Powerup Solar Cleaning Services is Allen, Texas\'s premier provider of eco-friendly solar maintenance. Using advanced deionized water systems and non-abrasive techniques, we help homeowners and businesses maximize their renewable energy output by up to 20%, ensuring optimal performance and warranty compliance. We are dedicated to maintaining the longevity and performance of your solar panels through meticulous cleaning, enhancing energy output and reducing maintenance costs. By preventing the depreciation of solar panel efficiency, we secure a substantial return on investment for North Texas homeowners facing heavy spring pollen and summer dust.'
  }
];

export function PerfectCitation() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="font-['Poppins'] text-3xl md:text-4xl mb-4"
            style={{ 
              color: 'var(--color-primary-navy)',
              fontWeight: 'var(--weight-bold)'
            }}
          >
            The Perfect Citation
          </h2>
          <p 
            className="font-['Inter'] text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'var(--color-text-main)' }}
          >
            Local SEO relies on NAP (Name, Address, Phone) consistency. Click any line to copy 
            our exact citation details for press releases, directories, and media features.
          </p>
        </div>

        <div 
          className="rounded-xl p-8 space-y-6"
          style={{
            backgroundColor: '#1A4073',
            boxShadow: '0 4px 20px rgba(11, 43, 83, 0.15)'
          }}
        >
          {citations.map((citation, index) => (
            <div 
              key={index}
              className="group transition-all duration-300 hover:bg-white rounded-lg p-4 cursor-pointer"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div 
                    className="font-['Inter'] text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: 'var(--color-accent-sky)' }}
                  >
                    {citation.label}
                  </div>
                  <div 
                    className="font-['Inter'] leading-relaxed transition-colors duration-300"
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontFamily: citation.label.includes('Boilerplate') 
                        ? 'Inter, sans-serif' 
                        : 'Courier New, monospace'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-primary-navy)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                    }}
                  >
                    {citation.value}
                  </div>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CopyButton 
                    text={citation.value}
                    successMessage={`${citation.label} copied!`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-6 p-4 rounded-lg"
          style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
        >
          <p 
            className="font-['Inter'] text-sm leading-relaxed"
            style={{ color: 'var(--color-text-main)' }}
          >
            <strong>Pro Tip:</strong> Hover over any line to reveal the copy button. 
            This ensures accurate citations across all media channels and directories, 
            strengthening our local SEO presence.
          </p>
        </div>
      </div>
    </section>
  );
}