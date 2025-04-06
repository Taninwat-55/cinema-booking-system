/* eslint-disable no-undef */
require("dotenv").config();
console.log("dotenv fungerar!");

const express = require("express");
const cors = require("cors");

const movieRoutes = require("./routes/movieRoutes");
const screeningRoutes = require('./routes/screeningRoutes');

const app = express();
const port = process.env.PORT || 3001;
// const omdbKey = process.env.OMDB_API_KEY;

app.use(express.json());
app.use(cors());

app.use("/api/movies", movieRoutes);
app.use('/api/screenings', screeningRoutes);

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
