import mongoose from 'mongoose';

const CryptoMarketDataSchema = new mongoose.Schema({
  vsCurrency: { type: String, required: true },
  data: { type: Array, required: true },
  lastUpdated: { type: Date, default: Date.now },
});

CryptoMarketDataSchema.index({ currency: 1 });

export default mongoose.model('CryptoMarketData', CryptoMarketDataSchema);