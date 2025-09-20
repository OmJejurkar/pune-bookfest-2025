import express from 'express';
import ScheduleEvent from '../models/ScheduleEvent';

const router = express.Router();

// GET /api/schedule - Get all schedule events
router.get('/', async (req, res) => {
  try {
    const { day } = req.query;
    let query = {};
    
    if (day) {
      query = { day: parseInt(day as string) };
    }
    
    const events = await ScheduleEvent.find(query)
      .sort({ day: 1, order: 1, time: 1 });
    
    // Group events by day
    const groupedEvents = events.reduce((acc, event) => {
      if (!acc[event.day]) {
        acc[event.day] = [];
      }
      acc[event.day].push(event);
      return acc;
    }, {} as Record<number, any[]>);
    
    res.json({
      success: true,
      count: events.length,
      data: day ? events : groupedEvents
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching schedule',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// GET /api/schedule/:id - Get single event
router.get('/:id', async (req, res) => {
  try {
    const event = await ScheduleEvent.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }
    
    res.json({
      success: true,
      data: event
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching event',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// POST /api/schedule - Create new event
router.post('/', async (req, res) => {
  try {
    const event = new ScheduleEvent(req.body);
    await event.save();
    
    res.status(201).json({
      success: true,
      data: event
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating event',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;