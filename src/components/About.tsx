import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About the Festival
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the magic of literature at India&apos;s largest book festival
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              World&apos;s Largest Book Festival
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Pune Book Festival stands as a testament to India&apos;s rich literary heritage and 
              vibrant reading culture. Since its inception, we have grown to become the world&apos;s 
              largest book festival, attracting over 10 lakh visitors annually.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our festival serves as a bridge between authors and readers, publishers and book lovers, 
              creating an ecosystem where literature thrives. From bestselling authors to emerging voices, 
              from academic texts to popular fiction, we celebrate every form of written word.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold text-orange-600">₹40+ Cr</h4>
                <p className="text-gray-600 font-medium">Book Sales</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold text-orange-600">10</h4>
                <p className="text-gray-600 font-medium">Festival Days</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold text-orange-600">10+</h4>
                <p className="text-gray-600 font-medium">Languages</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <Image 
                src="/bookfest-logo.png" 
                alt="Book Festival" 
                width={400}
                height={400}
                className="rounded-lg shadow-2xl"
                style={{ width: 'auto', height: '400px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Why Attend Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Punekars Love Pune Book Festival
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Meet Renowned Authors
              </h4>
              <p className="text-gray-600">
                Get up close with bestselling authors, poets, and literary personalities. Attend book signings and interactive sessions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Engaging Reading Sessions
              </h4>
              <p className="text-gray-600">
                Participate in storytelling sessions, poetry readings, and book discussions across multiple languages and genres.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Literary Treasure Hunt
              </h4>
              <p className="text-gray-600">
                Join our exciting treasure hunt with literary clues, book-themed challenges, and amazing prizes for participants.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">👶</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Children&apos;s Corner
              </h4>
              <p className="text-gray-600">
                Special activities for young readers including storytelling, puppet shows, and interactive workshops designed for kids.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎭</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Cultural Performances
              </h4>
              <p className="text-gray-600">
                Enjoy literary-themed performances, poetry recitations, and cultural programs celebrating the art of storytelling.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🛍️</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Book Shopping
              </h4>
              <p className="text-gray-600">
                Browse through extensive book stalls featuring the latest releases, classics, and rare finds at special festival prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;