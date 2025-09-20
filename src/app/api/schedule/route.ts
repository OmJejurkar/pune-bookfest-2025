import { NextRequest, NextResponse } from 'next/server';

// Sample schedule data (in a real app, this would come from MongoDB)
const scheduleData = {
  1: [
    {
      _id: '1-1',
      day: 1,
      time: "09:00 AM",
      title: "Festival Opening Ceremony",
      speaker: "Chief Guest Address",
      venue: "Main Auditorium",
      type: "ceremony",
      order: 1
    },
    {
      _id: '1-2',
      day: 1,
      time: "10:30 AM",
      title: "The Future of Indian Literature",
      speaker: "Dr. Vikram Seth",
      venue: "Hall A",
      type: "talk",
      order: 2
    },
    {
      _id: '1-3',
      day: 1,
      time: "12:00 PM",
      title: "Children's Storytelling Session",
      speaker: "Ruskin Bond",
      venue: "Children's Corner",
      type: "workshop",
      order: 3
    },
    {
      _id: '1-4',
      day: 1,
      time: "02:00 PM",
      title: "Book Signing & Meet the Author",
      speaker: "Chetan Bhagat",
      venue: "Signing Zone",
      type: "signing",
      order: 4
    },
    {
      _id: '1-5',
      day: 1,
      time: "04:00 PM",
      title: "Poetry Recitation",
      speaker: "Various Poets",
      venue: "Poetry Corner",
      type: "performance",
      order: 5
    },
    {
      _id: '1-6',
      day: 1,
      time: "06:00 PM",
      title: "Panel Discussion: Modern Publishing",
      speaker: "Publishing Experts",
      venue: "Conference Hall",
      type: "panel",
      order: 6
    }
  ],
  2: [
    {
      _id: '2-1',
      day: 2,
      time: "09:30 AM",
      title: "Writing Workshop: Fiction Techniques",
      speaker: "Anita Desai",
      venue: "Workshop Room 1",
      type: "workshop",
      order: 1
    },
    {
      _id: '2-2',
      day: 2,
      time: "11:00 AM",
      title: "Mythology in Modern Literature",
      speaker: "Amish Tripathi",
      venue: "Hall B",
      type: "talk",
      order: 2
    },
    {
      _id: '2-3',
      day: 2,
      time: "01:00 PM",
      title: "Book Launch: New Releases",
      speaker: "Multiple Authors",
      venue: "Launch Pad",
      type: "launch",
      order: 3
    },
    {
      _id: '2-4',
      day: 2,
      time: "03:00 PM",
      title: "Literary Treasure Hunt",
      speaker: "Festival Team",
      venue: "Entire Venue",
      type: "activity",
      order: 4
    },
    {
      _id: '2-5',
      day: 2,
      time: "05:00 PM",
      title: "Cultural Performance",
      speaker: "Local Artists",
      venue: "Main Stage",
      type: "performance",
      order: 5
    }
  ],
  3: [
    {
      _id: '3-1',
      day: 3,
      time: "10:00 AM",
      title: "Social Impact Through Literature",
      speaker: "Sudha Murty",
      venue: "Hall A",
      type: "talk",
      order: 1
    },
    {
      _id: '3-2',
      day: 3,
      time: "12:00 PM",
      title: "Teen Authors Meet & Greet",
      speaker: "Young Writers",
      venue: "Youth Zone",
      type: "meet",
      order: 2
    },
    {
      _id: '3-3',
      day: 3,
      time: "02:30 PM",
      title: "Book Reading Marathon",
      speaker: "Community Readers",
      venue: "Reading Garden",
      type: "activity",
      order: 3
    },
    {
      _id: '3-4',
      day: 3,
      time: "04:30 PM",
      title: "Publishing Your First Book",
      speaker: "Publishing Panel",
      venue: "Workshop Room 2",
      type: "workshop",
      order: 4
    },
    {
      _id: '3-5',
      day: 3,
      time: "07:00 PM",
      title: "Festival Closing Ceremony",
      speaker: "All Participants",
      venue: "Main Auditorium",
      type: "ceremony",
      order: 5
    }
  ]
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const day = searchParams.get('day');
    
    if (day) {
      const dayNumber = parseInt(day);
      const dayEvents = scheduleData[dayNumber as keyof typeof scheduleData] || [];
      
      return NextResponse.json({
        success: true,
        count: dayEvents.length,
        data: dayEvents
      });
    }
    
    // Return all days grouped
    return NextResponse.json({
      success: true,
      count: Object.values(scheduleData).flat().length,
      data: scheduleData
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Error fetching schedule',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}