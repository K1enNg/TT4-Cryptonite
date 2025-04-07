import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: "Hello from Node!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});