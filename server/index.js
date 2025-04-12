import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { PORT, mongoDBURL } from './config.js';

import marketRouter from './routes/coin.market.js';
import detailRouter from './routes/coin.detail.js';
import historicalRouter from './routes/coin.historical.js';
import newsRouter from './routes/coin.news.js';


const app = express();

app.use(cors());
app.use('/api/coins/markets', marketRouter);
app.use('/api/coins', detailRouter);
app.use('/api/coins', historicalRouter);
app.use('/api/news', newsRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('MongoDB connected successfully!');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });