'use client';

import { useState } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Boosting Agricultural Economic Growth",
      subtitle: "in plantation agriculture",
      description: "Advisory services focused on driving economic growth in the plantation agriculture sector. We optimize core values and supply chains, develop project proposals, conduct investment appraisals, create budgets, plan farms, offer landscape solutions, and provide training and coaching.",
      features: [
        "Supply chain optimization",
        "Project proposal development",
        "Investment appraisals",
        "Farm planning & budgeting",
        "Training & coaching programs",
        "Global trading partnerships"
      ],
      icon: "📈",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Nature-Focused Tourism Development",
      subtitle: "Eco-Tourism Solutions",
      description: "Consulting services specializing in Plantation Eco-Tourism, guiding clients through the entire process from conceptualization to operationalization of various tourism promotional business opportunities.",
      features: [
        "Eco-tourism planning",
        "Business conceptualization",
        "Operational guidance",
        "Marketing strategies",
        "Sustainability practices",
        "Revenue optimization"
      ],
      icon: "🌿",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Agriculture Knowledge and Insights",
      subtitle: "Research & Innovation",
      description: "Consulting services for Plantation Management Research, fostering innovation, sustainability, and growth by providing strategic insights and expert guidance. Emphasizing growth, we conduct visit reports to enhance overall effectiveness.",
      features: [
        "Research & development",
        "Innovation strategies",
        "Sustainability consulting",
        "Visit reports & analysis",
        "Strategic insights",
        "Growth optimization"
      ],
      icon: "🔬",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Comprehensive Legal Support Services",
      subtitle: "Complete Legal Solutions",
      description: "Complete legal solutions guaranteeing compliance, protection, and strategic guidance, fostering a secure and flourishing business environment for agricultural enterprises.",
      features: [
        "Legal compliance",
        "Contract management",
        "Risk assessment",
        "Regulatory guidance",
        "Dispute resolution",
        "Business protection"
      ],
      icon: "⚖️",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Strategic Decision-Making Experts",
      subtitle: "Informed Choices & Impactful Outcomes",
      description: "Informed choices and impactful outcomes guided by expert lobbying, empowering strategic decision-making amidst complexities in the agricultural sector.",
      features: [
        "Strategic planning",
        "Expert lobbying",
        "Decision support",
        "Risk management",
        "Market analysis",
        "Policy guidance"
      ],
      icon: "🎯",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Complete Digital Agriculture Solutions",
      subtitle: "Technology-Driven Growth",
      description: "Nurturing digital solutions to enhance real-time information and efficiency, promoting sustainable growth and success in our interconnected world of agriculture.",
      features: [
        "Digital transformation",
        "Real-time monitoring",
        "Data analytics",
        "IoT solutions",
        "Process automation",
        "Efficiency optimization"
      ],
      icon: "💻",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Connecting Minds Globally through Education",
      subtitle: "Global Educational Excellence",
      description: "Fostering knowledge, diversity, and excellence through our Global Educational programs, connecting agricultural minds worldwide for sustainable development.",
      features: [
        "Global education programs",
        "Knowledge sharing",
        "Cultural exchange",
        "Skill development",
        "International partnerships",
        "Sustainable development"
      ],
      icon: "🌍",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Seven Strategic Consulting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to drive excellence and growth in plantation agriculture
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover-lift cursor-pointer transition-all duration-300 ${
                activeService === index ? 'ring-2 ring-green-500 shadow-xl' : ''
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-green-600 font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${services[activeService].color} flex items-center justify-center text-3xl mb-6`}>
                {services[activeService].icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-xl text-green-600 font-medium mb-6">
                {services[activeService].subtitle}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {services[activeService].description}
              </p>
              <button className="btn-primary text-lg px-8 py-4">
                Learn More
              </button>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Agricultural Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let our expert consultants guide you towards sustainable growth and success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
