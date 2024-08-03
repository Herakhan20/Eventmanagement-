// src/pages/BookingPage/BookingPage.js

import React, { useState } from 'react';
import BookingForm from '../../Components/BookingForm/BookingForm';
import Payment from '../../Components/Payment/Payment';

const event = {
  title: 'Concert Night',
  price: 50,
  date: 'July 30, 2024',
  time: '7:00 PM',
  duration: 3,
  location: 'City Arena',
  // Add any additional details here
};

const BookingPage = () => {
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handlePaymentComplete = () => {
    setPaymentComplete(true);
    // Optionally, redirect or show a success message
  };

  return (
    <div className="booking-page">
      {!paymentComplete ? (
        <>
          <BookingForm event={event} />
          <Payment onPaymentComplete={handlePaymentComplete} />
        </>
      ) : (
        <div className="success-message">
          <h2>Thank you for your purchase!</h2>
          <p>Your tickets have been booked successfully.</p>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
