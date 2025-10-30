const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let items = [
  { id: 1, name: 'Item A' },
  { id: 2, name: 'Item B' }
];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const { name } = req.body;
  const newItem = { id: Date.now(), name };
  items.push(newItem);
  res.status(201).json(newItem);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
