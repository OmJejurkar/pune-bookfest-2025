'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Speaker {
  _id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  featured: boolean;
  order: number;
}

const Speakers: React.FC = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSpeakers();
  }, []);

  const fetchSpeakers = async () => {
    try {
      const response = await fetch('/api/speakers');
      if (!response.ok) {
        throw new Error('Failed to fetch speakers');
      }
      const data = await response.json();
      setSpeakers(data.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      // Fallback to static data for demo
      setSpeakers([
        {
          _id: '1',
          name: "Dr. Vikram Seth",
          title: "Novelist & Poet",
          bio: "Award-winning author of 'A Suitable Boy' and 'The Golden Gate'",
          image: "/bookfest-logo.png",
          social: {
            twitter: "#",
            facebook: "#",
            instagram: "#"
          },
          featured: true,
          order: 1
        },
        {
          _id: '2',
          name: "Chetan Bhagat",
          title: "Bestselling Author",
          bio: "Contemporary fiction writer and motivational speaker",
          image: "/bookfest-logo.png",
          social: {
            twitter: "#",
            facebook: "#",
            instagram: "#"
          },
          featured: true,
          order: 2
        },
        {
          _id: '3',
          name: "Anita Desai",
          title: "Literary Fiction Writer",
          bio: "Booker Prize nominee and acclaimed Indian author",
          image: "/bookfest-logo.png",
          social: {
            twitter: "#",
            facebook: "#",
            instagram: "#"
          },
          featured: false,
          order: 3
        },
        {
          _id: '4',
          name: "Ruskin Bond",
          title: "Children's Author",
          bio: "Beloved storyteller and Sahitya Akademi Award winner",
          image: "/bookfest-logo.png",
          social: {
            twitter: "#",
            facebook: "#",
            instagram: "#"
          },
          featured: true,
          order: 4
        },
        {
          _id: '5',
          name: "Amish Tripathi",
          title: "Mythological Fiction",
          bio: "Author of the bestselling Shiva Trilogy",
          image: "/bookfest-logo.png",
          social: {
            twitter: "#",
            facebook: "#",
            instagram: "#"
          },
          featured: false,
          order: 5
        },
        {
          _id: '6',
          name: "Sudha Murty",
          title: "Social Worker & Author",
          bio: "Philanthropist and acclaimed writer of inspiring stories",
          image: "/bookfest-logo.png",
          social: {
            twitter: "#",
            facebook: "#",
            instagram: "#"
          },
          featured: true,
          order: 6
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="speakers" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading speakers...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="speakers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Speakers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the literary luminaries who will grace our festival
          </p>
        </div>
        
        {error && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded mb-8">
            <p>Note: Using demo data as API is not connected yet.</p>
          </div>
        )}
        
        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {speakers.map((speaker) => (
            <div 
              key={speaker._id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative group">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-4">
                    {speaker.social.twitter && (
                      <Link 
                        href={speaker.social.twitter} 
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                        aria-label="Twitter"
                      >
                        <span className="text-white text-xl">🐦</span>
                      </Link>
                    )}
                    {speaker.social.facebook && (
                      <Link 
                        href={speaker.social.facebook} 
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                        aria-label="Facebook"
                      >
                        <span className="text-white text-xl">📘</span>
                      </Link>
                    )}
                    {speaker.social.instagram && (
                      <Link 
                        href={speaker.social.instagram} 
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                        aria-label="Instagram"
                      >
                        <span className="text-white text-xl">📸</span>
                      </Link>
                    )}
                  </div>
                </div>
                {speaker.featured && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {speaker.name}
                </h3>
                <p className="text-orange-600 font-semibold mb-3">
                  {speaker.title}
                </p>
                <p className="text-gray-600 line-clamp-3">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Want to be a Speaker?</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Join our community of literary voices and share your story with thousands of book lovers.
          </p>
          <Link 
            href="#contact" 
            className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
          >
            Apply to Speak
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Speakers;