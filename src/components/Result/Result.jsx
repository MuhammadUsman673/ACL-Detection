  // import React from "react";
  // import "./result.css";
  // import { FaDownload, FaCheckCircle, FaTimesCircle, FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaYoutube, FaLinkedin } from "react-icons/fa";
  // import Footer from "../footer/Footer";
  // export default function ResultPage() {
  
  //   const resultData = {
  //     status: "Analysis Completed",
  //     scanQuality: "Good",
  //     detectedIssues: [
  //       { condition: "Osteoarthritis", severity: "Mild", detected: true },
  //       { condition: "Chondral Defects", severity: "Moderate", detected: true },
  //       { condition: "Avascular Necrosis", severity: "Not Detected", detected: false },
  //     ],
  //   };

  //   return (
  //     <>
  //       <div className="result-container">
  //         <h1 className="result-heading">MRI Scan Analysis Results</h1>

  //         <div className="result-summary">
  //           <h2>{resultData.status}</h2>
  //           <p>Scan Quality: {resultData.scanQuality}</p>
  //         </div>

  //         <div className="result-details">
  //           <h2>Detected Conditions</h2>
  //           <ul>
  //             {resultData.detectedIssues.map((issue, index) => (
  //               <li key={index} className="result-item">
  //                 <span className="condition-name">{issue.condition}</span> -{" "}
  //                 <span className={`severity ${issue.detected ? "detected" : "not-detected"}`}>
  //                   {issue.severity}
  //                 </span>
  //                 {issue.detected ? <FaCheckCircle className="icon detected" /> : <FaTimesCircle className="icon not-detected" />}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>

  //         <div className="result-actions">
  //           <button className="download-button">
  //             <FaDownload /> Download Full Report
  //           </button>
  //           <p className="consult-message">Consult a doctor for further medical advice and next steps.</p>
  //         </div>
  //       </div>

        
    
  //       <Footer/>
  //     </>
  //   );
  // }























  // import React from "react";
  // import "./result.css";
  // import {
  //   FaDownload,
  //   FaCheckCircle,
  //   FaTimesCircle
  // } from "react-icons/fa";
  // import Footer from "../footer/Footer";
  // import { useSelector } from "react-redux";

  // export default function ResultPage() {
  //   const result = useSelector((state) => state.prediction);

  //   const resultData = {
  //     status: "Analysis Completed",
  //     scanQuality: "Good",
  //     detectedIssues: [
  //       { condition: "Osteoarthritis", severity: "Mild", detected: true },
  //       { condition: "Chondral Defects", severity: "Moderate", detected: true },
  //       { condition: "Avascular Necrosis", severity: "Not Detected", detected: false },
  //     ],
  //   };

  //   return (
  //     <>
  //       <div className="result-container">
  //         <h1 className="result-heading">MRI Scan Analysis Results</h1>

  //         <div className="result-summary">
  //           <h2>{resultData.status}</h2>
  //           <p>Scan Quality: {resultData.scanQuality}</p>
  //           <p><strong>Detected:</strong> {result.diagnosis} ({(result.probability * 100).toFixed(2)}%)</p>
  //         </div>

  //         <div className="result-details">
  //           <h2>Detected Conditions</h2>
  //           <ul>
  //             {resultData.detectedIssues.map((issue, index) => (
  //               <li key={index} className="result-item">
  //                 <span className="condition-name">{issue.condition}</span> -{" "}
  //                 <span className={`severity ${issue.detected ? "detected" : "not-detected"}`}>
  //                   {issue.severity}
  //                 </span>
  //                 {issue.detected ? (
  //                   <FaCheckCircle className="icon detected" />
  //                 ) : (
  //                   <FaTimesCircle className="icon not-detected" />
  //                 )}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>

  //         <div className="result-actions">
  //           <button className="download-button">
  //             <FaDownload /> Download Full Report
  //           </button>
  //           <p className="consult-message">Consult a doctor for further medical advice and next steps.</p>
  //         </div>
  //       </div>
  //       <Footer />
  //     </>
  //   );
  // }







  import React from "react";
import "./result.css";
import { FaDownload, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import Footer from "../footer/Footer";

export default function ResultPage() {
  const navigate = useNavigate();
  const result = useSelector((state) => state.prediction);
  const fullResults = useSelector((state) => state.prediction.fullResults);

  // Empty state if no results
  if (!fullResults || !result.diagnosis) {
    return (
      <>
        <div className="result-container">
          <h1 className="result-heading">MRI Scan Analysis Results</h1>
          <p className="no-results">No results available. Please upload an MRI scan file first.</p>
          <button
            className="upload-button"
            onClick={() => navigate("/upload")}
          >
            Go to Upload Page
          </button>
        </div>
        <Footer />
      </>
    );
  }

  // Map results to detectedIssues
  const detectedIssues = Object.entries(fullResults).flatMap(([plane, tasks]) =>
    Object.entries(tasks).map(([task, { diagnosis, probability }]) => ({
      condition: `${
        plane.charAt(0).toUpperCase() + plane.slice(1)
      } - ${
        task === "abnormal"
          ? "General Abnormality"
          : task === "acl"
          ? "Anterior Cruciate Ligament"
          : "Meniscus"
      }`,
      severity:
        probability > 0.7 ? "High" : probability > 0.4 ? "Moderate" : "Low",
      detected: diagnosis === "Positive",
      probability: (probability * 100).toFixed(2),
    }))
  );

  const resultData = {
    status: "Analysis Completed",
    scanQuality: "Good",
    detectedIssues,
  };

  // Download PDF report
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("MRI Scan Analysis Report", 10, 10);
    doc.setFontSize(12);
    doc.text("Date: May 22, 2025, 7:26 PM PKT", 10, 20);
    doc.text(`Scan Quality: ${resultData.scanQuality}`, 10, 30);
    doc.text(
      `Primary Finding: ${
        result.task === "abnormal"
          ? "General Abnormality"
          : result.task === "acl"
          ? "Anterior Cruciate Ligament"
          : "Meniscus"
      } in ${result.plane.charAt(0).toUpperCase() + result.plane.slice(1)} Plane - ${
        result.diagnosis
      } (${(result.probability * 100).toFixed(2)}%)`,
      10,
      40
    );

    let yOffset = 50;
    doc.text("Detailed Results:", 10, yOffset);
    yOffset += 10;

    ["axial", "coronal", "sagittal"].forEach((plane) => {
      doc.text(`${plane.charAt(0).toUpperCase() + plane.slice(1)} Plane:`, 10, yOffset);
      yOffset += 10;
      Object.entries(fullResults[plane]).forEach(([task, { diagnosis, probability }]) => {
        const taskName =
          task === "abnormal"
            ? "General Abnormality"
            : task === "acl"
            ? "Anterior Cruciate Ligament"
            : "Meniscus";
        const severity = probability > 0.7 ? "High" : probability > 0.4 ? "Moderate" : "Low";
        doc.text(
          `- ${taskName}: ${diagnosis} (${(probability * 100).toFixed(2)}%, ${severity})`,
          15,
          yOffset
        );
        yOffset += 10;
      });
      yOffset += 5;
    });

    doc.text(
      "Disclaimer: This is an AI-generated analysis. Consult a doctor for a professional diagnosis.",
      10,
      yOffset
    );
    doc.save("mri-report-2025-05-22.pdf");
  };

  return (
    <>
      <div className="result-container">
        <h1 className="result-heading">MRI Scan Analysis Results</h1>

        <div className="result-summary">
          <h2>{resultData.status}</h2>
          <p>Scan Quality: {resultData.scanQuality}</p>
          <p>
            <strong>Primary Finding:</strong>{" "}
            {result.task === "abnormal"
              ? "General Abnormality"
              : result.task === "acl"
              ? "Anterior Cruciate Ligament"
              : "Meniscus"}{" "}
            in {result.plane.charAt(0).toUpperCase() + result.plane.slice(1)} Plane -{" "}
            {result.diagnosis} ({(result.probability * 100).toFixed(2)}%)
          </p>
        </div>

        <div className="result-details">
          <h2>Detailed Results</h2>
          {["axial", "coronal", "sagittal"].map((plane) => (
            <div key={plane} className="plane-section">
              <h3>{plane.charAt(0).toUpperCase() + plane.slice(1)} Plane</h3>
              <ul>
                {resultData.detectedIssues
                  .filter((issue) => issue.condition.startsWith(plane.charAt(0).toUpperCase() + plane.slice(1)))
                  .map((issue, index) => (
                    <li key={index} className="result-item">
                      <span className="condition-name">{issue.condition}</span> -{" "}
                      <span className={`severity ${issue.detected ? "detected" : "not-detected"}`}>
                        {issue.diagnosis} ({issue.probability}%, {issue.severity})
                      </span>
                      {issue.detected ? (
                        <FaCheckCircle className="icon detected" aria-label="Detected" />
                      ) : (
                        <FaTimesCircle className="icon not-detected" aria-label="Not Detected" />
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="result-actions">
          <button className="download-button" onClick={handleDownload}>
            <FaDownload /> Download Full Report
          </button>
          <p className="consult-message">
            Consult a doctor for further medical advice and next steps.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}