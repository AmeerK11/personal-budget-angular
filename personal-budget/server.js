// Budget API
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());


app.get('/budget', (req, res) => {
  fs.readFile(path.join(__dirname, 'budget.json'), 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading budget.json:", err);
      res.status(500).json({ error: "Failed to read budget data" });
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.use(express.static(path.join(__dirname, 'dist/personal-budget/browser')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist/personal-budget/browser/index.html'));
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
