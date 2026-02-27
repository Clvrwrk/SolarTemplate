import { Mail, Phone, MapPin } from 'lucide-react';

export function PressContact() {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Media Inquiry: Power Up Solar Clean');
    window.location.href = `mailto:media@powerupsolarclean.com?subject=${subject}`;
  };

  return (
    <section 
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-primary-navy)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 
            className="font-['Poppins'] text-3xl md:text-4xl mb-4 text-white"
            style={{ fontWeight: 'var(--weight-bold)' }}
          >
            Press Contact
          </h2>
          <p 
            className="font-['Inter'] text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            For media inquiries, interview requests, or custom high-res assets, 
            please contact our community outreach team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div 
            className="bg-white rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            onClick={handleEmailClick}
          >
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-action-orange)' }}
            >
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 
              className="font-['Poppins'] text-lg mb-2"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-semibold)'
              }}
            >
              Email Us
            </h3>
            <p 
              className="font-['Inter'] text-sm mb-3"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Primary Contact
            </p>
            <a
              href="mailto:media@powerupsolarclean.com?subject=Media%20Inquiry:%20Power%20Up%20Solar%20Clean"
              className="font-['Inter'] hover:underline"
              style={{ color: 'var(--color-accent-sky)' }}
              onClick={(e) => e.stopPropagation()}
            >
              media@powerupsolarclean.com
            </a>
          </div>

          {/* Phone Card */}
          <div 
            className="bg-white rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-accent-sky)' }}
            >
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 
              className="font-['Poppins'] text-lg mb-2"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-semibold)'
              }}
            >
              Call Us
            </h3>
            <p 
              className="font-['Inter'] text-sm mb-3"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Media Hotline
            </p>
            <a
              href="tel:+12145550123"
              className="font-['Inter'] hover:underline"
              style={{ color: 'var(--color-accent-sky)' }}
            >
              (214) 555-0123
            </a>
          </div>

          {/* Location Card */}
          <div 
            className="bg-white rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-primary-navy)' }}
            >
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 
              className="font-['Poppins'] text-lg mb-2"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-semibold)'
              }}
            >
              Visit Us
            </h3>
            <p 
              className="font-['Inter'] text-sm mb-3"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Headquarters
            </p>
            <p 
              className="font-['Inter']"
              style={{ color: 'var(--color-text-main)' }}
            >
              Allen, TX 75002<br />
              Collin County
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div 
          className="mt-10 p-6 rounded-xl text-center"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <p 
            className="font-['Inter'] leading-relaxed text-white"
          >
            <strong>Response Time:</strong> We typically respond to media inquiries within 4 business hours. 
            For urgent requests, please call our media hotline directly.
          </p>
        </div>
      </div>
    </section>
  );
}
