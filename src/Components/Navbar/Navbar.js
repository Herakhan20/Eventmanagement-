import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal';
import SignupModal from '../SignupModal/SignupModal';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, login } = useAuth();
  
  const navigate = useNavigate();

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  const openSignupModal = () => setShowSignupModal(true);
  const closeSignupModal = () => setShowSignupModal(false);

  const handleEventNavigation = (path) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      openLoginModal();
    }
  };

  const handleLogin = () => {
    login();
    closeLoginModal();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Event Management</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search events" />
        <button type="submit">🔍</button>
      </div>
      <div className="location">
        <input type="text" placeholder="Location" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#x2630;
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={() => handleEventNavigation('/find-events')}>Find Events</button>
        <button onClick={() => handleEventNavigation('/create-events')}>Create Events</button>
        <Link to="/help-center">Help Center</Link>
        <Link to="/event-calendar">Event Calendar</Link>
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
        {!isLoggedIn && <button onClick={openLoginModal}>Log In</button>}
        {!isLoggedIn && <button onClick={openSignupModal}>Sign Up</button>}
      </div>
      <LoginModal show={showLoginModal} onClose={closeLoginModal} onLogin={handleLogin} />
      <SignupModal show={showSignupModal} onClose={closeSignupModal} />
    </nav>
  );
};

export default Navbar;
