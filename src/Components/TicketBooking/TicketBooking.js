import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './TicketBooking.css';
import { useAuth } from '../../context/AuthContext';

const TicketBookingPage = () => {
  const { state } = useLocation();
  const event = state?.event || {};

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tickets, setTickets] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([2, 5, 8]); // Example of booked seats

  const { addBooking } = useAuth();

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleTicketsChange = (e) => setTickets(e.target.value);
  const handlePaymentMethodChange = (e) => setPaymentMethod(e.target.value);

  const handleSeatClick = (index) => {
    if (bookedSeats.includes(index)) return; // Prevent clicking on booked seats

    const newSelectedSeats = [...selectedSeats];
    if (newSelectedSeats.includes(index)) {
      newSelectedSeats.splice(newSelectedSeats.indexOf(index), 1);
    } else {
      newSelectedSeats.push(index);
    }
    setSelectedSeats(newSelectedSeats);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPaymentSuccessful(true);
    const bookingDetails = {
      name,
      email,
      tickets,
      paymentMethod,
      totalAmount: tickets * (event.price || 50),
      selectedSeats,
    };
    addBooking(bookingDetails);
    setBookedSeats([...bookedSeats, ...selectedSeats]); // Update booked seats
  };

  const seats = Array(50).fill(false);

  return (
    <div className="ticket-booking">
      <h1>Book Your Tickets for {event.title}</h1>
      {event.image && (
        <div className="event-image-section">
          <img src={event.image} alt={event.title} className="event-image" />
        </div>
      )}
      <p className="event-description">{event.description}</p>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name} onChange={handleNameChange} required />
        <input type="email" placeholder="Your Email" value={email} onChange={handleEmailChange} required />
        <input type="number" placeholder="Number of Tickets" value={tickets} min="1" onChange={handleTicketsChange} required />

        <div className="pricing-chart">
          <h2>Event Details</h2>
          <table>
            <thead>
              <tr>
                <th>Detail</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price per Ticket</td>
                <td>${event.price || '50'}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>{event.date}</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>{event.time}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{event.location}</td>
              </tr>
              <tr>
                <td>Total Price</td>
                <td>${tickets * (event.price || 50)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="seating-chart">
          <h2>Seating Chart</h2>
          <div className="seats-container">
            {seats.map((isBooked, index) => (
              <div
                key={index}
                className={`seat ${selectedSeats.includes(index) ? 'selected' : ''} ${bookedSeats.includes(index) ? 'booked' : ''}`}
                onClick={() => handleSeatClick(index)}
              />
            ))}
          </div>
        </div>

        <div className="payment-methods">
          <h2>Select Payment Method</h2>
          <select value={paymentMethod} onChange={handlePaymentMethodChange} required>
            <option value="">Choose...</option>
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {paymentMethod && (
          <div className="payment-details">
            <h3>Enter {paymentMethod.replace('-', ' ')} Details</h3>
            <input type="text" placeholder="Card Number" required />
            <input type="text" placeholder="Expiry Date" required />
            <input type="text" placeholder="CVV" required />
          </div>
        )}

        <button className="payment-button" type="submit">
          Proceed to Payment
        </button>
      </form>

      {isPaymentSuccessful && (
        <div className="success-message">
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase. A confirmation email has been sent to {email}.</p>
        </div>
      )}
    </div>
  );
};

export default TicketBookingPage;
