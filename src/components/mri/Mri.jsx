import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Footer from "../footer/Footer";
import "./mri.css";

export default function MRIUpload() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");
  const [isValidScan, setIsValidScan] = useState(false);

  // Function to check if the user is logged in
  const checkLogin = () => {
    if (!auth.currentUser) {
      alert("You must log in to upload files!");
      navigate("/login"); // Redirect to login if not logged in
      return false;
    }
    return true;
  };

  // Function to validate MRI files based on the filename
  const isMRIFile = (filename) => {
    const lower = filename.toLowerCase();
    return lower.includes("mri") || lower.includes("brain") || lower.includes("spine") || lower.includes("scan");
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const filename = file.name.toLowerCase();

    if (isMRIFile(filename)) {
      setSelectedFile(file);
      setUploadMessage(`✅ MRI scan selected: ${file.name}`);
      setIsValidScan(true);
    } else {
      setSelectedFile(null);
      setUploadMessage("❌ Only MRI scans are allowed. Please upload a valid MRI image.");
      setIsValidScan(false);
    }
  };

  // Handle upload button click
  const handleUploadClick = () => {
    if (checkLogin()) {
      fileInputRef.current?.click();
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="containerc">
          <h1 className="titlec">Result One Click Away</h1>
          <h2 className="subtitlec">Advanced AI Analysis for MRI Scans</h2>
          <p className="descriptionc">
            Upload your MRI scan images for instant, AI-powered analysis and interpretation.
            Get detailed insights into your MRI scans without extensive medical knowledge.
          </p>

          <div className="upload-section">
            <h2 className="upload-heading">Upload Your Mri Scan Here</h2>
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

          {uploadMessage && (
            <div className={`upload-message ${isValidScan ? "valid" : "invalid"}`}>
              {uploadMessage}
            </div>
          )}

          <button
            className="upload-button"
            onClick={handleUploadClick}
            disabled={!auth.currentUser || !selectedFile || !isValidScan}
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
