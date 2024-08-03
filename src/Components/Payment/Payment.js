// src/components/Payment/Payment.js

import React from 'react';
import './Payment.css';

const Payment = ({ onPaymentComplete }) => {
  const handlePayment = (method) => {
    // Implement payment logic
    console.log(`Paid using ${method}`);
    onPaymentComplete();
  };

  return (
    <div className="payment-section">
      <h2>Payment Options</h2>
      <div className="payment-methods">
        <button onClick={() => handlePayment('Credit Card')}>Credit Card</button>
        <button onClick={() => handlePayment('Debit Card')}>Debit Card</button>
        <button onClick={() => handlePayment('PayPal')}>PayPal</button>
        <button onClick={() => handlePayment('Net Banking')}>Net Banking</button>
        {/* Add other payment methods if needed */}
      </div>
    </div>
  );
};

export default Payment;
