const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const cards = JSON.parse(fs.readFileSync('cards.json', 'utf-8'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/card', (req, res) => {
  const random = cards[Math.floor(Math.random() * cards.length)];
  res.json({ challenge: random });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

