import React from 'react';
import './home.css'; 
import { FaUserPlus, FaUpload, FaRobot, FaFileAlt, FaSignOutAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGoogle } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md'; 
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; 
import Footer from '../footer/Footer';

function Home() {
  return (
    <>
    <div className="home">
      <div className="home-content">
       
        <div className="content-container">
       
          <div className="text-container">
            <h1>Welcome to the Ai Based Knee Mri Osteochondral Disease Detection System</h1>
            <p>
              Our AI-powered MRI detection system helps diagnose osteochondral issues in knee MRIs with high accuracy. By analyzing MRI scans, our system can detect potential problems early, allowing for timely treatment.
              <br />
              The technology is easy to use and can help doctors make informed decisions. You can upload your MRI scans to receive a detailed analysis within minutes. Our goal is to provide accurate diagnoses that can guide treatment for better outcomes.
            </p>
          </div>

          <div className="image-container">
            <img src="/src/assets/212.png" alt="MRI detection" />
          </div>
        </div>
      </div>

<div className="diseases-section">
  <div className="heading-container">
    <h1>Types of Osteochondral Diseases</h1>
  </div>

  <div className="disease-boxes">
   
    <div className="disease-box">
      <h2>Osteochondritis Dissecans</h2>
      <p>Joint condition where cartilage and bone fragment detach.</p>
      <img className="disease-image" src="src/assets/1p.jpg" alt="Osteochondritis Dissecans" />
    </div>

   
    <div className="disease-box">
      <h2>Osteoarthritis</h2>
      <p>Degenerative joint disease leading to cartilage breakdown.</p>
      <img className="disease-image" src="src/assets/2p.jpg" alt="Osteochondritis Dissecans" />
    </div>

   
    <div className="disease-box">
      <h2>Chondral Defects</h2>
      <p>Damage to cartilage without affecting the underlying bone.</p>
      <img className="disease-image" src="src/assets/uzzi.png" alt="Osteochondritis Dissecans" />
    </div>

    
    <div className="disease-box">
      <h2>Avascular Necrosis</h2>
      <p>Loss of blood supply to bone, causing tissue death.</p>
      <img className="disease-image" src="src/assets/4p.jpeg" alt="Osteochondritis Dissecans" />
    </div>

  
    <div className="disease-box">
      <h2>Knee Osteochondral Lesions</h2>
      <p>Damage to both cartilage and bone in the knee joint.</p>
      <img className="disease-image" src="src/assets/5p.jpeg" alt="Osteochondritis Dissecans" />
    </div>

   
    <div className="disease-box">
      <h2>Post-traumatic Osteoarthritis</h2>
      <p>OA following joint trauma, affecting cartilage and bone.</p>
      <img className="disease-image" src="src/assets/6p.jpg" alt="Osteochondritis Dissecans" />
    </div>
  </div>
</div>


      {/* <div className="why-choose-section">
        <h1 className="section-heading">Why choose an MRI Interpretation online?</h1>
        <p className="section-subtext">
          Choosing our online MRI reading services opens the door to many benefits. When you choose an online MRI or CT video report from Mediphany, you get:
        </p>
        <div className="choose-boxes">
          <div className="choose-box">
            <h2>Convenience</h2>
            <p>No need to visit a hospital or clinic—upload your MRI scans from anywhere and receive your report online. Whether you're at home, traveling, or in a remote location, our service ensures seamless access to expert medical opinions.</p>
          </div>
          <div className="choose-box">
            <h2>Fast Results</h2>
            <p>Get your MRI interpretation within hours instead of waiting days or weeks. Our online platform connects you with expert radiologists who provide detailed, AI-assisted reports quickly, helping you take timely action for your health.</p>
          </div>
          <div className="choose-box">
            <h2>Cost-Effective</h2>
            <p>Save money compared to traditional in-person consultations. Our online MRI reading services provide high-quality interpretations at an affordable price, eliminating the costs associated with travel, appointments, and hospital fees.</p>
          </div>
          <div className="choose-box">
            <h2>Expert Radiologists</h2>
            <p>Your MRI scan is analyzed by experienced, board-certified radiologists. With their specialized knowledge and AI-driven insights, you receive accurate and reliable interpretations that can assist in precise diagnosis and treatment planning.</p>
          </div>
          <div className="choose-box">
            <h2>Secure Reports</h2>
            <p>Your medical data is protected with advanced encryption and strict privacy policies. We follow HIPAA-compliant standards to ensure that your MRI scans and reports remain confidential and accessible only to authorized professionals and yourself.</p>
          </div>
          <div className="choose-box">
            <h2>Detailed Insights</h2>
            <p>Receive an in-depth analysis of your MRI scans, highlighting key findings, potential concerns, and expert interpretations. Our detailed breakdown helps you understand your results with clarity, empowering you to make informed healthcare decisions.</p>
          </div>
        </div>
      </div> */}

     
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
     
<section class="testimonials-section">
  <h2>What Our Clients Say</h2>
  <div class="testimonial-boxes">
  
    <div class="testimonial-box">
      <div class="testimonial-header">
        <img src="/src/assets/user.jpeg" alt="Client 1" class="testimonial-img" />
        <div class="testimonial-info">
          <h3>John Doe</h3>
          <p class="position">CEO at Company</p>
        </div>
      </div>
      <p class="testimonial-text">
        "This service has been life-changing for our business. The quality is excellent and the team is always ready to help."
      </p>
      <div class="testimonial-stars">
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
      </div>
    </div>

    
    <div class="testimonial-box">
      <div class="testimonial-header">
      <img src="/src/assets/user2.jpeg" alt="Client 1" class="testimonial-img" />
        <div class="testimonial-info">
          <h3>Jane Smith</h3>
          <p class="position">Marketing Director</p>
        </div>
      </div>
      <p class="testimonial-text">
        "A fantastic experience! The team is incredibly knowledgeable, and we saw results within the first month."
      </p>
      <div class="testimonial-stars">
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">☆</span>
      </div>
    </div>

   
    <div class="testimonial-box">
      <div class="testimonial-header">
      <img src="/src/assets/user3.jpeg" alt="Client 1" class="testimonial-img" />
        <div class="testimonial-info">
          <h3>Mark Wilson</h3>
          <p class="position">Product Manager</p>
        </div>
      </div>
      <p class="testimonial-text">
        "The customer support has been exceptional. They're always available to assist and provide valuable insights."
      </p>
      <div class="testimonial-stars">
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
      </div>
    </div>
  </div>
</section>
      
    </div>
    <Footer/>
    </>
  );
}

export default Home;
