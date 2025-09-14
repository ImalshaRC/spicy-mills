'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Our Services', href: '#services' },
      { name: 'Contact Us', href: '#contact' }
    ],
    services: [
      { name: 'Plantation Management', href: '#services' },
      { name: 'Eco-Tourism Development', href: '#services' },
      { name: 'Agricultural Research', href: '#services' },
      { name: 'Legal Support', href: '#services' },
      { name: 'Digital Solutions', href: '#services' },
      { name: 'Global Education', href: '#services' }
    ],
    resources: [
      { name: 'Downloads', href: '#' },
      { name: 'Vivonta Blog', href: '#' },
      { name: 'Gallery', href: '#' },
      { name: 'Join Us', href: '#' },
      { name: 'PPA Update', href: '#' },
      { name: 'Coconut Crisis Audit 2024', href: '#' }
    ],
    crops: [
      { name: 'Tea', href: '#services' },
      { name: 'Rubber', href: '#services' },
      { name: 'Coconut', href: '#services' },
      { name: 'Cinnamon', href: '#services' },
      { name: 'Oil Palm', href: '#services' },
      { name: 'Forestry', href: '#services' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'YouTube', href: '#', icon: '📺' },
    { name: 'WhatsApp', href: '#', icon: '💬' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Vivonta</h3>
                <p className="text-gray-400 text-sm">Green Tech Consultants</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your Premier Destination for Fulfilling the Entire Spectrum of Core Value Chain Requirements in Sri Lankan Plantation Agriculture.
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center space-x-2">
                <span>📧</span>
                <span>info@vivonta.lk</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>📞</span>
                <span>+94 11 234 5678</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>📍</span>
                <span>Colombo, Sri Lanka</span>
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Crops */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-6">Our Crops</h4>
            <ul className="space-y-3">
              {footerLinks.crops.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest agricultural insights and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-2xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              <p>© {currentYear} Vivonta Green Tech Consultants (Pvt) Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>Website by ASaNi | Greening the future of perennial agriculture</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-green-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
