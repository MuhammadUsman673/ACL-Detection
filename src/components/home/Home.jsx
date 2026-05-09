import React from 'react';
import './home.css';
import { FaUserPlus, FaUpload, FaRobot, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';
import Footer from '../footer/Footer';

// Import images from src/assets
import image212 from '../../assets/212.png';
import img1 from '../../assets/acl1.jpg';
import img2 from '../../assets/acl2.jpg';
import uzzi from '../../assets/acl3.jpeg';
import img4 from '../../assets/acl4.webp';
import img5 from '../../assets/acl5.jpeg';
import img6 from '../../assets/acl6.jpeg';
import user1 from '../../assets/user12.jpeg';
import user2 from '../../assets/user21.jpeg';
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
                Our AI-powered MRI detection system diagnoses ACL injuries in knee MRIs with high accuracy. Upload your MRI scans to receive a detailed analysis within minutes. The user-friendly technology assists doctors in making informed decisions, enabling early detection and better recovery outcomes.
              </p>
            </div>

            <div className="image-container">
              <img src={image212} alt="AI MRI Detection System" />
            </div>
          </div>
        </div>

        <div className="diseases-section">
          <div className="heading-container">
            <h1>Types of Knee Conditions</h1>
          </div>

          <div className="disease-boxes">
            <div className="disease-box">
              <h2>General Abnormality</h2>
              <p>Any structural or tissue irregularity in the knee, potentially indicating conditions like osteoarthritis or chondral defects.</p>
              <img className="disease-image" src={img1} alt="General Abnormality" />
            </div>

            <div className="disease-box">
              <h2>ACL Injury (General)</h2>
              <p>Any tear, sprain, or damage to the anterior cruciate ligament, a key stabilizer of the knee.</p>
              <img className="disease-image" src={img2} alt="ACL Injury" />
            </div>

            <div className="disease-box">
              <h2>Meniscus Injury</h2>
              <p>A tear or damage to the meniscus, the cartilage cushioning the knee, causing pain or instability.</p>
              <img className="disease-image" src={uzzi} alt="Meniscus Injury" />
            </div>

            <div className="disease-box">
              <h2>ACL Sprain</h2>
              <p>A partial stretch or minor tear of the ACL, ranging from mild to moderate severity.</p>
              <img className="disease-image" src={img4} alt="ACL Sprain" />
            </div>

            <div className="disease-box">
              <h2>ACL Tear</h2>
              <p>A complete or severe rupture of the ACL, often requiring surgical intervention.</p>
              <img className="disease-image" src={img5} alt="ACL Tear" />
            </div>

            <div className="disease-box">
              <h2>ACL Avulsion Fracture</h2>
              <p>Detachment of the ACL from the bone, often with a fragment of bone, due to trauma.</p>
              <img className="disease-image" src={img6} alt="ACL Avulsion Fracture" />
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
              <p>Upload your MRI scan in .npy format (3D array, 10–24 slices, max 16MB).</p>
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

        {/* Collaboration / Team Section */}
        <section className="collaboration-section">
          <div className="collaboration-header">
            <h2>Meet the Team</h2>
            <p className="collaboration-subtitle">This system was built as a Final Year Project (FYP) by three dedicated students.</p>
          </div>

          <div className="team-cards">
            <div className="team-card">
              <div className="team-card-inner">
                <div className="team-img-wrapper">
                  <img src={user1} alt="Muhammad Usman" className="team-img" />
                  <div className="team-badge">01</div>
                </div>
                <div className="team-info">
                  <h3>Muhammad Usman</h3>
                  <p className="team-role">Frontend Lead</p>
                  <p className="team-desc">Led the frontend development of the system, designing and building the user interface end-to-end.</p>
                </div>
              </div>
            </div>

            <div className="team-card team-card--featured">
              <div className="team-card-inner">
                <div className="team-img-wrapper">
                  <img src={user2} alt="Muhammad Zulqarnain" className="team-img" />
                  <div className="team-badge">02</div>
                </div>
                <div className="team-info">
                  <h3>Muhammad Zulqarnain</h3>
                  <p className="team-role">Backend Lead</p>
                  <p className="team-desc">Designed and developed the server-side architecture, APIs, and database integration powering the MRI analysis system.</p>
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="team-card-inner">
                <div className="team-img-wrapper">
                  <img src={user3} alt="Aqib Javed" className="team-img" />
                  <div className="team-badge">03</div>
                </div>
                <div className="team-info">
                  <h3>Aqib Javed</h3>
                  <p className="team-role">AI Development Lead </p>
                  <p className="team-desc">Trained and fine-tuned deep learning models for ACL injury classification, handling dataset preparation, model evaluation, and performance optimization.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="collaboration-footer-note">
            <span className="collab-tag">Final Year Project — BS Computer Science</span>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}

export default Home;