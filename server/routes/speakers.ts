import express from 'express';
import Speaker from '../models/Speaker';

const router = express.Router();

// GET /api/speakers - Get all speakers
router.get('/', async (req, res) => {
  try {
    const speakers = await Speaker.find()
      .sort({ featured: -1, order: 1, createdAt: -1 });
    
    res.json({
      success: true,
      count: speakers.length,
      data: speakers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching speakers',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// GET /api/speakers/:id - Get single speaker
router.get('/:id', async (req, res) => {
  try {
    const speaker = await Speaker.findById(req.params.id);
    
    if (!speaker) {
      return res.status(404).json({
        success: false,
        message: 'Speaker not found'
      });
    }
    
    res.json({
      success: true,
      data: speaker
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching speaker',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// POST /api/speakers - Create new speaker (admin only - simplified for demo)
router.post('/', async (req, res) => {
  try {
    const speaker = new Speaker(req.body);
    await speaker.save();
    
    res.status(201).json({
      success: true,
      data: speaker
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating speaker',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;