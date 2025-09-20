import mongoose, { Document, Schema } from 'mongoose';

export interface ISpeaker extends Document {
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
  createdAt: Date;
  updatedAt: Date;
}

const SpeakerSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  social: {
    twitter: { type: String, default: '' },
    facebook: { type: String, default: '' },
    instagram: { type: String, default: '' },
    linkedin: { type: String, default: '' }
  },
  featured: {
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

export default mongoose.model<ISpeaker>('Speaker', SpeakerSchema);