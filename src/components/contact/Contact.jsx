// import React, { useState } from 'react';
// import { FaSearch, FaInfoCircle, FaRegQuestionCircle, FaFileAlt, FaUser, FaShareAlt } from 'react-icons/fa'; // Import icons
// import emailjs from 'emailjs-com';
// import './contact.css'; 
// import { FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaYoutube, FaLinkedin, FaUserAlt, FaLock, FaHeartbeat } from 'react-icons/fa'; // Correct social icons import (no duplicates)
// import Footer from '../footer/Footer';
// import contactImage from '../../assets/contact.png'; // Import the image

// const ContactUs = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const currentTime = new Date().toLocaleString();

//     emailjs.send(
//       'service_irqhk6k',
//       'template_ykfnamr',
//       {
//         name: name,
//         time: currentTime,
//         message: message,
//       },
//       'AXwpSMprlMUYT3B0O'
//     )
//     .then(() => {
//       setSuccessMessage('Message submitted successfully!');
//       setName('');
//       setEmail('');
//       setMessage('');

//       setTimeout(() => {
//         setSuccessMessage('');
//       }, 4000); // message disappears after 4s
//     })
//     .catch((err) => {
//       console.error('Error sending message:', err);
//       setSuccessMessage('Something went wrong. Please try again.');
//     });
//   };

//   return (
//     <>
//       <div>
//         <div className="contact-container">
//           <div className="content">
//             <h1>Have questions or need help?</h1>
//             <div className="search-container">
//               <input
//                 type="text"
//                 placeholder="Search frequently asked questions"
//                 className="search-input"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="faq-section">
//           <h2 className="faq-heading">Frequently Asked Questions</h2>
//           <div className="faq-boxes">
//             <div className="faq-box">
//               <h3>About PocketHealth</h3>
//               <FaInfoCircle className="faq-icon" />
//               <p>Who we are and what we do</p>
//             </div>

//             <div className="faq-box">
//               <h3>After Requesting</h3>
//               <FaRegQuestionCircle className="faq-icon" />
//               <p>Signing up and how it works.</p>
//             </div>

//             <div className="faq-box">
//               <h3>Managing Records</h3>
//               <FaFileAlt className="faq-icon" />
//               <p>Receiving images and exams.</p>
//             </div>

//             <div className="faq-box">
//               <h3>Sharing with Doctors</h3>
//               <FaShareAlt className="faq-icon" />
//               <p>What to do with your records.</p>
//             </div>

//             <div className="faq-box">
//               <h3>Managing My Account</h3>
//               <FaUser className="faq-icon" />
//               <p>Ways to send to your doctor.</p>
//             </div>

//             <div className="faq-box">
//               <h3>Security and Privacy</h3>
//               <FaInfoCircle className="faq-icon" />
//               <p>How to reset your password.</p>
//             </div>
//           </div>
//         </div>

//         <div>
//           <h2 className="faq">Contact Us</h2>
//         </div>

//         <div className="form-container">
//           <div className="form-wrapper">
//             <form onSubmit={handleSubmit} method="post" className="custom-form">
//               <div className="input-group">
//                 <label htmlFor="full-name" className="input-label">Full Name</label>
//                 <input
//                   type="text"
//                   id="full-name"
//                   name="full-name"
//                   className="input-field"
//                   placeholder="Enter your name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="input-group">
//                 <label htmlFor="email" className="input-label">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="input-field"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="input-group">
//                 <label htmlFor="message" className="input-label">Your Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   className="textarea-field"
//                   placeholder="Type your message here..."
//                   rows="5"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   required
//                 ></textarea>
//               </div>

//               <div className="submit-container">
//                 <button type="submit" className="submit-btn">Submit</button>
//               </div>

//               {successMessage && (
//                 <p className="success-text">{successMessage}</p>
//               )}
//             </form>
//           </div>

//           <div className="image-section">
//             <img src={contactImage} alt="Contact Us" className="contact-image" />
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default ContactUs;




import React, { useState } from 'react';
import { FaSearch, FaInfoCircle, FaRegQuestionCircle, FaFileAlt, FaUser, FaShareAlt } from 'react-icons/fa'; // Import icons
import emailjs from 'emailjs-com';
import './contact.css'; 
import Footer from '../footer/Footer';
import contactImage from '../../assets/contact.png'; // Import the image

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // FAQ Data
  const faqData = [
    { id: 1, question: 'About PocketHealth', answer: 'Who we are and what we do.' },
    { id: 2, question: 'After Requesting', answer: 'Signing up and how it works.' },
    { id: 3, question: 'Managing Records', answer: 'Receiving images and exams.' },
    { id: 4, question: 'Sharing with Doctors', answer: 'What to do with your records.' },
    { id: 5, question: 'Managing My Account', answer: 'Ways to send to your doctor.' },
    { id: 6, question: 'Security and Privacy', answer: 'How to reset your password.' },
  ];

  // Filtered FAQ based on search query
  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentTime = new Date().toLocaleString();

    emailjs.send(
      'service_irqhk6k',
      'template_ykfnamr',
      {
        name: name,
        time: currentTime,
        message: message,
      },
      'AXwpSMprlMUYT3B0O'
    )
    .then(() => {
      setSuccessMessage('Message submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');

      setTimeout(() => {
        setSuccessMessage('');
      }, 4000); // message disappears after 4s
    })
    .catch((err) => {
      console.error('Error sending message:', err);
      setSuccessMessage('Something went wrong. Please try again.');
    });
  };

  return (
    <>
      <div>
        <div className="contact-container">
          <div className="content">
            <h1>Have questions or need help?</h1>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search frequently asked questions"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Handle search input change
              />
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <div className="faq-boxes">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map(faq => (
                <div className="faq-box" key={faq.id}>
                  <h3>{faq.question}</h3>
                  <FaInfoCircle className="faq-icon" />
                  <p>{faq.answer}</p>
                </div>
              ))
            ) : (
              <p>No results found. Try a different search.</p>
            )}
          </div>
        </div>

        <div>
          <h2 className="faq">Contact Us</h2>
        </div>

        <div className="form-container">
          <div className="form-wrapper">
            <form onSubmit={handleSubmit} method="post" className="custom-form">
              <div className="input-group">
                <label htmlFor="full-name" className="input-label">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="input-field"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email" className="input-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="message" className="input-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea-field"
                  placeholder="Type your message here..."
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="submit-container">
                <button type="submit" className="submit-btn">Submit</button>
              </div>

              {successMessage && (
                <p className="success-text">{successMessage}</p>
              )}
            </form>
          </div>

          <div className="image-section">
            <img src={contactImage} alt="Contact Us" className="contact-image" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
