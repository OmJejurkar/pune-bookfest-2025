'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  category: string;
  image: string;
  title: string;
  description?: string;
}

interface Filter {
  key: string;
  label: string;
}

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    { id: 1, category: 'events', image: '/bookfest-logo.png', title: 'Opening Ceremony 2024', description: 'Grand opening with thousands of book lovers' },
    { id: 2, category: 'speakers', image: '/bookfest-logo.png', title: 'Author Sessions', description: 'Inspiring talks by renowned authors' },
    { id: 3, category: 'workshops', image: '/bookfest-logo.png', title: 'Writing Workshop', description: 'Interactive writing sessions for all levels' },
    { id: 4, category: 'events', image: '/bookfest-logo.png', title: 'Book Signing Event', description: 'Meet your favorite authors up close' },
    { id: 5, category: 'cultural', image: '/bookfest-logo.png', title: 'Cultural Performance', description: 'Literary-themed cultural programs' },
    { id: 6, category: 'workshops', image: '/bookfest-logo.png', title: 'Children Corner', description: 'Special activities for young readers' },
    { id: 7, category: 'cultural', image: '/bookfest-logo.png', title: 'Poetry Recitation', description: 'Beautiful poetry sessions in multiple languages' },
    { id: 8, category: 'speakers', image: '/bookfest-logo.png', title: 'Panel Discussion', description: 'Expert panels on publishing and literature' },
    { id: 9, category: 'events', image: '/bookfest-logo.png', title: 'Literary Treasure Hunt', description: 'Fun activities with literary clues and prizes' }
  ];

  const filters: Filter[] = [
    { key: 'all', label: 'All' },
    { key: 'events', label: 'Events' },
    { key: 'speakers', label: 'Speakers' },
    { key: 'workshops', label: 'Workshops' },
    { key: 'cultural', label: 'Cultural' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Relive the magical moments from our previous festivals
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md'
              }`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm opacity-90">{item.description}</p>
                    )}
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
                    <span className="text-white text-xl">🔍</span>
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.category === 'events' ? 'bg-blue-500 text-white' :
                    item.category === 'speakers' ? 'bg-green-500 text-white' :
                    item.category === 'workshops' ? 'bg-purple-500 text-white' :
                    'bg-pink-500 text-white'
                  }`}>
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Share Your Festival Moments</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Use our hashtags and share your experience with the book-loving community
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold hover:bg-white/30 transition-colors cursor-pointer">
              #PuneBookFestival
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold hover:bg-white/30 transition-colors cursor-pointer">
              #MyBookMyStory
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold hover:bg-white/30 transition-colors cursor-pointer">
              #BookLovers
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold hover:bg-white/30 transition-colors cursor-pointer">
              #LiteratureFest
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;