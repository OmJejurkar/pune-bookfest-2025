import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Sponsor {
  category: string;
  name: string;
  description: string;
  logo: string;
  website?: string;
}

const Sponsors: React.FC = () => {
  const sponsors: Sponsor[] = [
    {
      category: "Government Partner",
      name: "NBT India",
      description: "Official government support for promoting reading culture and literacy across the nation",
      logo: "/ministry-logo.png",
      website: "#"
    },
    {
      category: "Strategic Partner", 
      name: "Samarth Yuva Foundation",
      description: "Empowering youth through education and literature initiatives across Maharashtra",
      logo: "/nbs-logo.png",
      website: "#"
    },
    {
      category: "Education Partner",
      name: "Fergusson College",
      description: "Academic excellence and literary education support for students and faculty",
      logo: "/bookfest-logo.png",
      website: "#"
    },
    {
      category: "Municipal Partner",
      name: "Pune Municipal Corporation",
      description: "Local government support and infrastructure development for the festival",
      logo: "/bookfest-logo.png",
      website: "#"
    },
    {
      category: "Publishing Partner",
      name: "Penguin Random House",
      description: "Leading global publisher supporting literary events and book promotion",
      logo: "/bookfest-logo.png",
      website: "#"
    },
    {
      category: "Media Partner",
      name: "The Hindu",
      description: "Official media coverage and promotion of festival events and activities",
      logo: "/bookfest-logo.png",
      website: "#"
    }
  ];

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      "Government Partner": "bg-blue-100 text-blue-800 border-blue-200",
      "Strategic Partner": "bg-green-100 text-green-800 border-green-200",
      "Education Partner": "bg-purple-100 text-purple-800 border-purple-200",
      "Municipal Partner": "bg-orange-100 text-orange-800 border-orange-200",
      "Publishing Partner": "bg-red-100 text-red-800 border-red-200",
      "Media Partner": "bg-indigo-100 text-indigo-800 border-indigo-200"
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section id="sponsors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Partners & Sponsors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thank you to our amazing partners who make this festival possible
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-lg shadow-md flex items-center justify-center p-4">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={80}
                    height={80}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(sponsor.category)}`}>
                  {sponsor.category}
                </span>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {sponsor.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {sponsor.description}
                </p>
                {sponsor.website && (
                  <Link 
                    href={sponsor.website}
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                  >
                    Visit Website
                    <span className="ml-1">→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Tiers */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Partnership Opportunities
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-8 text-white text-center">
              <div className="text-4xl mb-4">🥇</div>
              <h4 className="text-2xl font-bold mb-4">Platinum Partner</h4>
              <ul className="space-y-2 text-left">
                <li>• Prime logo placement</li>
                <li>• Speaking opportunities</li>
                <li>• VIP hospitality</li>
                <li>• Media interviews</li>
                <li>• Custom activations</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl p-8 text-white text-center">
              <div className="text-4xl mb-4">🥈</div>
              <h4 className="text-2xl font-bold mb-4">Gold Partner</h4>
              <ul className="space-y-2 text-left">
                <li>• Logo on materials</li>
                <li>• Booth space</li>
                <li>• Social media mentions</li>
                <li>• Newsletter inclusion</li>
                <li>• Networking access</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl p-8 text-white text-center">
              <div className="text-4xl mb-4">🥉</div>
              <h4 className="text-2xl font-bold mb-4">Silver Partner</h4>
              <ul className="space-y-2 text-left">
                <li>• Logo recognition</li>
                <li>• Website listing</li>
                <li>• Event tickets</li>
                <li>• Digital certificates</li>
                <li>• Annual reports</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Interested in partnering with us?</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Join us in promoting literacy and literature across India. Let&apos;s create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact" 
              className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
            >
              Become a Partner
            </Link>
            <Link 
              href="#"
              className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-200 transform hover:scale-105"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;