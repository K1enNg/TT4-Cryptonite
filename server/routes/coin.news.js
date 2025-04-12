import express from 'express';
import axios from 'axios';
import News from '../models/News.js';
import { newsAPIkey } from '../config.js';

const router = express.Router();
const CACHE_DURATION = 60 * 60 * 1000;

router.get('/', async (req, res) => {
  try {
    const cachedNews = await News.findOne({});
    const isCacheValid = cachedNews && 
      (Date.now() - cachedNews.lastUpdated.getTime() < CACHE_DURATION);

    if (isCacheValid) {
      console.log('Serving from cache');
      return res.json(cachedNews.articles);
    }

    console.log('Fetching from API');
    const response = await axios.get('https://newsdata.io/api/1/news', {
      params: {
        apikey: newsAPIkey,
        q: 'cryptocurrency OR blockchain',
        language: 'en',
        category: 'technology,business', 
        image: '1' 
      },
      timeout: 10000
    });

    const articles = response.data?.results || [];
    if (!Array.isArray(articles)) {
      throw new Error('Invalid API response format');
    }

    await News.findOneAndUpdate(
      {},
      { articles, lastUpdated: new Date() },
      { upsert: true }
    );

    res.json(articles);
  } catch (error) {
    console.error('News error:', error.message);
    
    const cachedNews = await News.findOne({});
    if (cachedNews?.articles?.length > 0) {
      console.log('Serving stale cache');
      return res.json(cachedNews.articles);
    }
    
    res.status(500).json({ 
      error: 'News service unavailable',
      details: error.response?.data || error.message 
    });
  }
});

export default router;