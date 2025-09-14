'use client';

const About = () => {
  const values = [
    {
      title: "Vision Statement",
      content: "At Vivonta, we envision empowering the plantation agriculture sector in Sri Lanka to attain global excellence in plantations by leveraging competitive advantages.",
      icon: "🎯"
    },
    {
      title: "Mission Statement", 
      content: "We commit to excellence in plantation agriculture through a value chain approach, self-management, and ongoing operational excellence assessments.",
      icon: "🚀"
    },
    {
      title: "Unique Selling Proposition",
      content: "Vivonta leads the way in sustainable plantation agriculture with a focus on purposeful value chain management. Our commitment extends to creating an empowering environment for employees, fostering a pleasurable experience where they can recognize and maximize their value and potential.",
      icon: "💎"
    }
  ];

  const features = [
    {
      title: "Comprehensive Value Chain Services",
      description: "End-to-end solutions covering every aspect of plantation agriculture",
      icon: "🔗"
    },
    {
      title: "Expert Team",
      description: "Renowned professionals with decades of combined experience",
      icon: "👥"
    },
    {
      title: "Sustainable Practices",
      description: "Environmentally conscious approaches to agricultural development",
      icon: "🌱"
    },
    {
      title: "Global Reach",
      description: "International partnerships and worldwide agricultural expertise",
      icon: "🌍"
    },
    {
      title: "Innovation Focus",
      description: "Cutting-edge technologies and modern agricultural methods",
      icon: "💡"
    },
    {
      title: "Client Success",
      description: "Proven track record of delivering exceptional results",
      icon: "🏆"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Vivonta
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Your trusted partner in achieving sustainable competitive advantage in the realm of plantation agriculture
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Brief Introduction
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Vivonta Green Tech Consultants (Private) Limited is your trusted partner in achieving sustainable competitive advantage in the realm of plantation agriculture. Specializing in providing comprehensive value chain services, we cater to individuals and organizations interested in establishing or managing plantation agri-businesses in Sri Lanka, as well as those with land-based investments.
              </p>
              <p>
                Our dedicated team, boasting a proven track record of success, is ready to assist local and international agricultural entrepreneurs. Whether you seek professional guidance to enhance your estate or plantation assets, Vivonta stands ready to assist.
              </p>
              <p>
                What sets us apart is our commitment to being a one-stop-shop for all your plantation Agri value chain needs, offering a unique array of services. Connect with us through the "Contact Us" form on our website for a prompt and confidential response. Experience the Vivonta difference today as we work together to shape the future of sustainable agriculture.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Our Specializations
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Tea Plantation Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Rubber Cultivation & Processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Coconut Farming Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Cinnamon Production</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Oil Palm Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Forestry Management</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover-lift">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Makes Us Different
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Partner with Us?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful agricultural businesses that trust Vivonta for their growth and development needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-primary text-lg px-8 py-4 hover-lift"
            >
              Start Your Journey
            </a>
            <a
              href="#services"
              className="btn-outline text-lg px-8 py-4 hover-lift"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
