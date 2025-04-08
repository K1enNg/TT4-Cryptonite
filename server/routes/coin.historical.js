import express from 'express';
import axios from 'axios';
import CoinHistoricalData from '../models/HistoricalDetail.js';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';
const router = express.Router();
const CACHE_DURATION = 15 * 60 * 1000;

const SUPPORTED_DAYS = ['1', '7','10', '14', '30', '90', '180', '365', 'max'];
const SUPPORTED_CURRENCIES = ['usd', 'eur', 'gbp', 'jpy', 'btc', 'eth'];

router.get('/:id/market_chart', async (req, res) => {
  const { id } = req.params;
  const { vs_currency = 'usd', days = '10' } = req.query;

  if (!SUPPORTED_CURRENCIES.includes(vs_currency.toLowerCase())) {
    return res.status(400).json({
      error: 'Unsupported currency',
      supported_values: SUPPORTED_CURRENCIES
    });
  }

  if (!SUPPORTED_DAYS.includes(days)) {
    return res.status(400).json({
      error: 'Unsupported days value',
      supported_values: SUPPORTED_DAYS
    });
  }

  try {
    const cacheKey = { coinId: id, vsCurrency: vs_currency, days };
    const cachedData = await CoinHistoricalData.findOne(cacheKey);
    
    if (cachedData && (Date.now() - cachedData.lastUpdated.getTime() < CACHE_DURATION)) {
      return res.json({
        success: true,
        data: cachedData.data,
        cached: true
      });
    }

    const { data } = await axios.get(`${COINGECKO_API}/coins/${id}/market_chart`, {
      params: { vs_currency, days },
      timeout: 5000
    });

    CoinHistoricalData.findOneAndUpdate(
      cacheKey,
      { data, lastUpdated: new Date() },
      { upsert: true, new: true }
    ).catch(console.error);

    res.json({
      success: true,
      data,
      cached: false
    });

  } catch (error) {
    console.error(`[Historical Error] ${id}:`, error.message);
    
    const staleData = await CoinHistoricalData.findOne({
      coinId: id,
      vsCurrency: vs_currency,
      days
    });
  }
});

export default router;