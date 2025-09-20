import express from 'express';
import GalleryImage from '../models/GalleryImage';

const router = express.Router();

// GET /api/gallery - Get all gallery images
router.get('/', async (req, res) => {
  try {
    const { category, year, featured } = req.query;
    const query: Record<string, string | number | boolean> = {};
    
    if (category && typeof category === 'string') {
      query.category = category;
    }
    
    if (year && typeof year === 'string') {
      query.year = parseInt(year);
    }
    
    if (featured !== undefined) {
      query.featured = featured === 'true';
    }
    
    const images = await GalleryImage.find(query)
      .sort({ featured: -1, order: 1, createdAt: -1 });
    
    res.json({
      success: true,
      count: images.length,
      data: images
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching gallery images',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// GET /api/gallery/:id - Get single image
router.get('/:id', async (req, res) => {
  try {
    const image = await GalleryImage.findById(req.params.id);
    
    if (!image) {
      return res.status(404).json({
        success: false,
        message: 'Image not found'
      });
    }
    
    res.json({
      success: true,
      data: image
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching image',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// POST /api/gallery - Create new image
router.post('/', async (req, res) => {
  try {
    const image = new GalleryImage(req.body);
    await image.save();
    
    res.status(201).json({
      success: true,
      data: image
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating image',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;