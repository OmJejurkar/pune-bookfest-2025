import { NextRequest, NextResponse } from 'next/server';

// Sample speakers data (in a real app, this would come from MongoDB)
const speakersData = [
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
];

export async function GET(request: NextRequest) {
  try {
    // Sort speakers by featured first, then by order
    const sortedSpeakers = speakersData.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.order - b.order;
    });

    return NextResponse.json({
      success: true,
      count: sortedSpeakers.length,
      data: sortedSpeakers
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Error fetching speakers',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}