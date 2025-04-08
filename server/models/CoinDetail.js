import mongoose from 'mongoose';

const CoinDetailsSchema = new mongoose.Schema({
  coinId: { type: String, required: true, unique: true },
  data: { type: Object, required: true },
  lastUpdated: { type: Date, default: Date.now },
});

export default mongoose.model('CoinDetails', CoinDetailsSchema);