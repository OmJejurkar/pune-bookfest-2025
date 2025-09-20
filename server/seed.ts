import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Speaker from './models/Speaker';
import ScheduleEvent from './models/ScheduleEvent';
import GalleryImage from './models/GalleryImage';

dotenv.config();

const seedData = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bookfest25';
    await mongoose.connect(mongoURI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Speaker.deleteMany({});
    await ScheduleEvent.deleteMany({});
    await GalleryImage.deleteMany({});
    console.log('🗑️ Cleared existing data');

    // Seed Speakers
    const speakers = [
      {
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

    await Speaker.insertMany(speakers);
    console.log('👥 Seeded speakers');

    // Seed Schedule Events
    const scheduleEvents = [
      // Day 1
      {
        day: 1,
        time: "09:00 AM",
        title: "Festival Opening Ceremony",
        speaker: "Chief Guest Address",
        venue: "Main Auditorium",
        type: "ceremony",
        order: 1
      },
      {
        day: 1,
        time: "10:30 AM", 
        title: "The Future of Indian Literature",
        speaker: "Dr. Vikram Seth",
        venue: "Hall A",
        type: "talk",
        order: 2
      },
      {
        day: 1,
        time: "12:00 PM",
        title: "Children's Storytelling Session",
        speaker: "Ruskin Bond",
        venue: "Children's Corner",
        type: "workshop",
        order: 3
      },
      {
        day: 1,
        time: "02:00 PM",
        title: "Book Signing & Meet the Author",
        speaker: "Chetan Bhagat",
        venue: "Signing Zone",
        type: "signing",
        order: 4
      },
      {
        day: 1,
        time: "04:00 PM",
        title: "Poetry Recitation",
        speaker: "Various Poets",
        venue: "Poetry Corner",
        type: "performance",
        order: 5
      },
      {
        day: 1,
        time: "06:00 PM",
        title: "Panel Discussion: Modern Publishing",
        speaker: "Publishing Experts",
        venue: "Conference Hall",
        type: "panel",
        order: 6
      },
      // Day 2
      {
        day: 2,
        time: "09:30 AM",
        title: "Writing Workshop: Fiction Techniques",
        speaker: "Anita Desai",
        venue: "Workshop Room 1",
        type: "workshop",
        order: 1
      },
      {
        day: 2,
        time: "11:00 AM",
        title: "Mythology in Modern Literature",
        speaker: "Amish Tripathi",
        venue: "Hall B",
        type: "talk",
        order: 2
      },
      {
        day: 2,
        time: "01:00 PM",
        title: "Book Launch: New Releases",
        speaker: "Multiple Authors",
        venue: "Launch Pad",
        type: "launch",
        order: 3
      },
      {
        day: 2,
        time: "03:00 PM",
        title: "Literary Treasure Hunt",
        speaker: "Festival Team",
        venue: "Entire Venue",
        type: "activity",
        order: 4
      },
      {
        day: 2,
        time: "05:00 PM",
        title: "Cultural Performance",
        speaker: "Local Artists",
        venue: "Main Stage",
        type: "performance",
        order: 5
      },
      // Day 3
      {
        day: 3,
        time: "10:00 AM",
        title: "Social Impact Through Literature",
        speaker: "Sudha Murty",
        venue: "Hall A",
        type: "talk",
        order: 1
      },
      {
        day: 3,
        time: "12:00 PM",
        title: "Teen Authors Meet & Greet",
        speaker: "Young Writers",
        venue: "Youth Zone",
        type: "meet",
        order: 2
      },
      {
        day: 3,
        time: "02:30 PM",
        title: "Book Reading Marathon",
        speaker: "Community Readers",
        venue: "Reading Garden",
        type: "activity",
        order: 3
      },
      {
        day: 3,
        time: "04:30 PM",
        title: "Publishing Your First Book",
        speaker: "Publishing Panel",
        venue: "Workshop Room 2",
        type: "workshop",
        order: 4
      },
      {
        day: 3,
        time: "07:00 PM",
        title: "Festival Closing Ceremony",
        speaker: "All Participants",
        venue: "Main Auditorium",
        type: "ceremony",
        order: 5
      }
    ];

    await ScheduleEvent.insertMany(scheduleEvents);
    console.log('📅 Seeded schedule events');

    // Seed Gallery Images
    const galleryImages = [
      {
        title: "Opening Ceremony 2024",
        description: "Grand opening of BookFest 2024 with thousands of attendees",
        imageUrl: "/bookfest-logo.png",
        category: "events",
        year: 2024,
        featured: true,
        order: 1,
        tags: ["opening", "ceremony", "crowd"]
      },
      {
        title: "Author Meet & Greet",
        description: "Popular authors meeting their fans and signing books",
        imageUrl: "/bookfest-logo.png",
        category: "speakers",
        year: 2024,
        featured: true,
        order: 2,
        tags: ["authors", "signing", "fans"]
      },
      {
        title: "Children's Corner",
        description: "Young readers enjoying storytelling sessions",
        imageUrl: "/bookfest-logo.png",
        category: "events",
        year: 2024,
        featured: false,
        order: 3,
        tags: ["children", "storytelling", "education"]
      },
      {
        title: "Book Stalls",
        description: "Hundreds of book stalls showcasing diverse literature",
        imageUrl: "/bookfest-logo.png",
        category: "venue",
        year: 2024,
        featured: true,
        order: 4,
        tags: ["books", "stalls", "shopping"]
      }
    ];

    await GalleryImage.insertMany(galleryImages);
    console.log('🖼️ Seeded gallery images');

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedData();