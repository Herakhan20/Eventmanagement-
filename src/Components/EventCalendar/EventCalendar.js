import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useNavigate } from 'react-router-dom';
import './EventCalendar.css';

// Import the static events list
import { staticEvents } from '../FindEvents/FindEvents'; // Adjust the path as needed

const EventCalendar = () => {
  const [filteredEvents, setFilteredEvents] = useState(staticEvents);
  const navigate = useNavigate();

  const calendarEvents = staticEvents.map((event) => ({
    title: event.title,
    start: event.date,
    backgroundColor: '#3788d8',
  }));

  const handleDateClick = (info) => {
    const selectedDate = info.dateStr;
    const eventsOnDate = staticEvents.filter((event) =>
      new Date(event.date).toISOString().startsWith(selectedDate)
    );
    setFilteredEvents(eventsOnDate);
  };

  const handleEventClick = (event) => {
    console.log('Event Clicked:', event.title);
    navigate('/find-events', { state: { event } });
  };

  return (
    <div className="event-calendar-container">
      <div className="event-calendar">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={calendarEvents}
          dateClick={handleDateClick}
          eventClick={(info) => handleEventClick(info.event.extendedProps)}
        />
      </div>
      <div className="event-sidebar">
        <h2>Events</h2>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.title}
              className="event-item"
              onClick={() => handleEventClick(event)}
            >
              <p>{event.title}</p>
              <p>{event.date}</p>
              <p>{event.location}</p>
            </div>
          ))
        ) : (
          <p>No events for this date.</p>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
