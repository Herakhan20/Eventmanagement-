import React, { useState } from 'react';
import './TrendingEvents.css';
import { useNavigate } from 'react-router-dom';
import event1 from '../../assets/images/event1.jpg';
import event2 from '../../assets/images/event2.jpg';
import event3 from '../../assets/images/event3.jpg';
// import event4 from '../../assets/images/event4.jpg';
// import event5 from '../../assets/images/event5.jpg';
// import event6 from '../../assets/images/event6.jpg';

const allEvents = [
  { title: 'Gain confidence with Prompt Engineering', date: 'Tuesday', time: '4:30 AM GMT+5:30', location: 'Indore', image: event1 },
  { title: 'PGP MFAB Coffee Meet', date: 'Friday', time: '6:00 PM', location: 'Sheraton Grand Palace Indore', image: event2 },
  { title: 'The Essential Role of Bags in Modern Packaging', date: 'Sat, Jul 27', time: '10:00 AM', location: 'Indore', image: event3 },
  { title: 'Job Alert! Walk-In Interviews This Week!', date: 'Fri, Aug 2', time: '12:00 PM', location: 'Carina Softlabs Inc.', image: 'https://tse4.mm.bing.net/th?id=OIP.2p9pGRMOmzrF5m64N_NVLgHaFQ&pid=Api&P=0&h=180' },
  { title: 'Music Fest', date: 'Sat, Aug 5', time: '7:00 PM', location: 'Bhopal', image: 'https://tse1.mm.bing.net/th?id=OIP.FdYqELEuF01PHHMUETqSxQAAAA&pid=Api&P=0&h=180' },
  { title: 'Food Carnival', date: 'Sun, Aug 6', time: '11:00 AM', location: 'Gwalior', image: 'https://tse3.mm.bing.net/th?id=OIP.6wBXB34eAIOKjMyKEwvQnQHaFy&pid=Api&P=0&h=180' }
];

const TrendingEvents = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const filteredEvents = allEvents.filter(event => event.location.toLowerCase().includes(city.toLowerCase()));

  const handleSearch = (e) => {
    setCity(e.target.value);
  };

  const handleEventClick = (event) => {
    navigate(`/find-events?title=${event.title}`);
  };

  return (
    <div className="trending-events">
      <h2>Current Trending Events</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by city..."
          value={city}
          onChange={handleSearch}
        />
      </div>
      <div className="events-list">
        {filteredEvents.map((event, index) => (
          <div className="event-item" key={index} onClick={() => handleEventClick(event)}>
            <img src={event.image} alt={event.title} className="event-image" />
            <h3>{event.title}</h3>
            <p>{event.date} • {event.time}</p>
            <p>{event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingEvents;
