import { useState } from 'react';
import { Send, Award, FileCheck, Shield } from 'lucide-react';

export function ProcessGuarantee() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    systemSize: '',
    preferredDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll contact you soon to schedule your engineering-grade solar panel cleaning.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Promise Section */}
        <div className="text-center mb-12">
          <h2 
            className="font-['Poppins'] text-3xl md:text-4xl mb-6"
            style={{ 
              color: 'var(--color-primary-navy)',
              fontWeight: 'var(--weight-bold)',
              lineHeight: 'var(--line-height-heading)'
            }}
          >
            Our Promise to You
          </h2>

          <div className="max-w-4xl mx-auto">
            <p 
              className="font-['Inter'] text-lg mb-8"
              style={{ 
                color: 'var(--color-text-main)',
                lineHeight: 'var(--line-height-body)'
              }}
            >
              We guarantee that our cleaning has restored your solar array to its maximum physical 
              light transmittance (kWh capacity). While we cannot control volatile local utility 
              rates or guarantee a specific dollar amount of savings on your electric bill, we can 
              guarantee that your system is now operating at <strong>peak physical efficiency</strong>, 
              completely free of warranty-voiding soiling.
            </p>

            {/* Trust Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div 
                className="p-6 rounded-xl bg-white shadow-md"
              >
                <Award 
                  className="w-12 h-12 mx-auto mb-3"
                  style={{ color: 'var(--color-action-orange)' }}
                />
                <h3 
                  className="font-['Poppins'] text-lg mb-2"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  OEM Compliant
                </h3>
                <p 
                  className="font-['Inter'] text-sm"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Every step follows manufacturer guidelines
                </p>
              </div>

              <div 
                className="p-6 rounded-xl bg-white shadow-md"
              >
                <FileCheck 
                  className="w-12 h-12 mx-auto mb-3"
                  style={{ color: 'var(--color-action-orange)' }}
                />
                <h3 
                  className="font-['Poppins'] text-lg mb-2"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Documented Results
                </h3>
                <p 
                  className="font-['Inter'] text-sm"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Full Post-Flight Service Report included
                </p>
              </div>

              <div 
                className="p-6 rounded-xl bg-white shadow-md"
              >
                <Shield 
                  className="w-12 h-12 mx-auto mb-3"
                  style={{ color: 'var(--color-action-orange)' }}
                />
                <h3 
                  className="font-['Poppins'] text-lg mb-2"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Warranty Protected
                </h3>
                <p 
                  className="font-['Inter'] text-sm"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Zero risk to your manufacturer warranty
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Gen Form */}
        <div className="max-w-2xl mx-auto">
          <div 
            className="bg-white rounded-xl p-8 md:p-10 shadow-2xl"
          >
            <h3 
              className="font-['Poppins'] text-2xl md:text-3xl text-center mb-6"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-bold)'
              }}
            >
              Ready for an Engineering-Grade Clean?
            </h3>

            <p 
              className="font-['Inter'] text-center mb-8"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Secure your spot today and experience the Powerup difference.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name"
                    className="block mb-2 font-['Poppins'] text-sm"
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
                    className="block mb-2 font-['Poppins'] text-sm"
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
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="phone"
                    className="block mb-2 font-['Poppins'] text-sm"
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
                    htmlFor="systemSize"
                    className="block mb-2 font-['Poppins'] text-sm"
                    style={{ 
                      color: 'var(--color-primary-navy)',
                      fontWeight: 'var(--weight-semibold)'
                    }}
                  >
                    System Size
                  </label>
                  <select
                    id="systemSize"
                    name="systemSize"
                    value={formData.systemSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300"
                    style={{ 
                      border: '2px solid var(--color-border-color)',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent-sky)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-accent-sky-light)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border-color)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Select size</option>
                    <option value="small">Small (1-10 panels)</option>
                    <option value="medium">Medium (11-25 panels)</option>
                    <option value="large">Large (26+ panels)</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
              </div>

              <div>
                <label 
                  htmlFor="address"
                  className="block mb-2 font-['Poppins'] text-sm"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Service Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your full address"
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
                  htmlFor="preferredDate"
                  className="block mb-2 font-['Poppins'] text-sm"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
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
                Schedule My Service
              </button>

              <p 
                className="text-sm text-center"
                style={{ color: 'var(--color-text-muted)' }}
              >
                By submitting this form, you agree to receive communication from Powerup Solar Cleaning Services.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
