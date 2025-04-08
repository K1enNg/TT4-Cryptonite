import express from 'express';
import axios from 'axios';
import CoinHistoricalData from '../models/HistoricalDetail.js';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';
const router = express.Router();
const CACHE_DURATION = 15 * 60 * 1000;

const SUPPORTED_DAYS = ['1', '7', '14', '30', '90', '180', '365', 'max'];

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { vs_currency = 'usd', days = '30' } = req.query;

  try {
    if (!SUPPORTED_DAYS.includes(days)) {
      return res.status(400).json({ 
        error: 'Invalid days parameter',
        supported_values: SUPPORTED_DAYS 
      });
    }

    const cacheKey = { coinId: id, vsCurrency: vs_currency, days };
    const cachedData = await CoinHistoricalData.findOne(cacheKey);
    const isCacheValid = cachedData && 
      (Date.now() - cachedData.lastUpdated.getTime() < CACHE_DURATION);

    if (isCacheValid) {
      console.log(`Serving cached historical data (${id}, ${vs_currency}, ${days}d)`);
      return res.json(cachedData.data);
    }

    console.log(`Fetching fresh data (${id}, ${vs_currency}, ${days}d)`);
    const response = await axios.get(`${COINGECKO_API}/coins/${id}/market_chart`, {
      params: { vs_currency, days },
      timeout: 5000
    });

    const freshData = response.data;

    await CoinHistoricalData.findOneAndUpdate(
      cacheKey,
      { data: freshData, lastUpdated: Date.now() },
      { upsert: true }
    );

    res.json(freshData);
  } catch (error) {
    console.error(`Error (${id}, ${vs_currency}, ${days}d):`, error.message);
    
    if (error.response) {
      res.status(error.response.status).json({
        error: 'CoinGecko API error',
        details: error.response.data
      });
    } else if (error.request) {
      res.status(503).json({ 
        error: 'Network error',
        details: 'Failed to reach CoinGecko API' 
      });
    } else {
      res.status(500).json({ 
        error: 'Server error',
        details: error.message 
      });
    }
  }
});

export default router;