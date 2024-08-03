import React from 'react';
import './LoginModal.css';

const LoginModal = ({ show, onClose, onLogin }) => {
  if (!show) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assume login is successful
    onLogin();
  };

  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" required />
          </label>
          <label>
            Password:
            <input type="password" required />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
