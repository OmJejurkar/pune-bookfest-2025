import mongoose, { Document, Schema } from 'mongoose';

export interface IGalleryImage extends Document {
  title: string;
  description: string;
  imageUrl: string;
  thumbnailUrl?: string;
  category: 'speakers' | 'events' | 'venue' | 'visitors' | 'books' | 'other';
  year: number;
  featured: boolean;
  order: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const GalleryImageSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String
  },
  category: {
    type: String,
    required: true,
    enum: ['speakers', 'events', 'venue', 'visitors', 'books', 'other']
  },
  year: {
    type: Number,
    required: true,
    min: 2020,
    max: new Date().getFullYear() + 1
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  },
  tags: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

export default mongoose.model<IGalleryImage>('GalleryImage', GalleryImageSchema);