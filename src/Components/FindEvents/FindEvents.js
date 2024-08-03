import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FindEvents.css';
import event1 from '../../assets/images/event1.jpg';
import event2 from '../../assets/images/event2.jpg';
import event3 from '../../assets/images/event3.jpg';
import CategorySection from '../CategorySection/CategorySection';
import { useAppContext } from '../../context/AppContext';
import LoginModal from '../LoginModal/LoginModal';

export const staticEvents = [
  { title: 'Gain confidence with Prompt Engineering', date: '2024-07-30', time: '4:30 AM GMT+5:30', location: 'Indore', image: event1, category: 'Conferences', description: 'Join us to gain confidence in Prompt Engineering!' },
  { title: 'PGP MFAB Coffee Meet', date: '2024-08-02', time: '6:00 PM', location: 'Sheraton Grand Palace Indore', image: event2, category: 'Meetups', description: 'Meet and greet at the PGP MFAB Coffee Meet.' },
  { title: 'The Essential Role of Bags in Modern Packaging', date: '2024-07-27', time: '10:00 AM', location: 'Indore', image: event3, category: 'Workshops', description: 'Discover the essential role of bags in modern packaging.' },
  { title: 'Job Alert! Walk-In Interviews This Week!', date: 'Fri, Aug 2', time: '12:00 PM', location: 'Carina Softlabs Inc.', image: 'https://tse4.mm.bing.net/th?id=OIP.2p9pGRMOmzrF5m64N_NVLgHaFQ&pid=Api&P=0&h=180', category: 'Workshops', description: 'Exciting job opportunities await you at our walk-in interviews.' },
  { title: 'Music Fest', date: 'Sat, Aug 5', time: '7:00 PM', location: 'Bhopal', image: 'https://tse1.mm.bing.net/th?id=OIP.FdYqELEuF01PHHMUETqSxQAAAA&pid=Api&P=0&h=180', category: 'Music Shows', description: 'Join us for an unforgettable music fest experience.' },
  { title: 'Food Carnival', date: 'Sun, Aug 6', time: '11:00 AM', location: 'Gwalior', image: 'https://tse3.mm.bing.net/th?id=OIP.6wBXB34eAIOKjMyKEwvQnQHaFy&pid=Api&P=0&h=180', category: 'Exhibitions', description: 'Taste and enjoy a variety of foods at our carnival.' },
  { title: 'Music Fest', name: 'Storm', date: '16th-18th February, 2024', time: '11:00 AM', location: 'Bangalore', image: 'https://www.holidify.com/images/cmsuploads/compressed/Storm_20170828184605.jpg', category: 'Music Shows', description: 'Experience the storm of music at Bangalore.' },
  { title: 'Music Fest', name: 'Hornbill', date: '5-15 December, 2024', time: '11:00 AM', location: 'Nagaland', image: 'https://www.holidify.com/images/cmsuploads/compressed/Hornbill_Festival,_Pix_by_Vikramjit_Kakati_20170828162317.jpg', category: 'Music Shows', description: 'Celebrate the Hornbill festival in Nagaland.' },
  { title: 'Music Fest', name: 'Riff', date: '16th - 20th October, 2024', time: '11:00 AM', location: 'Jodhpur', image: 'https://www.holidify.com/images/cmsuploads/compressed/Kavi-Bhansali-Oijo-_-JodhpurRIFF-20131021_MG_2710-e1389515764852_20170828185837.jpg', category: 'Music Shows', description: 'Join the Riff music fest in Jodhpur.' },
  { title: 'Music Fest', name: 'Ziro', date: '24-29 September, 2024', time: '11:00 AM', location: 'Arunachal Pradesh', image: 'https://www.holidify.com/images/cmsuploads/compressed/ziro-main_20170828163619.gif', category: 'Music Shows', description: 'Ziro music fest, experience it in Arunachal Pradesh.' },
  { title: 'Music Fest', name: 'Mahindra Blues', date: '10-11 February, 2024', time: '11:00 AM', location: 'Mumbai', image: 'https://www.holidify.com/images/cmsuploads/compressed/03-Mahindra-Blues-Festival1_20170828183535.jpg', category: 'Music Shows', description: 'Mahindra Blues music fest in Mumbai.' },
];

const FindEvents = () => {
  const [city, setCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { events, login } = useAppContext();

  const event = location.state?.event;

  const handleSearch = (e) => {
    setCity(e.target.value);
  };

  const handleEventClick = (event) => {
    navigate(`/ticket-booking/${event.title}`, { state: { event } });
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleLogin = () => {
    login();
    setShowLoginModal(false);
  };

  const allEvents = [...staticEvents, ...events];

  const filteredEvents = allEvents.filter((event) => {
    const matchesCity = event.location.toLowerCase().includes(city.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesCity && matchesCategory;
  });

  return (
    <div className="find-events">
      <CategorySection onSelectCategory={handleSelectCategory} />
      <h1>Find Events</h1>
      <LoginModal show={showLoginModal} onClose={() => setShowLoginModal(false)} onLogin={handleLogin} />
      {event ? (
        <div className="event-details">
          <h1>{event.title}</h1>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Location: {event.location}</p>
          <p>Description: {event.description}</p>
          <img src={event.image} alt={event.title} />
        </div>
      ) : (
        <>
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
                <p>
                  {event.date} • {event.time}
                </p>
                <p>{event.location}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FindEvents;
