/* eslint-disable no-undef */
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const movieRoutes = require("./routes/movieRoutes");
const screeningRoutes = require('./routes/screeningRoutes');
const seatRoutes = require('./routes/seatRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/api/movies", movieRoutes);
app.use('/api/screenings', screeningRoutes);
app.use('/api/seats', seatRoutes);
app.use('/api/bookings', bookingRoutes);

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
