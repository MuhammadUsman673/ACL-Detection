import React, { useState } from 'react';
import { FaSearch, FaInfoCircle, FaRegQuestionCircle, FaFileAlt, FaUser, FaShareAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './contact.css';
import Footer from '../footer/Footer';
import contactImage from '../../assets/contact.png';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const faqData = [
    { id: 1, question: 'About PocketHealth', answer: 'Who we are and what we do.' },
    { id: 2, question: 'After Requesting', answer: 'Signing up and how it works.' },
    { id: 3, question: 'Managing Records', answer: 'Receiving images and exams.' },
    { id: 4, question: 'Sharing with Doctors', answer: 'What to do with your records.' },
    { id: 5, question: 'Managing My Account', answer: 'Ways to send to your doctor.' },
    { id: 6, question: 'Security and Privacy', answer: 'How to reset your password.' },
  ];

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSuccessMessage('Please enter a valid email address.');
      return;
    }

    const currentTime = new Date().toLocaleString();

    emailjs.send(
      'service_irqhk6k',
      'template_ykfnamr',
      {
        name: name,
        email: email,
        time: currentTime,
        message: message,
      },
      'AXwpSMprlMUYT3B0O'
    )
      .then(() => {
        setSuccessMessage('Message submitted successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSuccessMessage(''), 4000);
      })
      .catch((err) => {
        console.error('Error sending message:', err);
        setSuccessMessage('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="content">
          <h1>Have questions or need help?</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search frequently asked questions"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search FAQs"
            />
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-boxes">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map(faq => (
              <div className="faq-box" key={faq.id}>
                <h3>{faq.question}</h3>
                <FaInfoCircle className="faq-icon" aria-label={`More info on ${faq.question}`} />
                <p>{faq.answer}</p>
              </div>
            ))
          ) : (
            <p>No results found. Try a different search.</p>
          )}
        </div>
      </div>

      <div className="form-section">
        <h2 className="faq">Contact Us</h2>
        <div className="form-container">
          <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="custom-form">
              <div className="input-group">
                <label htmlFor="full-name" className="input-label">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="input-field"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email" className="input-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="message" className="input-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea-field"
                  placeholder="Type your message here..."
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="submit-container">
                <button type="submit" className="submit-btn">Submit</button>
              </div>

              {successMessage && (
                <p className="success-text">{successMessage}</p>
              )}
            </form>
          </div>

          <div className="image-section">
            <img src={contactImage} alt="Contact Us Illustration" className="contact-image" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;