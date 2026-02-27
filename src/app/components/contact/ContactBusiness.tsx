import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactBusiness() {
  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-white)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Company Name */}
        <h2 
          className="font-['Poppins'] text-3xl md:text-4xl mb-8 text-center"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontWeight: 'var(--weight-bold)',
            lineHeight: 'var(--line-height-heading)'
          }}
        >
          Power Up Solar Cleaning, LLC
        </h2>

        {/* Contact Details Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Address */}
          <div className="text-center">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
            >
              <MapPin 
                className="w-6 h-6"
                style={{ color: 'var(--color-accent-sky)' }}
              />
            </div>
            <h3 
              className="font-['Poppins'] mb-2"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-semibold)'
              }}
            >
              Service Area
            </h3>
            <p 
              className="font-['Inter']"
              style={{ 
                color: 'var(--color-text-main)',
                lineHeight: 'var(--line-height-body)'
              }}
            >
              Serving Collin & Dallas Counties<br />
              Allen, TX 75002
            </p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
            >
              <Phone 
                className="w-6 h-6"
                style={{ color: 'var(--color-accent-sky)' }}
              />
            </div>
            <h3 
              className="font-['Poppins'] mb-2"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-semibold)'
              }}
            >
              Phone
            </h3>
            <a
              href="tel:5551234567"
              className="font-['Inter'] transition-colors duration-300"
              style={{ 
                color: 'var(--color-action-orange)',
                lineHeight: 'var(--line-height-body)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-action-orange-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-action-orange)';
              }}
            >
              (555) 123-4567
            </a>
          </div>

          {/* Email */}
          <div className="text-center">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
            >
              <Mail 
                className="w-6 h-6"
                style={{ color: 'var(--color-accent-sky)' }}
              />
            </div>
            <h3 
              className="font-['Poppins'] mb-2"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-semibold)'
              }}
            >
              Email
            </h3>
            <a
              href="mailto:support@powerupsolarclean.com"
              className="font-['Inter'] transition-colors duration-300"
              style={{ 
                color: 'var(--color-action-orange)',
                lineHeight: 'var(--line-height-body)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-action-orange-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-action-orange)';
              }}
            >
              support@powerupsolarclean.com
            </a>
          </div>
        </div>

        {/* Semantic Service Description */}
        <div 
          className="p-8 rounded-xl text-center"
          style={{ 
            backgroundColor: 'var(--color-bg-gray)',
            border: '1px solid var(--color-border-color)'
          }}
        >
          <p 
            className="font-['Inter'] text-lg max-w-3xl mx-auto"
            style={{ 
              color: 'var(--color-text-main)',
              lineHeight: 'var(--line-height-body)'
            }}
          >
            We are a <strong>fully insured, family-owned company</strong> specializing in 
            advanced reverse osmosis <strong>solar panel cleaning</strong>, <strong>critter guard 
            installation</strong>, and <strong>solar attic ventilation</strong> services throughout 
            the North Texas region. Our commitment to excellence has helped us serve over 3,000 
            satisfied customers while maintaining the highest standards of safety and quality.
          </p>
        </div>

        {/* Service Keywords for SEO */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Solar Panel Cleaning Allen TX',
              'Critter Guards DFW',
              'Solar Attic Ventilation',
              'Residential Solar Maintenance',
              'Commercial Solar Cleaning',
              'North Texas Solar Services'
            ].map((keyword, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full font-['Inter'] text-sm"
                style={{
                  backgroundColor: 'var(--color-accent-sky-light)',
                  color: 'var(--color-accent-sky)',
                  fontWeight: 'var(--weight-medium)'
                }}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
