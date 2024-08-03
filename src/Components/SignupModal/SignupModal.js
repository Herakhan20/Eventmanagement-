import React from 'react';
import './SignupModal.css';

const SignupModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" required />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SignupModal;
