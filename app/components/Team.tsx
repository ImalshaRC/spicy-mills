'use client';

import { useState } from 'react';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(0);

  const teamMembers = [
    {
      name: "Prof. S.P. Nissanka",
      title: "Founder & Lead Consultant",
      specialization: "Plantation Agriculture & Research",
      experience: "25+ years",
      description: "Renowned expert in plantation agriculture with extensive research background and industry leadership.",
      achievements: [
        "Published 50+ research papers",
        "Led 100+ agricultural projects",
        "International recognition in tea cultivation",
        "Mentored 200+ agricultural professionals"
      ],
      image: "👨‍🏫",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Dr. Sunil Jayantha Nawarathne",
      title: "Senior Agricultural Consultant",
      specialization: "Crop Management & Technology",
      experience: "20+ years",
      description: "Expert in modern agricultural technologies and sustainable farming practices.",
      achievements: [
        "PhD in Agricultural Sciences",
        "Technology integration specialist",
        "Sustainable farming advocate",
        "International project experience"
      ],
      image: "👨‍🔬",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Prof. Ajantha S. Dharmasiri",
      title: "Strategic Planning Expert",
      specialization: "Business Strategy & Development",
      experience: "22+ years",
      description: "Strategic planning specialist with expertise in agricultural business development and market analysis.",
      achievements: [
        "Strategic planning expert",
        "Market analysis specialist",
        "Business development leader",
        "International consulting experience"
      ],
      image: "👨‍💼",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Dr. W G Somarathne",
      title: "Research & Development Director",
      specialization: "Agricultural Research & Innovation",
      experience: "18+ years",
      description: "Leading research initiatives in sustainable agriculture and innovative farming techniques.",
      achievements: [
        "Research & development leader",
        "Innovation specialist",
        "Sustainable agriculture expert",
        "Academic publications"
      ],
      image: "👨‍🔬",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Attorney-at-Law Mangala A Niyarepola",
      title: "Legal Affairs Director",
      specialization: "Agricultural Law & Compliance",
      experience: "15+ years",
      description: "Legal expert specializing in agricultural law, compliance, and business protection.",
      achievements: [
        "Qualified in England & Wales",
        "Agricultural law specialist",
        "Compliance expert",
        "International legal experience"
      ],
      image: "👨‍⚖️",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Mr. Dyan Seneviratne",
      title: "Operations Director",
      specialization: "Operations & Management",
      experience: "20+ years",
      description: "Operations specialist with extensive experience in plantation management and operational excellence.",
      achievements: [
        "Operations management expert",
        "Process optimization specialist",
        "Team leadership experience",
        "Efficiency improvement expert"
      ],
      image: "👨‍💼",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      name: "Mr. Indra Rupasingha",
      title: "Marketing & Business Development",
      specialization: "Marketing & Sales",
      experience: "16+ years",
      description: "Marketing expert with deep understanding of agricultural markets and business development.",
      achievements: [
        "Marketing strategy expert",
        "Business development specialist",
        "Market analysis expert",
        "Client relationship management"
      ],
      image: "👨‍💼",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      name: "Dr. Rudy Fernandez",
      title: "International Relations Director",
      specialization: "Global Partnerships & Trade",
      experience: "19+ years",
      description: "International relations expert with extensive experience in global agricultural partnerships and trade.",
      achievements: [
        "International partnerships expert",
        "Global trade specialist",
        "Cross-cultural communication",
        "International project management"
      ],
      image: "👨‍🌍",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our distinguished panel of consultants, each bringing decades of expertise and specialized knowledge to drive your agricultural success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover-lift cursor-pointer transition-all duration-300 border-2 ${
                selectedMember === index 
                  ? 'border-green-500 shadow-xl transform scale-105' 
                  : 'border-transparent hover:border-green-200'
              }`}
              onClick={() => setSelectedMember(index)}
            >
              <div className="p-6 text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-3xl mx-auto mb-4`}>
                  {member.image}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium text-sm mb-2">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {member.specialization}
                </p>
                <div className="text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1 inline-block">
                  {member.experience}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Member Details */}
        <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${teamMembers[selectedMember].color} flex items-center justify-center text-4xl mb-6`}>
                {teamMembers[selectedMember].image}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {teamMembers[selectedMember].name}
              </h3>
              <p className="text-xl text-green-600 font-medium mb-4">
                {teamMembers[selectedMember].title}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {teamMembers[selectedMember].description}
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-sm text-gray-600">Experience</span>
                  <div className="font-bold text-green-600">{teamMembers[selectedMember].experience}</div>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-sm text-gray-600">Specialization</span>
                  <div className="font-bold text-gray-900 text-sm">{teamMembers[selectedMember].specialization}</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h4>
              <div className="space-y-4">
                {teamMembers[selectedMember].achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">8+</div>
            <div className="text-gray-600">Expert Consultants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
            <div className="text-gray-600">Combined Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Research Publications</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Work with Our Expert Team
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Get personalized consultation from our world-class agricultural experts
            </p>
            <button className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
