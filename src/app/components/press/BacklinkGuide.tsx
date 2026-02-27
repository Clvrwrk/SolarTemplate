import { useState, useEffect } from 'react';
import { toast } from 'sonner';

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

export function BacklinkGuide() {
  const [badgeWidth, setBadgeWidth] = useState(320);
  const [badgeTheme, setBadgeTheme] = useState<'light' | 'dark'>('light');
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [generatedHTML, setGeneratedHTML] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Function to generate the badge HTML
  const generateBadgeHTML = (width: number, theme: 'light' | 'dark', grayscale: boolean): string => {
    // 1. Theme Configuration
    const isDark = theme === 'dark';
    const bgColor = isDark ? '#0B2B53' : '#ffffff';
    const textColor = isDark ? '#EBF5FB' : '#333333';
    const subtextColor = isDark ? '#A0B3C6' : '#555555';
    const borderColor = isDark ? '#1A4073' : '#EBF5FB';
    
    // 2. Grayscale & Brand Color Overrides
    const linkColor = grayscale ? textColor : '#F28C28'; // Falls back to text color if grayscale
    const imageFilter = grayscale ? 'filter: grayscale(100%); opacity: 0.9;' : '';

    // 3. The HTML Template String (Using standard external image links)
    return `<div style="width: 100%; max-width: ${width}px; margin: 20px auto; padding: 24px 20px; text-align: center; background-color: ${bgColor}; border: 1px solid ${borderColor}; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; color: ${textColor};">
  
  <a href="https://powerupsolarclean.com/" target="_blank" rel="noopener" style="display: block; margin-bottom: 16px; text-decoration: none; color: ${textColor};">
    <img src="https://powerupsolarclean.com/assets/power-up-logo-horizontal.png" alt="Power Up Solar Cleaning Services - Allen TX" style="max-width: 100%; height: auto; border: none; display: block; margin: 0 auto; ${imageFilter}" />
  </a>
  
  <p style="margin: 0; font-size: 14px; color: ${textColor}; line-height: 1.5;">
    Proudly sponsored by <br>
    <strong><a href="https://powerupsolarclean.com/" target="_blank" rel="noopener" style="color: ${linkColor}; text-decoration: none; font-weight: 700;">Power Up Solar Clean</a></strong>
  </p>
  
  <p style="margin: 8px 0 0 0; font-size: 12px; color: ${subtextColor}; line-height: 1.4;">
    Allen's experts in maximizing residential and commercial solar efficiency.
  </p>
  
</div>`;
  };

  // Update generated HTML whenever settings change
  useEffect(() => {
    const html = generateBadgeHTML(badgeWidth, badgeTheme, isGrayscale);
    setGeneratedHTML(html);
  }, [badgeWidth, badgeTheme, isGrayscale]);

  const handleCopy = async () => {
    const success = await copyToClipboard(generatedHTML);
    
    if (success) {
      setIsCopied(true);
      toast.success('Badge code copied to clipboard!');

      setTimeout(() => {
        setIsCopied(false);
      }, 2500);
    } else {
      toast.error('Failed to copy. Please select and copy the code manually.');
    }
  };

  return (
    <section 
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F8F9FA' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className="mb-8 pb-6"
          style={{ borderBottom: '2px solid #EBF5FB' }}
        >
          <h2 
            className="font-['Poppins'] text-3xl md:text-4xl mb-4"
            style={{ 
              color: 'var(--color-primary-navy)',
              fontWeight: 'var(--weight-bold)'
            }}
          >
            Official Sponsor Badge Builder
          </h2>
          <p 
            className="font-['Inter'] text-lg leading-relaxed max-w-4xl"
            style={{ color: '#555' }}
          >
            Are we sponsoring your local Allen event, school, or organization? Thank you for your partnership! 
            Use the tool below to generate a responsive, SEO-friendly sponsor badge that perfectly matches your website's design.
          </p>
          
          {/* Pro-Tips for Webmasters */}
          <div 
            className="mt-5 rounded-lg p-4 md:p-6"
            style={{ 
              backgroundColor: '#EBF5FB', 
              borderLeft: '4px solid var(--color-accent-sky)' 
            }}
          >
            <h4 
              className="font-['Inter'] text-base md:text-lg mb-2"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-semibold)'
              }}
            >
              🛠️ Pro-Tips for Webmasters & PIOs:
            </h4>
            <ul 
              className="font-['Inter'] text-sm leading-relaxed space-y-1.5 ml-5"
              style={{ color: '#333' }}
            >
              <li>
                <strong>Responsive by Default:</strong> The generated code uses <code className="px-1.5 py-0.5 bg-white rounded text-xs">max-width</code> and <code className="px-1.5 py-0.5 bg-white rounded text-xs">width: 100%</code>, ensuring it shrinks fluidly on mobile devices without breaking your layout.
              </li>
              <li>
                <strong>Manual CSS Tweaks:</strong> Feel free to modify the inline <code className="px-1.5 py-0.5 bg-white rounded text-xs">background-color</code>, <code className="px-1.5 py-0.5 bg-white rounded text-xs">border-radius</code>, or <code className="px-1.5 py-0.5 bg-white rounded text-xs">box-shadow</code> in the copied snippet to match your exact CSS framework.
              </li>
              <li>
                <strong>Image Hosting:</strong> The image <code className="px-1.5 py-0.5 bg-white rounded text-xs">src</code> pulls directly from our high-speed CDN. You do not need to download or host the logo locally.
              </li>
            </ul>
          </div>
        </div>

        {/* Builder Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Left: Builder Controls */}
          <div className="flex-1 min-w-[280px]">
            <h3 
              className="font-['Poppins'] text-2xl mb-6"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-semibold)'
              }}
            >
              1. Customize Your Look
            </h3>
            
            {/* Width Slider */}
            <div className="mb-6">
              <label 
                htmlFor="badgeWidth"
                className="font-['Inter'] block mb-2"
                style={{ 
                  fontWeight: 'var(--weight-semibold)',
                  color: 'var(--color-primary-navy)'
                }}
              >
                Maximum Width: <span style={{ color: 'var(--color-accent-sky)' }}>{badgeWidth}px</span>
              </label>
              <input 
                type="range"
                id="badgeWidth"
                min="200"
                max="600"
                value={badgeWidth}
                onChange={(e) => setBadgeWidth(Number(e.target.value))}
                className="w-full cursor-pointer"
                style={{ accentColor: 'var(--color-action-orange)' }}
              />
            </div>

            {/* Theme Select */}
            <div className="mb-6">
              <label 
                htmlFor="badgeTheme"
                className="font-['Inter'] block mb-2"
                style={{ 
                  fontWeight: 'var(--weight-semibold)',
                  color: 'var(--color-primary-navy)'
                }}
              >
                Theme
              </label>
              <select 
                id="badgeTheme"
                value={badgeTheme}
                onChange={(e) => setBadgeTheme(e.target.value as 'light' | 'dark')}
                className="w-full px-4 py-3 rounded-lg border font-['Inter']"
                style={{ 
                  borderColor: '#ccc',
                  fontSize: '15px'
                }}
              >
                <option value="light">Light Mode (White Background)</option>
                <option value="dark">Dark Mode (Navy Background)</option>
              </select>
            </div>

            {/* Grayscale Checkbox */}
            <div className="mb-6">
              <label 
                className="font-['Inter'] flex items-center gap-3 cursor-pointer"
                style={{ fontWeight: 'var(--weight-semibold)' }}
              >
                <input 
                  type="checkbox"
                  id="badgeGrayscale"
                  checked={isGrayscale}
                  onChange={(e) => setIsGrayscale(e.target.checked)}
                  className="w-5 h-5 cursor-pointer"
                  style={{ accentColor: 'var(--color-action-orange)' }}
                />
                <span style={{ color: 'var(--color-primary-navy)' }}>
                  Use Neutral / Grayscale Mode
                </span>
              </label>
              <p 
                className="ml-8 mt-2 font-['Inter'] text-sm"
                style={{ color: '#666' }}
              >
                Strips brand colors for a minimalist, black-and-white aesthetic.
              </p>
            </div>
          </div>

          {/* Right: Preview & Code */}
          <div className="flex-[1.5] min-w-[320px]">
            <h3 
              className="font-['Poppins'] text-2xl mb-6"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-semibold)'
              }}
            >
              2. Preview & Copy
            </h3>
            
            {/* Live Preview */}
            <div 
              className="mb-6 min-h-[180px] flex items-center justify-center rounded-lg p-6"
              style={{ 
                backgroundColor: '#e9ecef',
                backgroundImage: 'radial-gradient(#d7d7d7 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
              dangerouslySetInnerHTML={{ __html: generatedHTML }}
            />

            {/* Code Output */}
            <div 
              className="rounded-lg overflow-hidden relative"
              style={{ backgroundColor: '#1A4073' }}
            >
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 px-4 py-2 rounded-md font-['Inter'] text-sm transition-all duration-200"
                style={{
                  backgroundColor: isCopied ? '#28a745' : 'var(--color-action-orange)',
                  color: 'white',
                  fontWeight: 'var(--weight-semibold)',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isCopied) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(242, 140, 40, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {isCopied ? 'Copied!' : 'Copy Code'}
              </button>
              
              <pre className="pt-14 pb-6 px-6 overflow-x-auto">
                <code 
                  className="font-['Courier New'] text-xs md:text-sm leading-relaxed block whitespace-pre-wrap break-all"
                  style={{ color: '#EBF5FB' }}
                >
                  {generatedHTML}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}