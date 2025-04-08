import mongoose from 'mongoose';

const CoinHistoricalDataSchema = new mongoose.Schema({
  coinId: { type: String, required: true },
  vsCurrency: { type: String, required: true }, 
  days: { type: Number, required: true }, 
  data: { type: Object, required: true }, 
  lastUpdated: { type: Date, default: Date.now },
});

CoinHistoricalDataSchema.index({ coinId: 1, vsCurrency: 1, days: 1 });

export default mongoose.model('CoinHistoricalData', CoinHistoricalDataSchema);