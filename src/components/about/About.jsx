import React from "react";
import './about.css';
import Footer from "../footer/Footer";
import { FaUserAlt, FaLock, FaHeartbeat, FaBrain, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <div>
        <div className="about-container">
          <div className="about-left">
            <h2>OUR MISSION</h2>
            <h3>Bringing AI Precision to Knee Injury Diagnosis</h3>
            <p>
              ACL injuries are among the most critical and commonly misdiagnosed knee conditions. Our platform leverages state-of-the-art deep learning models trained on thousands of MRI scans to deliver fast, accurate, and reliable ACL injury detection — empowering clinicians to make better-informed decisions and patients to understand their condition sooner.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Conditions Detected</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">AI</span>
                <span className="stat-label">Powered Analysis</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Fast</span>
                <span className="stat-label">Results in Minutes</span>
              </div>
            </div>
          </div>
          <div className="about-right">
         <img
src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
  alt="Doctor reviewing knee MRI scan"
  className="mission-image"
/>
          </div>
        </div>

        <div className="principles-container">
          <h2 className="principles-heading">Our Guiding Principles</h2>
          <p className="principles-subheading">The values that drive every decision we make in building this platform.</p>
          <div className="principles-boxes">
            <div className="principle-box">
              <FaUserAlt className="principle-icon" />
              <h3>Patient-Centricity</h3>
              <p>Every feature is designed with the patient's care journey at its core — not outside it.</p>
            </div>
            <div className="principle-box">
              <FaBrain className="principle-icon" />
              <h3>AI Accuracy</h3>
              <p>Our deep learning model is rigorously trained and validated to deliver clinically meaningful results.</p>
            </div>
            <div className="principle-box">
              <FaShieldAlt className="principle-icon" />
              <h3>Data Privacy</h3>
              <p>Patient MRI data is handled with the highest standards of security and confidentiality.</p>
            </div>
            <div className="principle-box">
              <FaLock className="principle-icon" />
              <h3>Accessibility</h3>
              <p>A user-friendly platform that improves access for both patients and healthcare providers.</p>
            </div>
            <div className="principle-box">
              <FaHeartbeat className="principle-icon" />
              <h3>Patient Empowerment</h3>
              <p>We give patients the knowledge and tools to become active participants in their own care.</p>
            </div>
            <div className="principle-box">
              <FaChartLine className="principle-icon" />
              <h3>Continuous Improvement</h3>
              <p>We are committed to evolving our models and platform based on clinical feedback and research.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;