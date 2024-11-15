import express from 'express';

const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to TomeTrail!');
});

// New route for books
app.get('/books', (req, res) => {
  res.send('List of books');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});