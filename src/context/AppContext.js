// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [events, setEvents] = useState([]);
  const [tickets, setTickets] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  const addTicket = (ticket) => {
    setTickets((prevTickets) => [...prevTickets, ticket]);
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  return (
    <AppContext.Provider
      value={{ isAuthenticated, login, events, addEvent, tickets, addTicket }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
