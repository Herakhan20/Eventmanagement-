import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const { state } = useLocation();
  const event = state?.event || {};

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numTickets, setNumTickets] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission and payment processing here
  };

  return (
    <div className="booking-form-container">
      {event.image && (
        <div className="event-image-section">
          <img src={event.image} alt={event.title} className="event-image" />
        </div>
      )}
      <h3>About</h3>
      <p className="event-description">{event.description}</p>
      <div className="booking-form">
        <h2>Book Your Tickets for {event.title}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Number of Tickets:
            <input
              type="number"
              value={numTickets}
              onChange={(e) => setNumTickets(e.target.value)}
              min="1"
              required
            />
          </label>
          <div className="event-details">
            <h3>Event Details</h3>
            <p>Price: ${event.price || 'TBD'} per ticket</p>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Duration: {event.duration || 'TBD'} hours</p>
            <p>Location: {event.location}</p>
          </div>
          <button type="button" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
