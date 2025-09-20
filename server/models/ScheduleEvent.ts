import mongoose, { Document, Schema } from 'mongoose';

export interface IScheduleEvent extends Document {
  day: number;
  time: string;
  title: string;
  speaker: string;
  venue: string;
  type: 'ceremony' | 'talk' | 'workshop' | 'signing' | 'performance' | 'panel' | 'launch' | 'activity' | 'meet';
  description?: string;
  duration?: number; // in minutes
  capacity?: number;
  registrationRequired: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ScheduleEventSchema: Schema = new Schema({
  day: {
    type: Number,
    required: true,
    min: 1,
    max: 9
  },
  time: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  speaker: {
    type: String,
    required: true,
    trim: true
  },
  venue: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['ceremony', 'talk', 'workshop', 'signing', 'performance', 'panel', 'launch', 'activity', 'meet']
  },
  description: {
    type: String,
    trim: true
  },
  duration: {
    type: Number,
    default: 60
  },
  capacity: {
    type: Number,
    default: null
  },
  registrationRequired: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export default mongoose.model<IScheduleEvent>('ScheduleEvent', ScheduleEventSchema);