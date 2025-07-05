const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/books', bookRoutes);


app.get('/', (req, res) => {
  res.status(200).json({ message: 'Book List API is running' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

module.exports = app;