'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    mobile: '',
    landline: '',
    email: '',
    preferredTime: '',
    address: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        business: '',
        mobile: '',
        landline: '',
        email: '',
        preferredTime: '',
        address: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      details: "info@ceylonhills.lk",
      description: "Send us an email anytime"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "Contact us for details",
      description: "Mon-Fri 9AM-6PM"
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "Colombo, Sri Lanka",
      description: "Schedule a meeting"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: "Contact us for details",
      description: "Quick response guaranteed"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your agricultural business? Contact our expert team for a personalized consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Submit Your Enquiry
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-600">Your enquiry has been submitted successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <div>
                    <label htmlFor="landline" className="block text-sm font-medium text-gray-700 mb-2">
                      Land Line
                    </label>
                    <input
                      type="tel"
                      id="landline"
                      name="landline"
                      value={formData.landline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your landline number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9AM-12PM)</option>
                      <option value="afternoon">Afternoon (12PM-3PM)</option>
                      <option value="evening">Evening (3PM-6PM)</option>
                      <option value="anytime">Anytime</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Postal Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your complete address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your agricultural needs and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'btn-primary hover-lift'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    'Submit Enquiry'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                  <div className="text-3xl mb-4">{info.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h4>
                  <p className="text-green-600 font-medium mb-1">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Ceylon Hills?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>15+ years of industry experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Expert team of consultants</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Comprehensive service portfolio</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Proven track record of success</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Personalized solutions</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
              <div className="space-y-4">
                <a href="#services" className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Our Services</span>
                </a>
                <a href="#team" className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Meet Our Team</span>
                </a>
                <a href="#about" className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>About Us</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Download Brochure</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
