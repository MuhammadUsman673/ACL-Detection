import React, { useRef } from "react";
import {
  FaCloudUploadAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import "./mri.css";

export default function MRIUpload() {
  const fileInputRef = useRef(null);

  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      alert(`Selected file: ${files[0].name}`); 
    }
  };

  return (
    <div className="main-container">
      
      <div className="containerc">
        <h1 className="titlec">AI MRI Uploader</h1>
        <h2 className="subtitlec">Advanced AI Analysis for MRI Scans</h2>
        <p className="descriptionc">
          Upload your MRI scan images for instant, AI-powered analysis and interpretation.
          Get detailed insights into your MRI scans without extensive medical knowledge.
        </p>

      
        <div className="upload-section">
          <h2 className="upload-heading">X-ray, CT scans, MRI, and Ultrasound</h2>
          <div
            className="upload-box"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && handleUploadClick()}
          >
            <FaCloudUploadAlt
              className="upload-icon"
              onClick={handleUploadClick} 
            />
            <p className="upload-text">Click to upload or drag and drop</p>
            <p className="upload-formats">JPG, JPEG, PNG, or DICOM files supported</p>
            <input
              type="file"
              ref={fileInputRef}
              className="file-input"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.dcm"
              style={{ display: "none" }} 
            />
          </div>
        </div>
      </div>

    
      <footer className="footer5">
        <div className="social-icons5">
          <FaFacebook className="social-icon5" />
          <FaInstagram className="social-icon5" />
          <FaTwitter className="social-icon5" />
          <FaGoogle className="social-icon5" />
          <FaYoutube className="social-icon5" />
          <FaLinkedin className="social-icon5" />

          
          {/* <FaCloudUploadAlt
            className="social-icon5"
            onClick={handleUploadClick} 
            style={{ cursor: "pointer" }}
          /> */}
        </div>
        <div className="footer-copyright5">
          <p>&copy; 2025 MRI Detection System. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
