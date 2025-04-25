import React, { useState } from 'react';
import { auth, googleProvider } from '../../firebase';
import Footer from '../footer/Footer';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import './login.css';

// Import the image from the assets folder
import loginImage from '../../assets/login.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      window.location.href = '/'; // Redirect to home
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      alert('Login with Google successful!');
      window.location.href = '/'; // Redirect to home
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-container" style={{ backgroundImage: `url(${loginImage})` }}>
        <div className="login-form">
          <h2>Welcome</h2>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email or username"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? 'Logging In...' : 'Login'}
            </button>
          </form>

          <div className="social-login">
            <h3>Or Login with</h3>
            <div className="social-icons">
              <button
                className="social-btn social-btn-google"
                onClick={handleGoogleLogin}
                disabled={loading}
              >
                <FaGoogle size={30} />
              </button>
            </div>
          </div>

          <div className="sign-up-option">
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
