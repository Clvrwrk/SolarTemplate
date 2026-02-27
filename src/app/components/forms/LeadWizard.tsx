import { useState, useRef, FormEvent } from 'react';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { DatePicker } from './DatePicker';

interface LeadWizardProps {
  context?: 'contact' | 'hero' | 'inline';
  onSuccess?: () => void;
}

export function LeadWizard({ context = 'inline', onSuccess }: LeadWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    // Step 1
    propertyType: '',
    serviceType: '',
    stories: '',
    systemSize: '',
    // Step 2
    address: '',
    preferredDate: '',
    preferredTime: '',
    // Step 3
    fullName: '',
    email: '',
    phone: '',
    additionalDetails: '',
    smsOptinTransactional: false,
    smsOptinMarketing: false
  });

  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  const getProgress = () => {
    if (currentStep === 1) return { width: '33%', text: '33% Complete' };
    if (currentStep === 2) return { width: '66%', text: '66% Complete' };
    return { width: '90%', text: 'Just one last step!' };
  };

  const validateStep = (step: number): boolean => {
    if (step === 1) {
      return !!(formData.propertyType && formData.serviceType && formData.stories && formData.systemSize);
    }
    if (step === 2) {
      return !!(formData.address && formData.preferredDate && formData.preferredTime);
    }
    if (step === 3) {
      return !!(formData.fullName && formData.email && formData.phone && formData.smsOptinTransactional);
    }
    return false;
  };

  const goToStep = (step: number) => {
    if (step > currentStep && !validateStep(currentStep)) {
      alert('Please complete all required fields before continuing.');
      return;
    }
    setCurrentStep(step);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(3)) {
      alert('Please complete all required fields and accept the SMS consent.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Lead submitted:', formData);
      setIsSubmitting(false);
      alert('Thank you! We\'ll send your free quote within 24 hours.');
      
      // Reset form
      setFormData({
        propertyType: '',
        serviceType: '',
        stories: '',
        systemSize: '',
        address: '',
        preferredDate: '',
        preferredTime: '',
        fullName: '',
        email: '',
        phone: '',
        additionalDetails: '',
        smsOptinTransactional: false,
        smsOptinMarketing: false
      });
      setCurrentStep(1);
      
      if (onSuccess) onSuccess();
    }, 1500);
  };

  const progress = getProgress();

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-2">
        <div 
          className="h-2 rounded-full overflow-hidden transition-all duration-300"
          style={{ backgroundColor: 'var(--color-border-color)' }}
        >
          <div 
            className="h-full transition-all duration-400"
            style={{ 
              width: progress.width,
              backgroundColor: 'var(--color-action-orange)'
            }}
          />
        </div>
      </div>
      
      <p 
        className="text-sm mb-6 font-['Inter']"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {progress.text}
      </p>

      {/* Wizard Viewport */}
      <div className="overflow-hidden rounded-xl">
        <form onSubmit={handleSubmit} className="relative">
          <div 
            className="flex transition-transform duration-400"
            style={{ 
              transform: `translateX(-${(currentStep - 1) * 100}%)`,
              transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)'
            }}
          >
            {/* Step 1: Property Details */}
            <div 
              ref={step1Ref}
              className="min-w-full px-2"
              style={{ width: '100%', flexShrink: 0 }}
            >
              <h3 
                className="font-['Poppins'] text-2xl mb-6"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-bold)'
                }}
              >
                Tell us about your property's setup
              </h3>

              {/* Property Type */}
              <div className="mb-6">
                <label 
                  className="block mb-3 font-['Poppins']"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Service Interest *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'residential', label: '🏠 Residential' },
                    { value: 'commercial', label: '🏢 Commercial' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="propertyType"
                        value={option.value}
                        checked={formData.propertyType === option.value}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="sr-only"
                      />
                      <div
                        className="px-4 py-4 rounded-lg text-center transition-all duration-300 font-['Inter']"
                        style={{
                          backgroundColor: formData.propertyType === option.value 
                            ? 'var(--color-accent-sky)' 
                            : 'var(--color-bg-white)',
                          border: `2px solid ${formData.propertyType === option.value 
                            ? 'var(--color-accent-sky)' 
                            : 'var(--color-border-color)'}`,
                          color: formData.propertyType === option.value 
                            ? 'white' 
                            : 'var(--color-text-muted)',
                          fontWeight: 'var(--weight-medium)',
                          boxShadow: formData.propertyType === option.value 
                            ? '0 4px 12px rgba(52, 152, 219, 0.3)' 
                            : 'none',
                          minHeight: '48px'
                        }}
                      >
                        {option.label}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Service Type */}
              <div className="mb-6">
                <label 
                  className="block mb-3 font-['Poppins']"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Service Type *
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { value: 'solar-cleaning', label: 'Solar Panel Cleaning' },
                    { value: 'critter-guards', label: 'Critter Guards' },
                    { value: 'attic-ventilation', label: 'Solar Attic Ventilation' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="serviceType"
                        value={option.value}
                        checked={formData.serviceType === option.value}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="sr-only"
                      />
                      <div
                        className="px-4 py-4 rounded-lg text-center transition-all duration-300 font-['Inter']"
                        style={{
                          backgroundColor: formData.serviceType === option.value 
                            ? 'var(--color-accent-sky)' 
                            : 'var(--color-bg-white)',
                          border: `2px solid ${formData.serviceType === option.value 
                            ? 'var(--color-accent-sky)' 
                            : 'var(--color-border-color)'}`,
                          color: formData.serviceType === option.value 
                            ? 'white' 
                            : 'var(--color-text-muted)',
                          fontWeight: 'var(--weight-medium)',
                          boxShadow: formData.serviceType === option.value 
                            ? '0 4px 12px rgba(52, 152, 219, 0.3)' 
                            : 'none',
                          minHeight: '48px'
                        }}
                      >
                        {option.label}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stories */}
              <div className="mb-6">
                <label 
                  className="block mb-3 font-['Poppins']"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  How many stories is the property? *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['1', '2', '3+'].map((option) => (
                    <label
                      key={option}
                      className="cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="stories"
                        value={option}
                        checked={formData.stories === option}
                        onChange={(e) => setFormData({ ...formData, stories: e.target.value })}
                        className="sr-only"
                      />
                      <div
                        className="px-4 py-4 rounded-lg text-center transition-all duration-300 font-['Inter']"
                        style={{
                          backgroundColor: formData.stories === option 
                            ? 'var(--color-accent-sky)' 
                            : 'var(--color-bg-white)',
                          border: `2px solid ${formData.stories === option 
                            ? 'var(--color-accent-sky)' 
                            : 'var(--color-border-color)'}`,
                          color: formData.stories === option 
                            ? 'white' 
                            : 'var(--color-text-muted)',
                          fontWeight: 'var(--weight-medium)',
                          boxShadow: formData.stories === option 
                            ? '0 4px 12px rgba(52, 152, 219, 0.3)' 
                            : 'none',
                          minHeight: '48px'
                        }}
                      >
                        {option} {option === '3+' ? 'Stories' : 'Story'}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* System Size */}
              <div className="mb-6">
                <label 
                  htmlFor="systemSize"
                  className="block mb-3 font-['Poppins']"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  System Size *
                </label>
                <select
                  id="systemSize"
                  name="systemSize"
                  value={formData.systemSize}
                  onChange={(e) => setFormData({ ...formData, systemSize: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300"
                  style={{
                    fontSize: '16px',
                    border: '2px solid var(--color-border-color)',
                    color: 'var(--color-text-main)',
                    backgroundColor: 'var(--color-bg-white)'
                  }}
                >
                  <option value="">Select system size</option>
                  <option value="under-15">Under 15 Panels</option>
                  <option value="15-30">15 - 30 Panels</option>
                  <option value="30-plus">30+ Panels</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => goToStep(2)}
                className="w-full px-6 py-4 rounded-lg font-['Poppins'] flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-action-orange)',
                  color: 'white',
                  fontWeight: 'var(--weight-semibold)',
                  fontSize: '18px',
                  boxShadow: '0 4px 12px rgba(242, 140, 40, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(242, 140, 40, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(242, 140, 40, 0.3)';
                }}
              >
                Next Step <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Step 2: Logistics */}
            <div 
              ref={step2Ref}
              className="min-w-full px-2"
              style={{ width: '100%', flexShrink: 0 }}
            >
              <h3 
                className="font-['Poppins'] text-2xl mb-6"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-bold)'
                }}
              >
                Where and when should we arrive?
              </h3>

              {/* Address */}
              <div className="mb-6">
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
                  autoComplete="street-address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="123 Main St, Allen, TX 75002"
                  className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300"
                  style={{
                    fontSize: '16px',
                    border: '2px solid var(--color-border-color)',
                    color: 'var(--color-text-main)',
                    backgroundColor: 'var(--color-bg-white)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent-sky)';
                    e.currentTarget.style.boxShadow = '0 0 0 4px rgba(52, 152, 219, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Preferred Date */}
              <div className="mb-6">
                <label 
                  htmlFor="preferredDate"
                  className="block mb-2 font-['Poppins'] text-sm"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Preferred Date *
                </label>
                <DatePicker
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={(date) => setFormData({ ...formData, preferredDate: date })}
                />
              </div>

              {/* Preferred Time */}
              <div className="mb-6">
                <label 
                  className="block mb-3 font-['Poppins']"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Preferred Time *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'morning', label: 'Morning' },
                    { value: 'afternoon', label: 'Afternoon' },
                    { value: 'anytime', label: 'Anytime' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="preferredTime"
                        value={option.value}
                        checked={formData.preferredTime === option.value}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="sr-only"
                      />
                      <div
                        className="px-4 py-4 rounded-lg text-center transition-all duration-300 font-['Inter']"
                        style={{
                          backgroundColor: formData.preferredTime === option.value 
                            ? 'var(--color-accent-sky)' 
                            : 'var(--color-bg-white)',
                          border: `2px solid ${formData.preferredTime === option.value 
                            ? 'var(--color-accent-sky)' 
                            : 'var(--color-border-color)'}`,
                          color: formData.preferredTime === option.value 
                            ? 'white' 
                            : 'var(--color-text-muted)',
                          fontWeight: 'var(--weight-medium)',
                          boxShadow: formData.preferredTime === option.value 
                            ? '0 4px 12px rgba(52, 152, 219, 0.3)' 
                            : 'none',
                          minHeight: '48px'
                        }}
                      >
                        {option.label}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => goToStep(1)}
                  className="px-6 py-4 rounded-lg font-['Poppins'] flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-bg-gray)',
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)',
                    fontSize: '18px',
                    border: '2px solid var(--color-border-color)'
                  }}
                >
                  <ChevronLeft className="w-5 h-5" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => goToStep(3)}
                  className="flex-1 px-6 py-4 rounded-lg font-['Poppins'] flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-action-orange)',
                    color: 'white',
                    fontWeight: 'var(--weight-semibold)',
                    fontSize: '18px',
                    boxShadow: '0 4px 12px rgba(242, 140, 40, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(242, 140, 40, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(242, 140, 40, 0.3)';
                  }}
                >
                  Next Step <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Step 3: Contact Info */}
            <div 
              ref={step3Ref}
              className="min-w-full px-2"
              style={{ width: '100%', flexShrink: 0 }}
            >
              <h3 
                className="font-['Poppins'] text-2xl mb-6"
                style={{ 
                  color: 'var(--color-primary-navy)',
                  fontWeight: 'var(--weight-bold)'
                }}
              >
                Who should we send the quote to?
              </h3>

              {/* Full Name */}
              <div className="mb-6">
                <label 
                  htmlFor="fullName"
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
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300"
                  style={{
                    fontSize: '16px',
                    border: '2px solid var(--color-border-color)',
                    color: 'var(--color-text-main)',
                    backgroundColor: 'var(--color-bg-white)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent-sky)';
                    e.currentTarget.style.boxShadow = '0 0 0 4px rgba(52, 152, 219, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Email */}
              <div className="mb-6">
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
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300"
                  style={{
                    fontSize: '16px',
                    border: '2px solid var(--color-border-color)',
                    color: 'var(--color-text-main)',
                    backgroundColor: 'var(--color-bg-white)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent-sky)';
                    e.currentTarget.style.boxShadow = '0 0 0 4px rgba(52, 152, 219, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
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
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300"
                  style={{
                    fontSize: '16px',
                    border: '2px solid var(--color-border-color)',
                    color: 'var(--color-text-main)',
                    backgroundColor: 'var(--color-bg-white)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent-sky)';
                    e.currentTarget.style.boxShadow = '0 0 0 4px rgba(52, 152, 219, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Additional Details */}
              <div className="mb-6">
                <label 
                  htmlFor="additionalDetails"
                  className="block mb-2 font-['Poppins'] text-sm"
                  style={{ 
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Additional Details (Optional)
                </label>
                <textarea
                  id="additionalDetails"
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                  placeholder="e.g., Bird nests, heavy pollen, gate code"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg font-['Inter'] transition-all duration-300 resize-none"
                  style={{
                    fontSize: '16px',
                    border: '2px solid var(--color-border-color)',
                    color: 'var(--color-text-main)',
                    backgroundColor: 'var(--color-bg-white)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent-sky)';
                    e.currentTarget.style.boxShadow = '0 0 0 4px rgba(52, 152, 219, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* A2P Compliance Checkboxes */}
              <div 
                className="mb-6 p-4 rounded-lg flex flex-col gap-4"
                style={{
                  backgroundColor: 'rgba(52, 152, 219, 0.05)',
                  border: '1px solid var(--color-border-color)'
                }}
              >
                {/* Transactional SMS */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsOptinTransactional"
                    checked={formData.smsOptinTransactional}
                    onChange={(e) => setFormData({ ...formData, smsOptinTransactional: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded border-2 transition-all duration-200 relative mt-0.5 peer-checked:bg-sky-500 peer-checked:border-sky-500"
                    style={{
                      backgroundColor: formData.smsOptinTransactional ? 'var(--color-accent-sky)' : 'white',
                      borderColor: formData.smsOptinTransactional ? 'var(--color-accent-sky)' : 'var(--color-border-color)'
                    }}
                  >
                    {formData.smsOptinTransactional && (
                      <svg className="w-4 h-4 absolute top-0.5 left-0.5" viewBox="0 0 16 16" fill="white">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    )}
                  </div>
                  <span 
                    className="font-['Inter'] text-xs leading-relaxed"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    By checking this box, I consent to receive non-marketing text messages from <strong style={{ color: 'var(--color-text-main)', fontWeight: 'var(--weight-semibold)' }}>Power Up Solar Cleaning</strong> about <strong style={{ color: 'var(--color-text-main)', fontWeight: 'var(--weight-semibold)' }}>scheduling, appointment reminders, and service updates</strong>. Message frequency varies, message & data rates may apply. Text HELP for assistance, reply STOP to opt out. *
                  </span>
                </label>

                {/* Marketing SMS */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsOptinMarketing"
                    checked={formData.smsOptinMarketing}
                    onChange={(e) => setFormData({ ...formData, smsOptinMarketing: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded border-2 transition-all duration-200 relative mt-0.5"
                    style={{
                      backgroundColor: formData.smsOptinMarketing ? 'var(--color-accent-sky)' : 'white',
                      borderColor: formData.smsOptinMarketing ? 'var(--color-accent-sky)' : 'var(--color-border-color)'
                    }}
                  >
                    {formData.smsOptinMarketing && (
                      <svg className="w-4 h-4 absolute top-0.5 left-0.5" viewBox="0 0 16 16" fill="white">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    )}
                  </div>
                  <span 
                    className="font-['Inter'] text-xs leading-relaxed"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    By checking this box, I consent to receive marketing and promotional messages including special offers, discounts, new product updates among others from <strong style={{ color: 'var(--color-text-main)', fontWeight: 'var(--weight-semibold)' }}>Power Up Solar Cleaning</strong> at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
                  </span>
                </label>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => goToStep(2)}
                  className="px-6 py-4 rounded-lg font-['Poppins'] flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-bg-gray)',
                    color: 'var(--color-primary-navy)',
                    fontWeight: 'var(--weight-semibold)',
                    fontSize: '18px',
                    border: '2px solid var(--color-border-color)'
                  }}
                >
                  <ChevronLeft className="w-5 h-5" /> Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-4 rounded-lg font-['Poppins'] flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    backgroundColor: isSubmitting ? '#999' : 'var(--color-action-orange)',
                    color: 'white',
                    fontWeight: 'var(--weight-semibold)',
                    fontSize: '18px',
                    boxShadow: '0 4px 12px rgba(242, 140, 40, 0.3)',
                    opacity: isSubmitting ? 0.7 : 1,
                    pointerEvents: isSubmitting ? 'none' : 'auto'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(242, 140, 40, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(242, 140, 40, 0.3)';
                    }
                  }}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Get My Free Local Quote
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Hide SR-only class globally */}
      <style>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </div>
  );
}