import React, { useState } from 'react';
import './CreateEvent.css';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const { addEvent } = useAppContext();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a preview URL for the image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { eventName, date, time, location, description, image };
    addEvent(newEvent);
    navigate('/dashboard'); // Navigate to the dashboard after creating an event
  };

  return (
    <div className="create-event">
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Upload Image:
          <input type="file" accept="image/*" onChange={handleImageChange} required />
        </label>
        {image && <img src={image} alt="Event Preview" className="event-preview" />}
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
