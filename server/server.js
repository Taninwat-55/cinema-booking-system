require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;
// const omdbKey = process.env.OMDB_API_KEY;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
