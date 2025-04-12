import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
  articles: { type: Array, required: true },
  lastUpdated: { type: Date, default: Date.now }
});

export default mongoose.model('News', NewsSchema);