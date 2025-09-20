import express from 'express';

const router = express.Router();

// Sample sponsors data (in a real app, this would come from MongoDB)
const sponsorsData = {
  title: "Our Sponsors",
  platinum: [
    {
      id: 1,
      name: "Penguin Random House",
      logo: "/bookfest-logo.png",
      website: "https://penguinrandomhouse.com",
      description: "Leading global publisher"
    },
    {
      id: 2,
      name: "HarperCollins",
      logo: "/bookfest-logo.png", 
      website: "https://harpercollins.com",
      description: "Premium publishing house"
    }
  ],
  gold: [
    {
      id: 3,
      name: "Scholastic",
      logo: "/bookfest-logo.png",
      website: "https://scholastic.com",
      description: "Educational publisher"
    },
    {
      id: 4,
      name: "Macmillan",
      logo: "/bookfest-logo.png",
      website: "https://macmillan.com", 
      description: "International publisher"
    }
  ],
  silver: [
    {
      id: 5,
      name: "Oxford University Press",
      logo: "/bookfest-logo.png",
      website: "https://oup.com",
      description: "Academic publisher"
    },
    {
      id: 6,
      name: "Cambridge University Press",
      logo: "/bookfest-logo.png",
      website: "https://cambridge.org",
      description: "Educational excellence"
    }
  ]
};

// GET /api/sponsors - Get all sponsors
router.get('/', async (req, res) => {
  try {
    res.json({
      success: true,
      data: sponsorsData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching sponsors',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;