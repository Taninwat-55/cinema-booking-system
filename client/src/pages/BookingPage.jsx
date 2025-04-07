import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/BookingPage.css";
import MovieInfo from "../components/BookingPage/MovieInfo";
import TicketSelector from "../components/BookingPage/TicketSelector";
import SeatSelector from "../components/BookingPage/SeatSelector";

function BookingPage() {
  const { screening_id } = useParams();
  const navigate = useNavigate();
  const [screening, setScreening] = useState(null);
  const [movie, setMovie] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [availableSeats, setAvailableSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketCounts, setTicketCounts] = useState({
    adult: 0,
    child: 0,
    senior: 0,
  });

  // Hämta visnings- och filminformation
  useEffect(() => {
    document.body.style.backgroundColor = "#222831";

    fetch(`/api/screenings/${screening_id}`)
      .then((res) => {
        if (!res.ok) {
          console.error("Status:", res.status);
          return res.text().then((text) => {
            console.error("Error response:", text);
            throw new Error("Kunde inte hämta visning");
          });
        }
        return res.json();
      })
      .then((data) => {
        setScreening(data);
        return fetch(`/api/movies/${data.movie_id}`);
      })
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error("Fel vid hämtning av data:", error);
      });
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [screening_id]);

  // Hämta tillgängliga platser
  useEffect(() => {
    fetch(`/api/screenings/${screening_id}/seats`)
      .then((res) => res.json())
      .then((data) => {
        setAvailableSeats(data);
      })
      .catch((err) => {
        console.error("Fel vid hämtning av platser:", err);
      });
  }, [screening_id]);

  // Funktion för att hantera val av platser
  const handleSeatSelection = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
      return;
    }

    if (selectedSeats.length >= totalTickets) {
      alert(`Du kan max välja ${totalTickets} platser`);
      return;
    }

    setSelectedSeats([...selectedSeats, seatId]);
  };

  // Funktion för att slutföra bokningen
  const handleCompleteBooking = () => {
    if (selectedSeats.length !== totalTickets) {
      alert(`Du måste välja exakt ${totalTickets} platser`);
      return;
    }

    const bookingData = {
      screening_id: parseInt(screening_id),
      tickets: ticketCounts,
      seats: selectedSeats,
      total_price: totalPrice,
    };

    fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Kunde inte spara bokning");
        return res.json();
      })
      .then((data) => {
        alert(
          `Bokning slutförd! Ditt bokningsnummer är: ${data.booking_number}`
        );
        navigate("/");
      })
      .catch((err) => {
        console.error("Fel vid bokning:", err);
        alert("Något gick fel vid bokningen. Försök igen.");
      });
  };

  const handleTicketChange = (type, value) => {
    // Säkerställ att värdet inte blir negativt
    const newValue = Math.max(0, value);
    setTicketCounts({
      ...ticketCounts,
      [type]: newValue,
    });
  };

  const totalTickets =
    ticketCounts.adult + ticketCounts.child + ticketCounts.senior;

  const totalPrice = screening
    ? ticketCounts.adult * screening.price_adult +
      ticketCounts.child * screening.price_child +
      ticketCounts.senior * screening.price_senior
    : 0;

  const moveToSeatSelection = () => {
    if (totalTickets > 0) {
      setCurrentStep(2);
    } else {
      alert("Du måste välja minst en biljett");
    }
  };

  if (!screening || !movie) return <p>Laddar visning...</p>;

  const screeningDate = new Date(screening.screening_time);
  const formattedDate = new Intl.DateTimeFormat("sv-SE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(screeningDate);

  return (
    <div className="booking-page">
      <h1>Boka biljetter</h1>

      <div className="movie-info">
        {movie.poster_url && (
          <img src={movie.poster_url} alt={`Poster för ${movie.title}`} className="booking-page-poster" />
        )}
        <h2 className="theater-name">{screening.theater_name}</h2>
        <h2>{movie.title}</h2>
        <p>
          <strong>Tid:</strong> {formattedDate}
        </p>
      </div>

      {currentStep === 1 && (
        <div className="ticket-selection">
          <h2>Välj antal biljetter</h2>

          <div className="ticket-type">
            <div className="ticket-info">
              <span>Vuxna ({screening.price_adult} kr)</span>
            </div>
            <div className="ticket-controls">
              <button
                onClick={() =>
                  handleTicketChange("adult", ticketCounts.adult - 1)
                }
                disabled={ticketCounts.adult === 0}
              >
                -
              </button>
              <span>{ticketCounts.adult}</span>
              <button
                onClick={() =>
                  handleTicketChange("adult", ticketCounts.adult + 1)
                }
              >
                +
              </button>
            </div>
          </div>

          <div className="ticket-type">
            <div className="ticket-info">
              <span>Barn ({screening.price_child} kr)</span>
            </div>
            <div className="ticket-controls">
              <button
                onClick={() =>
                  handleTicketChange("child", ticketCounts.child - 1)
                }
                disabled={ticketCounts.child === 0}
              >
                -
              </button>
              <span>{ticketCounts.child}</span>
              <button
                onClick={() =>
                  handleTicketChange("child", ticketCounts.child + 1)
                }
              >
                +
              </button>
            </div>
          </div>

          <div className="ticket-type">
            <div className="ticket-info">
              <span>Pensionärer ({screening.price_senior} kr)</span>
            </div>
            <div className="ticket-controls">
              <button
                onClick={() =>
                  handleTicketChange("senior", ticketCounts.senior - 1)
                }
                disabled={ticketCounts.senior === 0}
              >
                -
              </button>
              <span>{ticketCounts.senior}</span>
              <button
                onClick={() =>
                  handleTicketChange("senior", ticketCounts.senior + 1)
                }
              >
                +
              </button>
            </div>
          </div>

          <div className="booking-summary">
            <h3>Totalpris: {totalPrice} kr</h3>
            <button
              className="next-button"
              onClick={moveToSeatSelection}
              disabled={totalTickets === 0}
            >
              Gå vidare till platsval
            </button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="seat-selection">
          <h3>Välj platser</h3>
          <p>Välj {totalTickets} platser</p>

          <div className="seat-grid">
            {availableSeats.map((seat) => (
              <button
                key={seat.seat_id}
                className={`seat ${
                  selectedSeats.includes(seat.seat_id) ? "selected" : ""
                }`}
                onClick={() => handleSeatSelection(seat.seat_id)}
                disabled={!seat.is_available}
              >
                Rad {seat.row_number}, Plats {seat.seat_number}
              </button>
            ))}
          </div>

          <div className="booking-actions">
            <button onClick={() => setCurrentStep(1)}>Tillbaka</button>
            <button
              className="complete-btn"
              onClick={handleCompleteBooking}
              disabled={selectedSeats.length !== totalTickets}
            >
              Slutför bokning
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingPage;
