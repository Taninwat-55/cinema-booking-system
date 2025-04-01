require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
// const omdbKey = process.env.OMDB_API_KEY;

app.use(express.json());
app.use(cors());

const movieRoutes = require('./routes/movieRoutes');
app.use('/api/movies', movieRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
