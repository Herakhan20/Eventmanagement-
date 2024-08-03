import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext'; 
import './Dashboard.css';

const Dashboard = () => {
  const { bookings } = useAuth();
  const { events } = useAppContext();

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>

      <div className="section">
        <h2>Created Events</h2>
        {events.length > 0 ? (
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                <h3>{event.eventName}</h3>
                <p>{event.date} at {event.time}</p>
                <p>Location: {event.location}</p>
                <p>{event.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No events created yet.</p>
        )}
      </div>
      <div className="section">
        <h2>Booking Details</h2>
        {bookings.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Tickets</th>
                <th>Seats</th>
                <th>Payment Method</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.tickets}</td>
                  <td>{booking.selectedSeats.join(', ')}</td>
                  <td>{booking.paymentMethod}</td>
                  <td>${booking.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No booking details available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
