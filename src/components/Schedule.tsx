'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ScheduleEvent {
  _id?: string;
  day: number;
  time: string;
  title: string;
  speaker: string;
  venue: string;
  type: 'ceremony' | 'talk' | 'workshop' | 'signing' | 'performance' | 'panel' | 'launch' | 'activity' | 'meet';
  description?: string;
  duration?: number;
  order: number;
}

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [scheduleData, setScheduleData] = useState<Record<number, ScheduleEvent[]>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSchedule();
  }, []);

  const fetchSchedule = async () => {
    try {
      const response = await fetch('/api/schedule');
      if (!response.ok) {
        throw new Error('Failed to fetch schedule');
      }
      const data = await response.json();
      setScheduleData(data.data || {});
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      // Fallback to static data
      setScheduleData({
        1: [
          {
            time: "09:00 AM",
            title: "Festival Opening Ceremony",
            speaker: "Chief Guest Address",
            venue: "Main Auditorium",
            type: "ceremony",
            day: 1,
            order: 1
          },
          {
            time: "10:30 AM",
            title: "The Future of Indian Literature",
            speaker: "Dr. Vikram Seth",
            venue: "Hall A",
            type: "talk",
            day: 1,
            order: 2
          },
          {
            time: "12:00 PM",
            title: "Children's Storytelling Session",
            speaker: "Ruskin Bond",
            venue: "Children's Corner",
            type: "workshop",
            day: 1,
            order: 3
          },
          {
            time: "02:00 PM",
            title: "Book Signing & Meet the Author",
            speaker: "Chetan Bhagat",
            venue: "Signing Zone",
            type: "signing",
            day: 1,
            order: 4
          },
          {
            time: "04:00 PM",
            title: "Poetry Recitation",
            speaker: "Various Poets",
            venue: "Poetry Corner",
            type: "performance",
            day: 1,
            order: 5
          },
          {
            time: "06:00 PM",
            title: "Panel Discussion: Modern Publishing",
            speaker: "Publishing Experts",
            venue: "Conference Hall",
            type: "panel",
            day: 1,
            order: 6
          }
        ],
        2: [
          {
            time: "09:30 AM",
            title: "Writing Workshop: Fiction Techniques",
            speaker: "Anita Desai",
            venue: "Workshop Room 1",
            type: "workshop",
            day: 2,
            order: 1
          },
          {
            time: "11:00 AM",
            title: "Mythology in Modern Literature",
            speaker: "Amish Tripathi",
            venue: "Hall B",
            type: "talk",
            day: 2,
            order: 2
          },
          {
            time: "01:00 PM",
            title: "Book Launch: New Releases",
            speaker: "Multiple Authors",
            venue: "Launch Pad",
            type: "launch",
            day: 2,
            order: 3
          },
          {
            time: "03:00 PM",
            title: "Literary Treasure Hunt",
            speaker: "Festival Team",
            venue: "Entire Venue",
            type: "activity",
            day: 2,
            order: 4
          },
          {
            time: "05:00 PM",
            title: "Cultural Performance",
            speaker: "Local Artists",
            venue: "Main Stage",
            type: "performance",
            day: 2,
            order: 5
          }
        ],
        3: [
          {
            time: "10:00 AM",
            title: "Social Impact Through Literature",
            speaker: "Sudha Murty",
            venue: "Hall A",
            type: "talk",
            day: 3,
            order: 1
          },
          {
            time: "12:00 PM",
            title: "Teen Authors Meet & Greet",
            speaker: "Young Writers",
            venue: "Youth Zone",
            type: "meet",
            day: 3,
            order: 2
          },
          {
            time: "02:30 PM",
            title: "Book Reading Marathon",
            speaker: "Community Readers",
            venue: "Reading Garden",
            type: "activity",
            day: 3,
            order: 3
          },
          {
            time: "04:30 PM",
            title: "Publishing Your First Book",
            speaker: "Publishing Panel",
            venue: "Workshop Room 2",
            type: "workshop",
            day: 3,
            order: 4
          },
          {
            time: "07:00 PM",
            title: "Festival Closing Ceremony",
            speaker: "All Participants",
            venue: "Main Auditorium",
            type: "ceremony",
            day: 3,
            order: 5
          }
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  const getEventTypeIcon = (type: string): string => {
    const icons: Record<string, string> = {
      ceremony: "🎉",
      talk: "🎤",
      workshop: "🛠️",
      signing: "✍️",
      performance: "🎭",
      panel: "👥",
      launch: "🚀",
      activity: "🎯",
      meet: "🤝"
    };
    return icons[type] || "📚";
  };

  const getEventTypeColor = (type: string): string => {
    const colors: Record<string, string> = {
      ceremony: "bg-purple-100 text-purple-800 border-purple-200",
      talk: "bg-blue-100 text-blue-800 border-blue-200",
      workshop: "bg-green-100 text-green-800 border-green-200",
      signing: "bg-orange-100 text-orange-800 border-orange-200",
      performance: "bg-pink-100 text-pink-800 border-pink-200",
      panel: "bg-indigo-100 text-indigo-800 border-indigo-200",
      launch: "bg-red-100 text-red-800 border-red-200",
      activity: "bg-yellow-100 text-yellow-800 border-yellow-200",
      meet: "bg-teal-100 text-teal-800 border-teal-200"
    };
    return colors[type] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  if (loading) {
    return (
      <section id="schedule" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading schedule...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="schedule" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Event Schedule
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our exciting lineup of events throughout the festival
          </p>
        </div>

        {error && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded mb-8">
            <p>Note: Using demo data as API is not connected yet.</p>
          </div>
        )}

        {/* Day Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[1, 2, 3].map((day) => (
            <button
              key={day}
              className={`px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                activeDay === day
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md'
              }`}
              onClick={() => setActiveDay(day)}
            >
              <div className="text-lg">Day {day}</div>
              <div className="text-sm opacity-75">
                May {day}, 2025
              </div>
            </button>
          ))}
        </div>

        {/* Schedule Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="space-y-6">
              {scheduleData[activeDay]?.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="md:w-32 flex-shrink-0">
                    <div className="text-2xl font-bold text-orange-600">
                      {event.time}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">
                        {getEventTypeIcon(event.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <span className="flex items-center text-gray-600">
                            <span className="mr-2">👤</span>
                            {event.speaker}
                          </span>
                          <span className="flex items-center text-gray-600">
                            <span className="mr-2">📍</span>
                            {event.venue}
                          </span>
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getEventTypeColor(event.type)}`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Download Complete Schedule</h3>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Get the full 9-day festival schedule with all events and timings
            </p>
            <Link
              href="#"
              className="inline-flex items-center bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
            >
              <span className="mr-2">📥</span>
              Download PDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;