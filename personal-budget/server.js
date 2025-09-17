// Budget API
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// API route for budget
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

// Serve Angular static files from the 'browser' folder
app.use(express.static(path.join(__dirname, 'dist/personal-budget/browser')));

// Wildcard route to serve Angular index.html for routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/personal-budget/browser/index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
