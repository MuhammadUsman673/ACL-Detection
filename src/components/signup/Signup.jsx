// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth, googleProvider } from '../../firebase';
// import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// import Footer from '../footer/Footer';
// import { FaGoogle } from 'react-icons/fa';
// import './signup.css';

// function Signup() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setMessage('Please enter a valid email address.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setMessage('Passwords do not match');
//       return;
//     }

//     try {
//       setLoading(true);
//       await createUserWithEmailAndPassword(auth, email, password);
//       setMessage('Account created! Please verify your email.');
//       setTimeout(() => navigate('/verify-email'), 2000);
//     } catch (error) {
//       setMessage(error.message);
//     } finally {
//       setLoading(false);
//       setTimeout(() => setMessage(''), 4000);
//     }
//   };

//   const handleGoogleSignup = async () => {
//     try {
//       setLoading(true);
//       await signInWithPopup(auth, googleProvider);
//       setMessage('Sign Up with Google successful!');
//       setTimeout(() => navigate('/'), 2000);
//     } catch (error) {
//       setMessage(error.message);
//     } finally {
//       setLoading(false);
//       setTimeout(() => setMessage(''), 4000);
//     }
//   };

//   return (
//     <div className="signup-page">
//       <div className="signup-container">
//         <div className="signup-form">
//           <h2>Create Account</h2>
//           {message && <p className="message-text">{message}</p>}

//           <form onSubmit={handleSignup}>
//             <div className="form-group">
//               <label htmlFor="fullName" className="sr-only">Full Name</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 required
//                 placeholder="Full Name"
//                 aria-label="Full Name"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email" className="sr-only">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="Email"
//                 aria-label="Email address"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 placeholder="Password"
//                 aria-label="Password"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//                 placeholder="Confirm Password"
//                 aria-label="Confirm Password"
//               />
//             </div>

//             <button
//               type="submit"
//               className="signup-btn"
//               disabled={loading}
//               aria-label="Sign Up"
//             >
//               {loading ? 'Creating Account...' : 'Sign Up'}
//             </button>
//           </form>

//           <div className="social-signup">
//             <h3>Or Sign Up with</h3>
//             <div className="social-icons">
//               <button
//                 className="social-btn social-btn-google"
//                 onClick={handleGoogleSignup}
//                 disabled={loading}
//                 aria-label="Sign Up with Google"
//               >
//                 <FaGoogle size={24} />
//               </button>
//             </div>
//           </div>

//           <div className="login-option">
//             <p>
//               Already have an account? <a href="/login">Log In</a>
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Signup;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, signOut } from 'firebase/auth';
import Footer from '../footer/Footer';
import { FaGoogle } from 'react-icons/fa';
import './signup.css';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user); // Send verification email
      await signOut(auth); // Sign out to prevent auto-login
      setMessage('Account created! Please verify your email.');
      setTimeout(() => navigate('/verify-email'), 2000);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 4000);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      setMessage('Sign Up with Google successful!');
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 4000);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-form">
          <h2>Create Account</h2>
          {message && <p className="message-text">{message}</p>}

          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="fullName" className="sr-only">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Full Name"
                aria-label="Full Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                aria-label="Email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm Password"
                aria-label="Confirm Password"
              />
            </div>

            <button
              type="submit"
              className="signup-btn"
              disabled={loading}
              aria-label="Sign Up"
            >
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
                aria-label="Sign Up with Google"
              >
                <FaGoogle size={24} />
              </button>
            </div>
          </div>

          <div className="login-option">
            <p>
              Already have an account? <a href="/login">Log In</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;




