import express from 'express';
import cors from 'cors';
import { PORT, mongoDBURL } from './config';
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});