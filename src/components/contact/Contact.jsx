import React from 'react';
import { FaSearch, FaInfoCircle, FaRegQuestionCircle, FaFileAlt, FaUser, FaShareAlt } from 'react-icons/fa'; // Import icons
import './contact.css'; 
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaYoutube, FaLinkedin, FaUserAlt, FaLock, FaHeartbeat } from 'react-icons/fa'; // Correct social icons import (no duplicates)
import Footer from '../footer/Footer';
const ContactUs = () => {
  return (
    <>
    <div>
      <div className="contact-container">
        <div className="content">
          <h1>Have questions or need help?</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search frequently asked questions"
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-boxes">
      
          <div className="faq-box">
            <h3>About PocketHealth</h3>
            <FaInfoCircle className="faq-icon" />
            <p>Who we are and what we do</p>
          </div>
          
      
          <div className="faq-box">
            <h3>After Requesting</h3>
            <FaRegQuestionCircle className="faq-icon" />
            <p>Signing up and how it works.</p>
          </div>

         
          <div className="faq-box">
            <h3>Managing Records</h3>
            <FaFileAlt className="faq-icon" />
            <p>Receiving images and exams.</p>
          </div>

         
          <div className="faq-box">
            <h3>Sharing with Doctors</h3>
            <FaShareAlt className="faq-icon" />
            <p>What to do with your records.</p>
          </div>

          <div className="faq-box">
            <h3>Managing My Account</h3>
            <FaUser className="faq-icon" />
            <p>Ways to send to your doctor.</p>
          </div>


          <div className="faq-box">
            <h3>Security and Privacy</h3>
            <FaInfoCircle className="faq-icon" />
            <p>How to reset your password.</p>
          </div>
        </div>
      </div>
      <div >  <h2 className="faq">Contact Us</h2></div>
      <div className="form-container">
   
      <div className="form-wrapper">
       

        <form  action="#" method="post" className="custom-form">
          <div className="input-group">
            <label htmlFor="full-name" className="input-label">Full Name</label>
            <input type="text" id="full-name" name="full-name" className="input-field" placeholder="Enter your name" required />
          </div>

          <div className="input-group">
            <label htmlFor="email" className="input-label">Email Address</label>
            <input type="email" id="email" name="email" className="input-field" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label htmlFor="message" className="input-label">Your Message</label>
            <textarea id="message" name="message" className="textarea-field" placeholder="Type your message here..." rows="5" required></textarea>
          </div>

          <div className="submit-container">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
        <div></div>
      </div>

      <div className="image-section">
        <img src="/src/assets/contact.png" alt="Contact Us" className="contact-image" />
      </div>
    </div>
          
                
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
