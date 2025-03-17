import React, { useState } from 'react';
import './Login.css'; 
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome</h2>

        <form onSubmit={handleLogin}>
        
          <div className="form-group">
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Enter your email or username" 
            />
          </div>

        
          <div className="form-group">
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Enter your password" 
            />
          </div>

        
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>

          
          <button type="submit" className="login-btn">Login</button>
        </form>

        
        <div className="social-login">
          <h3>Or Login with</h3>
          <div className="social-icons">
            <button className="social-btn social-btn-google">
              <FaGoogle size={30} />
            </button>
            <button className="social-btn social-btn-facebook">
              <FaFacebook size={30} />
            </button>
          </div>
        </div>

        
        <div className="sign-up-option">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>

      
      <div className="footer1">
      
        <div className="social-icons1">
          <FaFacebook className="social-icon1" />
          <FaInstagram className="social-icon1" />
          <FaTwitter className="social-icon1" />
          <FaGoogle className="social-icon1" />
          <FaYoutube className="social-icon1" />
          <FaLinkedin className="social-icon1" />
        </div>

        
        <div className="footer-copyright1">
          <p>&copy; 2025 MRI Detection System. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
