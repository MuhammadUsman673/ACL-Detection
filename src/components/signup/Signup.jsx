import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Signup.css'; 

import { FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!acceptTerms) {
      alert("You must accept the terms and conditions");
      return;
    }
    
    console.log("Signing up with:", fullName, email, password);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create Account</h2>

        <form onSubmit={handleSignup}>
          <div className="form-group">
            <input 
              type="text" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              required 
              placeholder="Full Name" 
            />
          </div>

          <div className="form-group">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Email" 
            />
          </div>

          <div className="form-group">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Password" 
            />
          </div>

          <div className="form-group">
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
              placeholder="Confirm Password" 
            />
          </div>

          <div className="form-group">
            
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <div className="social-signup">
          <h3>Or Sign Up with</h3>
          <div className="social-icons">
            <button className="social-btn social-btn-google">
              <FaGoogle size={30} />
            </button>
            <button className="social-btn social-btn-facebook">
              <FaFacebook size={30} />
            </button>
          </div>
        </div>

        <div className="login-option">
          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
      </div>
        <div className="footer2">
              
              <div className="social-icons2">
                <FaFacebook className="social-icon2" />
                <FaInstagram className="social-icon2" />
                <FaTwitter className="social-icon2" />
                <FaGoogle className="social-icon2" />
                <FaYoutube className="social-icon2" />
                <FaLinkedin className="social-icon2" />
              </div>
      
              
              <div className="footer-copyright2">
                <p>&copy; 2025 MRI Detection System. All Rights Reserved.</p>
              </div>
            </div>
    </div>
  );
}

export default Signup;
