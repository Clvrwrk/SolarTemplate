import { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export function FinalLeadGen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll contact you soon to schedule your McKinney solar panel cleaning.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Information */}
          <div>
            <h2 
              className="font-['Poppins'] text-3xl md:text-4xl mb-6"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-bold)',
                lineHeight: 'var(--line-height-heading)'
              }}
            >
              Schedule Your McKinney Solar Panel Cleaning
            </h2>

            <p 
              className="font-['Inter'] text-lg mb-8"
              style={{ 
                color: 'var(--color-text-main)',
                lineHeight: 'var(--line-height-body)'
              }}
            >
              Investing in regular solar panel maintenance with Powerup Solar Cleaning Services 
              ensures your energy system operates at peak efficiency, safeguarding your financial 
              stake. Contact us today to schedule a comprehensive cleaning and experience the 
              boost in energy yield.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone 
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  style={{ color: 'var(--color-action-orange)' }}
                />
                <div>
                  <p 
                    className="font-['Poppins']"
                    style={{ 
                      color: 'var(--color-primary-navy)',
                      fontWeight: 'var(--weight-semibold)'
                    }}
                  >
                    Call Us
                  </p>
                  <a 
                    href="tel:+12145550123"
                    className="font-['Inter']"
                    style={{ color: 'var(--color-text-main)' }}
                  >
                    (214) 555-0123
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail 
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  style={{ color: 'var(--color-action-orange)' }}
                />
                <div>
                  <p 
                    className="font-['Poppins']"
                    style={{ 
                      color: 'var(--color-primary-navy)',
                      fontWeight: 'var(--weight-semibold)'
                    }}
                  >
                    Email Us
                  </p>
                  <a 
                    href="mailto:info@powerupsolar.com"
                    className="font-['Inter']"
                    style={{ color: 'var(--color-text-main)' }}
                  >
                    info@powerupsolar.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin 
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  style={{ color: 'var(--color-action-orange)' }}
                />
                <div>
                  <p 
                    className="font-['Poppins']"
                    style={{ 
                      color: 'var(--color-primary-navy)',
                      fontWeight: 'var(--weight-semibold)'
                    }}
                  >
                    Service Area
                  </p>
                  <p 
                    className="font-['Inter']"
                    style={{ color: 'var(--color-text-main)' }}
                  >
                    McKinney, TX & Collin County
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div 
            className="p-8 rounded-xl bg-white shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name"
                  className="block mb-2 font-['Poppins']"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300"
                  style={{ 
                    border: '2px solid var(--color-border-color)',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent-sky)';
                    e.target.style.boxShadow = '0 0 0 3px var(--color-accent-sky-light)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border-color)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="email"
                  className="block mb-2 font-['Poppins']"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300"
                  style={{ 
                    border: '2px solid var(--color-border-color)',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent-sky)';
                    e.target.style.boxShadow = '0 0 0 3px var(--color-accent-sky-light)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border-color)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="phone"
                  className="block mb-2 font-['Poppins']"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300"
                  style={{ 
                    border: '2px solid var(--color-border-color)',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent-sky)';
                    e.target.style.boxShadow = '0 0 0 3px var(--color-accent-sky-light)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border-color)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="address"
                  className="block mb-2 font-['Poppins']"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Service Address (McKinney)
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300"
                  style={{ 
                    border: '2px solid var(--color-border-color)',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent-sky)';
                    e.target.style.boxShadow = '0 0 0 3px var(--color-accent-sky-light)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border-color)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="message"
                  className="block mb-2 font-['Poppins']"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300 resize-none"
                  style={{ 
                    border: '2px solid var(--color-border-color)',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent-sky)';
                    e.target.style.boxShadow = '0 0 0 3px var(--color-accent-sky-light)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border-color)';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Tell us about your solar panel system and cleaning needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-lg font-['Poppins'] flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-action-orange)',
                  color: 'white',
                  fontWeight: 'var(--weight-semibold)',
                  boxShadow: '0 4px 12px rgba(242, 140, 40, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(11, 43, 83, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(242, 140, 40, 0.3)';
                }}
              >
                <Send className="w-5 h-5" />
                Request Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
