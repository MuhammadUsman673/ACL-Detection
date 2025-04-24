import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className="custom-footer">
  <div className="social-links">
    <FaFacebook className="social-icon" />
    <FaInstagram className="social-icon" />
    <FaTwitter className="social-icon" />
    <FaGoogle className="social-icon" />
    <FaYoutube className="social-icon" />
    <FaLinkedin className="social-icon" />
  </div>
  <div className="footer-note">
    <p>&copy; 2025 MRI Detection System. All Rights Reserved.</p>
  </div>
</div>

    </div>
  )
}

export default Footer
