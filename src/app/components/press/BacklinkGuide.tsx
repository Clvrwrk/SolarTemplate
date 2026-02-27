import { useState } from 'react';
import { Copy, Check, Info } from 'lucide-react';
import { toast } from 'sonner';

const sponsorCode = `<!-- Power Up Solar Clean Sponsor Link -->
<a href="https://powerupsolarclean.com/" target="_blank" rel="dofollow">
  <img src="https://powerupsolarclean.com/assets/power-up-logo-horizontal.png" alt="Powerup Solar Cleaning Services - Allen TX" width="250" />
</a>
<p>Proudly sponsored by <a href="https://powerupsolarclean.com/" target="_blank" rel="dofollow">Power Up Solar Clean</a>, Allen's experts in maximizing solar efficiency.</p>`;

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
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(sponsorCode);
    
    if (success) {
      setIsCopied(true);
      toast.success('Sponsor code copied to clipboard!');

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
      style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="font-['Poppins'] text-3xl md:text-4xl mb-4"
            style={{ 
              color: 'var(--color-primary-navy)',
              fontWeight: 'var(--weight-bold)'
            }}
          >
            Proud to Sponsor Our Local Community
          </h2>
          <p 
            className="font-['Inter'] text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'var(--color-text-main)' }}
          >
            Are we sponsoring your local Allen sports team, school event, or community initiative? 
            Thank you for featuring us! To ensure our logo and link look perfect on your website, 
            please use the provided HTML code below.
          </p>
        </div>

        {/* Code Block Container */}
        <div 
          className="rounded-xl overflow-hidden mb-6"
          style={{
            boxShadow: '0 4px 20px rgba(11, 43, 83, 0.2)'
          }}
        >
          {/* Code Header */}
          <div 
            className="flex justify-between items-center px-6 py-4"
            style={{ 
              backgroundColor: 'var(--color-primary-navy)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <span 
              className="font-['Inter'] text-sm text-white"
              style={{ fontWeight: 'var(--weight-medium)' }}
            >
              HTML Sponsor Link
            </span>
            
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-['Inter'] text-sm transition-all duration-300 ${
                isCopied ? 'pointer-events-none' : 'hover:-translate-y-0.5'
              }`}
              style={{
                backgroundColor: isCopied ? '#28a745' : 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: `1px solid ${isCopied ? '#28a745' : 'rgba(255, 255, 255, 0.2)'}`,
                fontWeight: 'var(--weight-medium)'
              }}
              aria-label={isCopied ? 'Code copied!' : 'Copy code to clipboard'}
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Code Content */}
          <div style={{ backgroundColor: '#1A4073' }}>
            <pre className="p-6 overflow-x-auto">
              <code 
                className="font-['Courier New'] text-sm leading-relaxed block"
                style={{ color: 'var(--color-accent-sky-light)' }}
              >
                {sponsorCode}
              </code>
            </pre>
          </div>
        </div>

        {/* Pro Tip Callout */}
        <div 
          className="bg-white rounded-xl p-6 shadow-lg"
          style={{ border: '2px solid var(--color-accent-sky)' }}
        >
          <div className="flex gap-4">
            <div 
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
            >
              <Info 
                className="w-6 h-6"
                style={{ color: 'var(--color-accent-sky)' }}
              />
            </div>
            <div>
              <h3 
                className="font-['Poppins'] text-lg mb-2"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-semibold)'
                }}
              >
                Pro-Tip for Webmasters
              </h3>
              <p 
                className="font-['Inter'] leading-relaxed"
                style={{ color: 'var(--color-text-main)' }}
              >
                Notice the <code className="px-2 py-1 rounded bg-gray-100 font-['Courier New'] text-sm">rel="dofollow"</code> in 
                our code? This simply tells search engines that you officially endorse us as a trusted 
                local partner. We greatly appreciate you leaving it in! It helps us continue supporting 
                Allen's community initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Instructions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div 
            className="bg-white rounded-lg p-4 text-center"
            style={{ border: '1px solid var(--color-border-color)' }}
          >
            <div 
              className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center font-['Poppins'] text-white"
              style={{ 
                backgroundColor: 'var(--color-action-orange)',
                fontWeight: 'var(--weight-bold)'
              }}
            >
              1
            </div>
            <p 
              className="font-['Inter'] text-sm"
              style={{ color: 'var(--color-text-main)' }}
            >
              Click "Copy Code" above
            </p>
          </div>

          <div 
            className="bg-white rounded-lg p-4 text-center"
            style={{ border: '1px solid var(--color-border-color)' }}
          >
            <div 
              className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center font-['Poppins'] text-white"
              style={{ 
                backgroundColor: 'var(--color-action-orange)',
                fontWeight: 'var(--weight-bold)'
              }}
            >
              2
            </div>
            <p 
              className="font-['Inter'] text-sm"
              style={{ color: 'var(--color-text-main)' }}
            >
              Paste into your website's sponsor section
            </p>
          </div>

          <div 
            className="bg-white rounded-lg p-4 text-center"
            style={{ border: '1px solid var(--color-border-color)' }}
          >
            <div 
              className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center font-['Poppins'] text-white"
              style={{ 
                backgroundColor: 'var(--color-action-orange)',
                fontWeight: 'var(--weight-bold)'
              }}
            >
              3
            </div>
            <p 
              className="font-['Inter'] text-sm"
              style={{ color: 'var(--color-text-main)' }}
            >
              Publish and you're done!
            </p>
          </div>
        </div>
      </div>

      {/* Screen Reader Announcer */}
      <div 
        aria-live="polite" 
        className="sr-only"
      />
    </section>
  );
}