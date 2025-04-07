import express from 'express';
import cors from 'cors';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cryptoRouter from './routes/crypto.js';

const app = express();

app.use(cors());
app.use('/api', cryptoRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

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