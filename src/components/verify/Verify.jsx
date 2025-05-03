// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const VerifyEmail = () => {
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleResendEmail = async () => {
//     if (!user) {
//       setMessage('Please log in again.');
//       return;
//     }

//     setLoading(true);
//     try {
//       await sendEmailVerification(user);
//       setMessage('Verification email sent. Please check your inbox.');
//     } catch (error) {
//       setMessage('Error: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//         if (currentUser.emailVerified) {
//           setMessage('Your email is already verified. Redirecting to home...');
//           navigate('/home'); // Redirect to home page after email is verified
//           // Or you can use `window.location.reload()` to refresh the page.
//         } else {
//           setMessage('Please verify your email before logging in.');
//         }
//       }
//     });

//     return () => unsubscribe();
//   }, [navigate]); // Add navigate to the dependency array

//   return (
//     <div className="verify-email-container">
//       <h2>Email Verification</h2>
//       <p>{message}</p>
//       {user && !user.emailVerified && (
//         <button onClick={handleResendEmail} disabled={loading}>
//           {loading ? 'Resending...' : 'Resend Verification Email'}
//         </button>
//       )}
//     </div>
//   );
// };
// export default VerifyEmail;







import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth, sendEmailVerification, onAuthStateChanged } from 'firebase/auth';
import './Verify.css';

const VerifyEmail = () => {
  const [message, setMessage] = useState('Please verify your email to continue.');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const email = location.state?.email || 'your email'; // Get email from signup

  const handleResendEmail = async () => {
    const user = auth.currentUser;
    if (!user) {
      setMessage('No user found. Please sign up again.');
      setTimeout(() => navigate('/signup'), 2000);
      return;
    }

    try {
      setLoading(true);
      await sendEmailVerification(user);
      setMessage('Verification email sent. Please check your inbox or spam folder.');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage('Please verify your email to continue.'), 4000);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified) {
        setMessage('Your email is verified. Redirecting to home...');
        setTimeout(() => navigate('/'), 2000);
      } else if (!user) {
        setMessage(`Please verify the email sent to ${email}.`);
      }
    });

    return () => unsubscribe();
  }, [navigate, email]);

  return (
    <div className="verify-email-container">
      <h2>Email Verification</h2>
      <p>{message}</p>
      <button onClick={handleResendEmail} disabled={loading}>
        {loading ? 'Resending...' : 'Resend Verification Email'}
      </button>
      <p>
        Already verified? <a href="/login">Try logging in</a>.
      </p>
    </div>
  );
};

export default VerifyEmail;