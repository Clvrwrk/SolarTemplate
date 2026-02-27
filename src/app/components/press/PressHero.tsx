import { Download, ArrowDown } from 'lucide-react';

export function PressHero() {
  const scrollToAssets = () => {
    const element = document.getElementById('brand-assets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadKit = () => {
    // In a real implementation, this would trigger a ZIP download
    alert('Full Media Kit download would start here. Please prepare a ZIP file with all assets.');
  };

  return (
    <section 
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-primary-navy)' }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 
          className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
          style={{ 
            fontWeight: 'var(--weight-bold)',
            lineHeight: 'var(--line-height-heading)'
          }}
        >
          Power Up Solar Clean: Press & Media Kit
        </h1>

        <p 
          className="font-['Inter'] text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ color: 'var(--color-accent-sky)' }}
        >
          Everything you need to feature Allen's premier solar panel cleaning service. 
          Download high-res assets, access our exact brand standards, and grab our official 
          company boilerplate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary Button */}
          <button
            onClick={handleDownloadKit}
            className="w-full sm:w-auto px-8 py-4 rounded-lg font-['Poppins'] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2"
            style={{
              backgroundColor: 'var(--color-action-orange)',
              fontWeight: 'var(--weight-semibold)'
            }}
          >
            <Download className="w-5 h-5" />
            Download Full Media Kit (.ZIP)
          </button>

          {/* Secondary Button */}
          <button
            onClick={scrollToAssets}
            className="w-full sm:w-auto px-8 py-4 rounded-lg font-['Poppins'] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            style={{
              backgroundColor: 'transparent',
              border: '2px solid white',
              color: 'white',
              fontWeight: 'var(--weight-semibold)'
            }}
          >
            <ArrowDown className="w-5 h-5" />
            Jump to Brand Assets
          </button>
        </div>
      </div>
    </section>
  );
}
