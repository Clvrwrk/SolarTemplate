import { useState } from 'react';
import { Download, Check } from 'lucide-react';
import { CopyButton } from './CopyButton';

const colors = [
  { name: 'Power Up Navy', hex: '#0B2B53', var: 'var(--color-primary-navy)' },
  { name: 'Action Orange', hex: '#F28C28', var: 'var(--color-action-orange)' },
  { name: 'Sky Blue', hex: '#3498DB', var: 'var(--color-accent-sky)' }
];

// Fallback copy function for restricted contexts
const copyToClipboard = async (text: string): Promise<boolean> => {
  // Try modern Clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.warn('Clipboard API failed, using fallback:', err);
    }
  }

  // Fallback: Create a temporary textarea
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    textarea.style.top = '-999999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    
    const successful = document.execCommand('copy');
    document.body.removeChild(textarea);
    
    return successful;
  } catch (err) {
    console.error('Fallback copy failed:', err);
    return false;
  }
};

export function BrandAssets() {
  const [logoBg, setLogoBg] = useState<'dark' | 'light'>('dark');

  const handleDownload = (format: string, asset: string) => {
    alert(`Download ${asset} in ${format} format would start here.`);
  };

  return (
    <section 
      id="brand-assets"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="font-['Poppins'] text-3xl md:text-4xl mb-4"
            style={{ 
              color: 'var(--color-primary-navy)',
              fontWeight: 'var(--weight-bold)'
            }}
          >
            Brand Assets & Logos
          </h2>
          <p 
            className="font-['Inter'] text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'var(--color-text-main)' }}
          >
            Download our official logos and brand assets in multiple formats. 
            All files are optimized for print and digital use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Primary Logo */}
          <div 
            className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <h3 
              className="font-['Poppins'] text-xl mb-4"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-semibold)'
              }}
            >
              Primary Logo
            </h3>

            {/* Background Toggle */}
            <div className="mb-4 flex gap-2">
              <button
                onClick={() => setLogoBg('dark')}
                className="px-3 py-1 rounded text-sm transition-all duration-300"
                style={{
                  backgroundColor: logoBg === 'dark' ? 'var(--color-primary-navy)' : 'transparent',
                  color: logoBg === 'dark' ? 'white' : 'var(--color-text-main)',
                  border: `1px solid ${logoBg === 'dark' ? 'var(--color-primary-navy)' : 'var(--color-border-color)'}`
                }}
              >
                Dark BG
              </button>
              <button
                onClick={() => setLogoBg('light')}
                className="px-3 py-1 rounded text-sm transition-all duration-300"
                style={{
                  backgroundColor: logoBg === 'light' ? 'var(--color-bg-gray)' : 'transparent',
                  color: 'var(--color-text-main)',
                  border: `1px solid ${logoBg === 'light' ? 'var(--color-primary-navy)' : 'var(--color-border-color)'}`
                }}
              >
                Light BG
              </button>
            </div>

            {/* Logo Preview */}
            <div 
              className="w-full h-48 rounded-lg mb-6 flex items-center justify-center p-6 transition-all duration-300"
              style={{ 
                backgroundColor: logoBg === 'dark' ? '#1A4073' : '#F8F9FA'
              }}
            >
              <div 
                className="font-['Poppins'] text-2xl text-center"
                style={{ 
                  color: logoBg === 'dark' ? 'white' : 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-bold)'
                }}
              >
                Power Up<br/>Solar Clean
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => handleDownload('PNG', 'Primary Logo')}
                className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'var(--color-accent-sky)',
                  color: 'white',
                  fontWeight: 'var(--weight-medium)'
                }}
              >
                <Download className="w-4 h-4" />
                Download PNG (Transparent)
              </button>
              <button
                onClick={() => handleDownload('SVG', 'Primary Logo')}
                className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'var(--color-primary-navy)',
                  color: 'white',
                  fontWeight: 'var(--weight-medium)'
                }}
              >
                <Download className="w-4 h-4" />
                Download SVG (Vector)
              </button>
            </div>
          </div>

          {/* Card 2: Brand Icon */}
          <div 
            className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <h3 
              className="font-['Poppins'] text-xl mb-4"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-semibold)'
              }}
            >
              Brand Icon/Favicon
            </h3>

            {/* Icon Preview */}
            <div 
              className="w-full h-48 rounded-lg mb-6 flex items-center justify-center transition-all duration-300"
              style={{ backgroundColor: 'var(--color-primary-navy)' }}
            >
              <div 
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-action-orange)' }}
              >
                <span 
                  className="font-['Poppins'] text-4xl text-white"
                  style={{ fontWeight: 'var(--weight-bold)' }}
                >
                  P
                </span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => handleDownload('PNG', 'Brand Icon')}
                className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'var(--color-accent-sky)',
                  color: 'white',
                  fontWeight: 'var(--weight-medium)'
                }}
              >
                <Download className="w-4 h-4" />
                Download PNG
              </button>
              <button
                onClick={() => handleDownload('SVG', 'Brand Icon')}
                className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'var(--color-primary-navy)',
                  color: 'white',
                  fontWeight: 'var(--weight-medium)'
                }}
              >
                <Download className="w-4 h-4" />
                Download SVG
              </button>
            </div>
          </div>

          {/* Card 3: Color Palette */}
          <div 
            className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <h3 
              className="font-['Poppins'] text-xl mb-4"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-semibold)'
              }}
            >
              Official Color Palette
            </h3>

            <p 
              className="font-['Inter'] text-sm mb-6 leading-relaxed"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Click any color swatch to copy the hex code to your clipboard.
            </p>

            <div className="space-y-4">
              {colors.map((color, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                  onClick={async () => {
                    try {
                      await copyToClipboard(color.hex);
                    } catch (err) {
                      console.error('Failed to copy:', err);
                    }
                  }}
                >
                  <div className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-gray-50">
                    <div 
                      className="w-16 h-16 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: color.var,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                      }}
                    />
                    <div className="flex-1">
                      <div 
                        className="font-['Poppins'] mb-1"
                        style={{ 
                          color: 'var(--color-primary-navy)',
                          fontWeight: 'var(--weight-medium)'
                        }}
                      >
                        {color.name}
                      </div>
                      <div 
                        className="font-['Courier New'] text-sm"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        {color.hex}
                      </div>
                    </div>
                    <CopyButton 
                      text={color.hex}
                      successMessage={`${color.name} copied!`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}