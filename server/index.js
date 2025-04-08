import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { PORT, mongoDBURL } from './config.js';

import marketRouter from './routes/Coin.js';
import detailRouter from './routes/CoinDetail.js';


const app = express();

app.use(cors());
app.use('/api/coins/markets', marketRouter);
app.use('/api/coins', detailRouter)

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