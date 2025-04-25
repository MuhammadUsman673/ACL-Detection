import React from "react";
import './about.css'; 
import Footer from "../footer/Footer";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaYoutube, FaLinkedin, FaUserAlt, FaLock, FaHeartbeat } from 'react-icons/fa'; // Correct social icons import (no duplicates)

// Importing images from src/assets folder
import missionImage from '../../assets/zain.jpg'; // Adjust the path according to the actual location of the image

const About = () => {
  return (
    <>
    <div>
      <div className="about-container">
        <div className="about-left">
          <h2>OUR MISSION</h2>
          <h3>Empower patients to take control of their health</h3>
          <p>
            Nearly every care journey starts with a medical image — and Our Website helps empower patients with the tools they need to truly understand their imaging records, take the best next step in their care and improve their health outcomes.
          </p>
          <button className="access-records-btn">Access My Records</button>
        </div>
        <div className="about-right">
          {/* Updated Image Path using imported image */}
          <img src={missionImage} alt="Medical professionals assisting patients with healthcare" className="mission-image" />
        </div>
      </div>

      <div className="principles-container">
        <h2 className="principles-heading">Our Guiding Principles</h2>
        <div className="principles-boxes">
          <div className="principle-box">
            <FaUserAlt className="social-icon" />
            <h3>Patient-Centricity</h3>
            <p>Put the patient at the center of their care journey, not outside it.</p>
          </div>
          <div className="principle-box">
            <FaLock className="social-icon" />
            <h3>Accessibility</h3>
            <p>Build a user-friendly, affordable platform that improves access for patients and healthcare providers.</p>
          </div>
          <div className="principle-box">
            <FaHeartbeat className="social-icon" />
            <h3>Patient Empowerment</h3>
            <p>Give patients the knowledge and tools to become more engaged in their care.</p>
          </div>
        </div>
      </div>

    </div>
    <Footer/>
    </>
  );
};

export default About;
