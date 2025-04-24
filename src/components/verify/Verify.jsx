import { useNavigate } from 'react-router-dom'; // Import useNavigate

const VerifyEmail = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleResendEmail = async () => {
    if (!user) {
      setMessage('Please log in again.');
      return;
    }

    setLoading(true);
    try {
      await sendEmailVerification(user);
      setMessage('Verification email sent. Please check your inbox.');
    } catch (error) {
      setMessage('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        if (currentUser.emailVerified) {
          setMessage('Your email is already verified. Redirecting to home...');
          navigate('/home'); // Redirect to home page after email is verified
          // Or you can use `window.location.reload()` to refresh the page.
        } else {
          setMessage('Please verify your email before logging in.');
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]); // Add navigate to the dependency array

  return (
    <div className="verify-email-container">
      <h2>Email Verification</h2>
      <p>{message}</p>
      {user && !user.emailVerified && (
        <button onClick={handleResendEmail} disabled={loading}>
          {loading ? 'Resending...' : 'Resend Verification Email'}
        </button>
      )}
    </div>
  );
};
export default VerifyEmail;
