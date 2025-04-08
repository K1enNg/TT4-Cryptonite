import express from 'express';
import axios from 'axios';
import CoinDetails from '../models/CoinDetails.js';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

const router = express.Router();

const CACHE_DURATION = 15 * 60 * 1000; 

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const cachedData = await CoinDetails.findOne({ coinId: id });
    const isCacheValid = cachedData && 
      (Date.now() - cachedData.lastUpdated.getTime() < CACHE_DURATION);

    if (isCacheValid) {
      console.log(`Serving coin details (${id}) from cache`);
      return res.json(cachedData.data);
    }

    console.log(`Fetching coin details (${id}) from API`);
    const response = await axios.get(`${COINGECKO_API}/coins/${id}`);
    const freshData = response.data;

    await CoinDetails.findOneAndUpdate(
      { coinId: id },
      { data: freshData, lastUpdated: Date.now() },
      { upsert: true }
    );

    res.json(freshData);
  } catch (error) {
    console.error(`Error fetching coin details (${id}):`, error.message);
    res.status(500).json({ error: 'Failed to fetch coin details' });
  }
});

export default router;