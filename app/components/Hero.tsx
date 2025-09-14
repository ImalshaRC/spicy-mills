'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';

const Hero = () => {
  const [currentCrop, setCurrentCrop] = useState(0);
  const crops = ['Tea', 'Rubber', 'Coconut', 'Cinnamon', 'Oil Palm', 'Forestry'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCrop((prev) => (prev + 1) % crops.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2322c55e%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-green-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-400 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main heading */}
          <ScrollAnimation animation="fadeInUp" delay={0}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span className="block">Vivonta</span>
              <span className="block gradient-text">Green Tech Consultants</span>
            </h1>
          </ScrollAnimation>

          {/* Subtitle */}
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-4 font-light">
              Your Premier Destination for Fulfilling the Entire Spectrum of
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-8 font-light">
              Core Value Chain Requirements in Sri Lankan Plantation Agriculture
            </p>
          </ScrollAnimation>

          {/* Crops showcase */}
          <ScrollAnimation animation="fadeInUp" delay={400}>
            <div className="mb-12">
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <span className="text-lg text-gray-600">Solutions for</span>
                <div className="flex flex-wrap justify-center gap-3">
                  {crops.map((crop, index) => (
                    <span
                      key={crop}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                        index === currentCrop
                          ? 'bg-green-600 text-white transform scale-110 shadow-lg'
                          : 'bg-white text-gray-700 border border-gray-200 hover:border-green-300'
                      }`}
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Services preview */}
          <ScrollAnimation animation="fadeInUp" delay={600}>
            <div className="mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">What We Do</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Plantation Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Land & Crop Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Marketing Services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Agri-Input Supply</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Equipment Services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Agribusiness Consulting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Entrepreneurship Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>And More...</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* CTA Buttons */}
          <ScrollAnimation animation="fadeInUp" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="btn-primary text-lg px-8 py-4 hover-lift"
              >
                Get Started Today
              </Link>
              <Link
                href="#services"
                className="btn-outline text-lg px-8 py-4 hover-lift"
              >
                Explore Services
              </Link>
            </div>
          </ScrollAnimation>

          {/* Stats */}
          <ScrollAnimation animation="fadeInUp" delay={1000}>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
