import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import TrendingEvents from './Components/TrendingEvents/TrendingEvents';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import FindEvents from './Components/FindEvents/FindEvents';
import CreateEvent from './Components/CreateEvent/CreateEvent';
import AuthProvider from './context/AuthContext';
import AppProvider from './context/AppContext'; // Import the AppProvider
import Dashboard from './Components/Dashboard/Dashboard';
import TicketBooking from './Components/TicketBooking/TicketBooking';
import HelpCenter from './Components/HelpCenter/HelpCenter';
import EventCalendar from './Components/EventCalendar/EventCalendar';
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <div className="container-1">
                  <HeroSection />
                  <div className="container">
                    <TrendingEvents />
                  </div>
                </div>
              } />
              <Route path="/find-events" element={<FindEvents />} />
              <Route path="/create-events" element={<CreateEvent />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/ticket-booking/:eventId" element={<TicketBooking />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/event-calendar" element={<EventCalendar />} />
              <Route path="/" exact component={EventCalendar} />
              <Route path="/find-event" component={FindEvents} />

            </Routes>
            <Footer />
          </div>
        </AppProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
