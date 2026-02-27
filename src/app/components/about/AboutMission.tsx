import { Award, Users, Leaf } from 'lucide-react';
import { LeadWizard } from '../forms/LeadWizard';

export function AboutMission() {
  return (
    <>
      {/* Mission Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-bg-white)' }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="mb-16">
            <h2 
              className="font-['Poppins'] text-3xl md:text-4xl mb-8 text-center"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-bold)',
                lineHeight: 'var(--line-height-heading)'
              }}
            >
              Our Commitment to the Texas Grid
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <p 
                className="font-['Inter'] text-lg"
                style={{ 
                  color: 'var(--color-text-main)',
                  lineHeight: 'var(--line-height-body)'
                }}
              >
                <strong>Power Up Solar Cleaning, LLC</strong> is a Texas-based, family-owned and 
                operated company committed to delivering the highest quality solar panel maintenance. 
                Maintaining your solar system is essential for protecting your investment and ensuring 
                maximum energy production. Without proper cleaning 1 to 2 times a year, Texas dust, 
                pollen, and debris can cause panels to lose more than 25% of their production capacity.
              </p>

              <p 
                className="font-['Inter'] text-lg"
                style={{ 
                  color: 'var(--color-text-main)',
                  lineHeight: 'var(--line-height-body)'
                }}
              >
                We take pride in upholding the highest standards to ensure <strong>100% customer 
                satisfaction</strong>. Our commitment to excellence drives us to provide the best 
                service every time, preserving your system's intended lifespan so you can enjoy 
                clean, renewable energy for decades to come.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
              >
                <Award 
                  className="w-8 h-8"
                  style={{ color: 'var(--color-accent-sky)' }}
                />
              </div>
              <h3 
                className="font-['Poppins'] text-xl mb-2"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-semibold)'
                }}
              >
                Quality Excellence
              </h3>
              <p 
                className="font-['Inter'] text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Industry-leading standards in every service
              </p>
            </div>

            <div className="text-center p-6">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
              >
                <Users 
                  className="w-8 h-8"
                  style={{ color: 'var(--color-accent-sky)' }}
                />
              </div>
              <h3 
                className="font-['Poppins'] text-xl mb-2"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-semibold)'
                }}
              >
                Family Values
              </h3>
              <p 
                className="font-['Inter'] text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Treating every customer like family
              </p>
            </div>

            <div className="text-center p-6">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
              >
                <Leaf 
                  className="w-8 h-8"
                  style={{ color: 'var(--color-accent-sky)' }}
                />
              </div>
              <h3 
                className="font-['Poppins'] text-xl mb-2"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-semibold)'
                }}
              >
                Sustainability
              </h3>
              <p 
                className="font-['Inter'] text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Supporting Texas renewable energy future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-bg-gray)' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="font-['Poppins'] text-3xl md:text-4xl mb-4"
              style={{ 
                color: 'var(--color-primary-navy)',
                fontWeight: 'var(--weight-bold)',
                lineHeight: 'var(--line-height-heading)'
              }}
            >
              Ready to Maximize Your Solar Investment?
            </h2>
            <p 
              className="font-['Inter'] text-lg"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Join over 3,000 of your North Texas neighbors who trust Power Up Solar Clean 
              to protect their homes.
            </p>
          </div>

          {/* Lead Gen Form */}
          <div 
            className="bg-white rounded-xl p-8 md:p-10 shadow-xl"
          >
            <LeadWizard />
          </div>
        </div>
      </section>
    </>
  );
}