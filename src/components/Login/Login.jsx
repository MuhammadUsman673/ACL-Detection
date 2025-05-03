// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth, googleProvider } from '../../firebase';
// import Footer from '../footer/Footer';
// import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// import { FaGoogle } from 'react-icons/fa';
// import './login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       await signInWithEmailAndPassword(auth, email, password);
//       setMessage('Login successful!');
//       setTimeout(() => navigate('/'), 2000); // Redirect after 2s
//     } catch (error) {
//       setMessage(error.message);
//     } finally {
//       setLoading(false);
//       setTimeout(() => setMessage(''), 4000); // Clear message after 4s
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       setLoading(true);
//       await signInWithPopup(auth, googleProvider);
//       setMessage('Login with Google successful!');
//       setTimeout(() => navigate('/'), 2000);
//     } catch (error) {
//       setMessage(error.message);
//     } finally {
//       setLoading(false);
//       setTimeout(() => setMessage(''), 4000);
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <div className="login-form">
//           <h2>Welcome</h2>
//           {message && <p className="message-text">{message}</p>}

//           <form onSubmit={handleLogin}>
//             <div className="form-group">
//               <label htmlFor="email" className="sr-only">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="Enter your email"
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
//                 placeholder="Enter your password"
//                 aria-label="Password"
//               />
//             </div>

//             <div className="forgot-password">
//               <a href="/forgot-password">Forgot Password?</a>
//             </div>

//             <button
//               type="submit"
//               className="login-btn"
//               disabled={loading}
//               aria-label="Login"
//             >
//               {loading ? 'Logging In...' : 'Login'}
//             </button>
//           </form>

//           <div className="social-login">
//             <h3>Or Login with</h3>
//             <div className="social-icons">
//               <button
//                 className="social-btn social-btn-google"
//                 onClick={handleGoogleLogin}
//                 disabled={loading}
//                 aria-label="Login with Google"
//               >
//                 <FaGoogle size={24} />
//               </button>
//             </div>
//           </div>

//           <div className="sign-up-option">
//             <p>
//               Don't have an account? <a href="/signup">Sign Up</a>
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Login;








import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../../firebase';
import Footer from '../footer/Footer';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (!user.emailVerified) {
        await auth.signOut(); // Sign out if email not verified
        setMessage('Please verify your email before logging in.');
        setTimeout(() => navigate('/verify-email', { state: { email } }), 2000);
        return;
      }
      setMessage('Login successful!');
      setTimeout(() => navigate('/'), 2000); // Redirect after 2s
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 4000); // Clear message after 4s
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      setMessage('Login with Google successful!');
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 4000);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h2>Welcome</h2>
          {message && <p className="message-text">{message}</p>}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                aria-label="Password"
              />
            </div>

            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
              aria-label="Login"
            >
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
                aria-label="Login with Google"
              >
                <FaGoogle size={24} />
              </button>
            </div>
          </div>

          <div className="sign-up-option">
            <p>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;