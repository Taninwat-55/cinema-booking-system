import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BookingPage() {
  const { screening_id } = useParams();
  const [screening, setScreening] = useState(null);

  // Antal biljetter
  const [adultQty, setAdultQty] = useState(0);
  const [childQty, setChildQty] = useState(0);
  const [seniorQty, setSeniorQty] = useState(0);

  useEffect(() => {
    fetch(`/api/screenings`) // ev. byt till /api/screenings/:id
      .then((res) => res.json())
      .then((data) => {
        const match = data.find((s) => s.screening_id === Number(screening_id));
        setScreening(match);
      });
  }, [screening_id]);

  if (!screening) return <p>Laddar visning...</p>;

  const total =
    adultQty * screening.price_adult +
    childQty * screening.price_child +
    seniorQty * screening.price_senior;

  return (
    <div>
      <h1>Boka biljetter</h1>
      <p><strong>Film:</strong> {screening.movie_title}</p>
      <p><strong>Tid:</strong> {screening.screening_time}</p>
      <p><strong>Salong:</strong> {screening.theater_name}</p>

      <h2>Välj antal biljetter</h2>
      <label>
        👨‍🦱 Vuxna:
        <input type="number" min="0" value={adultQty} onChange={(e) => setAdultQty(Number(e.target.value))} />
      </label><br />
      <label>
        👧 Barn:
        <input type="number" min="0" value={childQty} onChange={(e) => setChildQty(Number(e.target.value))} />
      </label><br />
      <label>
        👴 Pensionärer:
        <input type="number" min="0" value={seniorQty} onChange={(e) => setSeniorQty(Number(e.target.value))} />
      </label>

      <h3>💰 Totalpris: {total} kr</h3>

      <button disabled={total === 0}>Gå vidare till platsval</button>
    </div>
  );
}

export default BookingPage;