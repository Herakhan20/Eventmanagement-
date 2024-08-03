import React, { useState } from 'react';
import './HelpCenter.css';

const HelpCenter = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button on the top right corner and fill in the required details.",
      open: false
    },
    {
      question: "How can I book tickets?",
      answer: "You can book tickets by clicking on the 'Find Events' link in the navbar, selecting an event, and then proceeding to the ticket booking page.",
      open: false
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, you can cancel your booking from your dashboard under the 'My Bookings' section.",
      open: false
    },
    {
      question: "How do I contact support?",
      answer: "You can contact support by emailing us at support@example.com or by using the contact form on this page.",
      open: false
    }
  ]);

  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    setChatMessages([...chatMessages, { text: message, user: "user" }]);
    setMessage("");
  };

  return (
    <div className="help-center">
      <h1>Help Center</h1>
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Phone: +1 234 567 890</p>
        <p>Email: support@example.com</p>
      </div>
      <div className="faqs">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq ${faq.open ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {faq.question}
            </div>
            <div className="faq-answer">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      <div className="chat-box">
        <h2>Chat with Us</h2>
        <div className="chat-messages">
          {chatMessages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.user}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleChatSubmit}>
          <input 
            type="text" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Type your message..." 
            required 
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default HelpCenter;
