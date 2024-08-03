import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookings, setBookings] = useState([]);

  const login = () => setIsLoggedIn(true);

  const addBooking = (bookingDetails) => {
    setBookings((prevBookings) => [...prevBookings, bookingDetails]);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, bookings, addBooking }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
