import React, { useState } from 'react';
import { auth, googleProvider } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Footer from '../footer/Footer';
import { FaGoogle } from 'react-icons/fa';
import './signup.css';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created! Please verify your email.');
      window.location.href = '/verify-email';
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      alert('Sign Up with Google successful!');
      window.location.href = '/';
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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

            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          <div className="social-signup">
            <h3>Or Sign Up with</h3>
            <div className="social-icons">
              <button
                className="social-btn social-btn-google"
                onClick={handleGoogleSignup}
                disabled={loading}
              >
                <FaGoogle size={30} />
              </button>
            </div>
          </div>

          <div className="login-option">
            <p>Already have an account? <a href="/login">Log In</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
