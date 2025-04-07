import express from 'express';
import axios from 'axios';
import CryptoMarketData from '../models/CryptoMarketData.js';

const router = express.Router();
const CACHE_DURATION = 15 * 60 * 1000; 

router.get('/coins/markets', async (req, res) => {
  const { currency = 'usd' } = req.query;

  try {
    const cachedData = await CryptoMarketData.findOne({ vsCurrency: currency });
    const isCacheValid = cachedData && 
      (Date.now() - cachedData.lastUpdated.getTime() < CACHE_DURATION);

    if (isCacheValid) {
      console.log('Serving from cache (currency:', currency, ')');
      return res.json(cachedData.data);
    }

    console.log('Fetching from CoinGecko API (currency:', currency, ')');
    const apiUrl = `https://api.coingecko.com/api/v3/coins/markets`;
    const params = {
      currency,
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      sparkline: false,
    };

    const response = await axios.get(apiUrl, { params });
    const freshData = response.data;

    await CryptoMarketData.findOneAndUpdate(
      { vsCurrency: currency },
      { data: freshData, lastUpdated: Date.now() },
      { upsert: true }
    );

    res.json(freshData);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch market data' });
  }
});

export default router;