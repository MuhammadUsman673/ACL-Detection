// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
// import Home from './components/home/Home';
// import Login from './components/Login/Login';
// import Signup from './components/signup/Signup';
// import VerifyEmail from './components/verify/Verify';
// import ForgotPassword from './components/reset/Forgot';
// import About from './components/about/About';
// import ContactUs from './components/contact/Contact';
// import MRIUpload from './components/mri/Mri';
// import ResultPage from './components/Result/Result';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/upload" element={<MRIUpload />} />
//           <Route path="/results" element={<ResultPage />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} /> 
          
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App; // ✅ This line is required



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Signup from './components/signup/Signup';
import VerifyEmail from './components/verify/Verify';
import ForgotPassword from './components/reset/Forgot';
import About from './components/about/About';
import ContactUs from './components/contact/Contact';
import MRIUpload from './components/mri/Mri';
import ResultPage from './components/Result/Result';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/upload" element={<MRIUpload />} />
          <Route path="/results" element={<ResultPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;