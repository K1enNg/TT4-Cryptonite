import express from 'express';
import axios from 'axios';
import CryptoMarketData from '../models/CryptoMarketData.js';

const router = express.Router();
const CACHE_DURATION = 15 * 60 * 1000; 

router.get('/', async (req, res) => {
  const { vs_currency = 'usd' } = req.query; 

  try {
    const cachedData = await CryptoMarketData.findOne({ vsCurrency: vs_currency });
    const isCacheValid = cachedData && 
      (Date.now() - cachedData.lastUpdated.getTime() < CACHE_DURATION);

    if (isCacheValid) {
      console.log(`Serving from cache (currency: ${vs_currency})`);
      return res.json(cachedData.data);
    }

    console.log(`Fetching from API (currency: ${vs_currency})`);
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';
    const params = {
      vs_currency,
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      sparkline: false,
    };

    const response = await axios.get(apiUrl, { params });
    const freshData = response.data;

    await CryptoMarketData.findOneAndUpdate(
      { vsCurrency: vs_currency },
      { data: freshData, lastUpdated: Date.now() },
      { upsert: true }
    );

    res.json(freshData);
  } catch (error) {
    console.error('Error at Coin Context:', error.message);
    if (error.response) {
      console.error('API Response:', error.response.data);
      res.status(error.response.status).json({ 
        error: 'CoinGecko API error',
        details: error.response.data 
      });
    } else {
      res.status(500).json({ 
        error: 'Failed to fetch market data',
        details: error.message 
      });
    }
  }
});

export default router;