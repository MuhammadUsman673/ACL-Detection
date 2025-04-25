import React from 'react';
import './home.css'; 
import { FaUserPlus, FaUpload, FaRobot, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md'; 
import Footer from '../footer/Footer';

// Import images from src/assets
import image212 from '../../assets/212.png';
import img1 from '../../assets/acl-sprain800.jpg';
import img2 from '../../assets/alu.webp';
import uzzi from '../../assets/alu3.jpg';
import img4 from '../../assets/42.webp';
import img5 from '../../assets/img.jpeg';
import img6 from '../../assets/img2.webp';
import user1 from '../../assets/user.jpeg';
import user2 from '../../assets/user2.jpeg';
import user3 from '../../assets/user3.jpeg';

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-content">
          <div className="content-container">
            <div className="text-container">
              <h1>Welcome to the AI-Based Knee MRI ACL Injury Detection System</h1>
              <p>
              Our AI-powered MRI detection system helps diagnose ACL injuries in knee MRIs with high accuracy. By analyzing MRI scans, our system can identify potential ACL issues early, allowing for prompt treatment. The technology is user-friendly and assists doctors in making informed decisions. You can upload your MRI scans to receive a detailed analysis within minutes. Our goal is to provide accurate diagnoses to guide treatment for better recovery outcomes.
                <br />
                The technology is easy to use and can help doctors make informed decisions. You can upload your MRI scans to receive a detailed analysis within minutes. Our goal is to provide accurate diagnoses that can guide treatment for better outcomes.
              </p>
            </div>

            <div className="image-container">
              <img src={image212} alt="MRI detection" />
            </div>
          </div>
        </div>

        <div className="diseases-section">
          <div className="heading-container">
            <h1>Types of ACL Diseases</h1>
          </div>

          <div className="disease-boxes">
            <div className="disease-box">
              <h2>ACL Sprain</h2>
              <p>Partial tear or stretch of the ACL, ranging in severity.</p>
              <img className="disease-image" src={img1} alt="" />
            </div>

            <div className="disease-box">
              <h2>ACL Tear</h2>
              <p>Complete or partial rupture of the ACL ligament.</p>
              <img className="disease-image" src={img2} alt="" />
            </div>

            <div className="disease-box">
              <h2>ACL Avulsion Fracture</h2>
              <p>ACL ligament pulls away from the bone, causing bone fracture.</p>
              <img className="disease-image" src={uzzi} alt="" />
            </div>

            <div className="disease-box">
              <h2>ACL Stretching</h2>
              <p>Mild stretching of the ACL without tearing.</p>
              <img className="disease-image" src={img4} alt="" />
            </div>

            <div className="disease-box">
              <h2>ACL Contusion</h2>
              <p>Bruise or mild injury to the ACL ligament.</p>
              <img className="disease-image" src={img5} alt="" />
            </div>

            <div className="disease-box">
              <h2>Recurrent ACL Injury</h2>
              <p>Re-injury or re-tearing of ACL after previous recovery.</p>
              <img className="disease-image" src={img6} alt="" />
            </div>
          </div>
        </div>

        <div className="steps-section">
          <h2>6 Simple Steps to Use Our MRI Detection System</h2>
          <div className="steps-container">
            <div className="step-box">
              <FaUserPlus className="step-icon" />
              <h3>Step 1: Sign Up / Log In</h3>
              <p>Create an account or log in to access the MRI detection system.</p>
            </div>

            <div className="step-box">
              <FaUpload className="step-icon" />
              <h3>Step 2: Upload Your MRI</h3>
              <p>Upload your MRI scan in a standard format (JPG, PNG, or DICOM).</p>
            </div>

            <div className="step-box">
              <FaRobot className="step-icon" />
              <h3>Step 3: AI Analysis</h3>
              <p>Our AI system will analyze the MRI and detect potential issues.</p>
            </div>

            <div className="step-box">
              <FaFileAlt className="step-icon" />
              <h3>Step 4: View Results</h3>
              <p>Review the detailed results of the analysis and detected conditions.</p>
            </div>

            <div className="step-box">
              <MdPerson className="step-icon" />
              <h3>Step 5: Consult Your Doctor</h3>
              <p>Consult with your healthcare provider for further treatment options.</p>
            </div>

            <div className="step-box">
              <FaSignOutAlt className="step-icon" />
              <h3>Step 6: Repeat or Log Out</h3>
              <p>You can upload another MRI scan or log out once you're done.</p>
            </div>
          </div>
        </div>

        <section className="testimonials-section">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-boxes">
            <div className="testimonial-box">
              <div className="testimonial-header">
                <img src={user1} alt="Client 1" className="testimonial-img" />
                <div className="testimonial-info">
                  <h3>Muhammad Farooq</h3>
                  <p className="position">CEO at Company</p>
                </div>
              </div>
              <p className="testimonial-text">
                "This service has been life-changing for our business. The quality is excellent and the team is always ready to help."
              </p>
              <div className="testimonial-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="testimonial-header">
                <img src={user2} alt="Client 2" className="testimonial-img" />
                <div className="testimonial-info">
                  <h3>Ali Abbas</h3>
                  <p className="position">Marketing Director</p>
                </div>
              </div>
              <p className="testimonial-text">
                "A fantastic experience! The team is incredibly knowledgeable, and we saw results within the first month."
              </p>
              <div className="testimonial-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">☆</span>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="testimonial-header">
                <img src={user3} alt="Client 3" className="testimonial-img" />
                <div className="testimonial-info">
                  <h3>Abdur Rehman</h3>
                  <p className="position">Product Manager</p>
                </div>
              </div>
              <p className="testimonial-text">
                "The customer support has been exceptional. They're always available to assist and provide valuable insights."
              </p>
              <div className="testimonial-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
