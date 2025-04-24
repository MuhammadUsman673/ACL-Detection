import React from "react";
import "./result.css";
import { FaDownload, FaCheckCircle, FaTimesCircle, FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaYoutube, FaLinkedin } from "react-icons/fa";
import Footer from "../footer/Footer";
export default function ResultPage() {
 
  const resultData = {
    status: "Analysis Completed",
    scanQuality: "Good",
    detectedIssues: [
      { condition: "Osteoarthritis", severity: "Mild", detected: true },
      { condition: "Chondral Defects", severity: "Moderate", detected: true },
      { condition: "Avascular Necrosis", severity: "Not Detected", detected: false },
    ],
  };

  return (
    <>
      <div className="result-container">
        <h1 className="result-heading">MRI Scan Analysis Results</h1>

        <div className="result-summary">
          <h2>{resultData.status}</h2>
          <p>Scan Quality: {resultData.scanQuality}</p>
        </div>

        <div className="result-details">
          <h2>Detected Conditions</h2>
          <ul>
            {resultData.detectedIssues.map((issue, index) => (
              <li key={index} className="result-item">
                <span className="condition-name">{issue.condition}</span> -{" "}
                <span className={`severity ${issue.detected ? "detected" : "not-detected"}`}>
                  {issue.severity}
                </span>
                {issue.detected ? <FaCheckCircle className="icon detected" /> : <FaTimesCircle className="icon not-detected" />}
              </li>
            ))}
          </ul>
        </div>

        <div className="result-actions">
          <button className="download-button">
            <FaDownload /> Download Full Report
          </button>
          <p className="consult-message">Consult a doctor for further medical advice and next steps.</p>
        </div>
      </div>

      
   
      <Footer/>
    </>
  );
}
