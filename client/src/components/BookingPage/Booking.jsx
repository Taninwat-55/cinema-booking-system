import React, { useState } from "react";

const Booking = () => {
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div>
      <h2>Book Film</h2>
      {/*Välja salong*/}
      <div>
        <h3>Choose salon</h3>
        <div>
          {theaters.map((theater) => (
            <button
              key={theater.theater_id}
              onClick={() => setSelectedTheater(theater.theater_id)}
            >
              {theater.theater_id}
            </button>
          ))}
        </div>
      </div>

      {/*Välj datum*/}
      {selectedTheater && (
        <div>
          <h3>Choose date</h3>
          <div>
            {dates.maps((date) => (
              <button key={date} onClick={() => setSelectedDate(date)}>
                {date}
              </button>
            ))}
          </div>
        </div>
      )}

      {/*Välj tid*/}

      {selectedDate && (
        <div>
          <h3>Choose time</h3>
          <div>
            {times.maps((time) => (
              <button key={time} onClick={() => setSelectedTime(time)}>
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/*Välj platser*/}
      {selectedTime && (
        <div>
          <h3>Choose seats</h3>
          <div>
            {seats.map((seat) => (
              <button key={seat} onClick={() => toggleSeat(seat)}>
                {seat}
              </button>
            ))}
          </div>
        </div>
      )}
      <div>
        <button onClick={handleBooking}>Book</button>
      </div>
    </div>
  );
};

export default Booking;
