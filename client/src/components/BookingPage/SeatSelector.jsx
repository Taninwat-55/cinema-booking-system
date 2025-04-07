function SeatSelector({ 
  availableSeats, 
  selectedSeats, 
  handleSeatSelection, 
  totalTickets,
  onGoBack,
  onComplete
}) {
  // Log the available seats to help debug
  console.log("Available seats:", availableSeats);
  
  // Group seats by row to see if any are missing
  const seatsByRow = {};
  availableSeats.forEach(seat => {
    if (!seatsByRow[seat.row_number]) {
      seatsByRow[seat.row_number] = [];
    }
    seatsByRow[seat.row_number].push(seat.seat_number);
  });
  console.log("Seats by row:", seatsByRow);
  
  return (
    <div className="seat-selection">
      <h3>Välj platser</h3>
      <p>Välj {totalTickets} platser</p>

      <div className="seat-grid">
        {availableSeats.map((seat) => (
          <button
            key={seat.seat_id}
            className={`seat ${
              selectedSeats.includes(seat.seat_id) ? 'selected' : ''
            }`}
            onClick={() => handleSeatSelection(seat.seat_id)}
            // Check both is_available and available_for_booking
            disabled={seat.is_available !== 1 || seat.available_for_booking !== 1}
          >
            Rad {seat.row_number}, Plats {seat.seat_number}
          </button>
        ))}
      </div>

      <div className="booking-actions">
        <button onClick={onGoBack}>Tillbaka</button>
        <button
          className="complete-btn"
          onClick={onComplete}
          disabled={selectedSeats.length !== totalTickets}
        >
          Slutför bokning
        </button>
      </div>
    </div>
  );
}

export default SeatSelector;