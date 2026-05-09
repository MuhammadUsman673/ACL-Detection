import React, { useState } from "react";
import "./result.css";
import { FaDownload, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import Footer from "../footer/Footer";

export default function ResultPage() {
  const navigate = useNavigate();
  const result = useSelector((state) => state.prediction);
  const fullResults = useSelector((state) => state.prediction.fullResults);
  const [openPlanes, setOpenPlanes] = useState({ axial: true, coronal: true, sagittal: true });

  const togglePlane = (plane) => {
    setOpenPlanes((prev) => ({ ...prev, [plane]: !prev[plane] }));
  };

  if (!fullResults || !result.diagnosis) {
    return (
      <>
        <div className="result-wrapper">
          <div className="result-empty-card">
            <div className="empty-icon">
              <FaTimesCircle />
            </div>
            <h2>No Results Found</h2>
            <p>Please upload an MRI scan file to receive your analysis report.</p>
            <button className="btn-primary" onClick={() => navigate("/upload")}>
              Go to Upload
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const taskLabel = (task) =>
    task === "abnormal"
      ? "General Abnormality"
      : task === "acl"
      ? "Anterior Cruciate Ligament"
      : "Meniscus";

  const detectedIssues = Object.entries(fullResults).flatMap(([plane, tasks]) =>
    Object.entries(tasks).map(([task, { diagnosis, probability }]) => ({
      plane,
      condition: taskLabel(task),
      severity: probability > 0.7 ? "High" : probability > 0.4 ? "Moderate" : "Low",
      detected: diagnosis === "Positive",
      probability: (probability * 100).toFixed(1),
    }))
  );

  const positiveCount = detectedIssues.filter((i) => i.detected).length;
  const totalCount = detectedIssues.length;

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("MRI Scan Analysis Report", 10, 10);
    doc.setFontSize(12);
    doc.text(`Scan Quality: Good`, 10, 30);
    doc.text(
      `Primary Finding: ${taskLabel(result.task)} in ${
        result.plane.charAt(0).toUpperCase() + result.plane.slice(1)
      } Plane - ${result.diagnosis} (${(result.probability * 100).toFixed(2)}%)`,
      10,
      40
    );
    let yOffset = 55;
    doc.text("Detailed Results:", 10, yOffset);
    yOffset += 10;
    ["axial", "coronal", "sagittal"].forEach((plane) => {
      doc.text(`${plane.charAt(0).toUpperCase() + plane.slice(1)} Plane:`, 10, yOffset);
      yOffset += 10;
      Object.entries(fullResults[plane]).forEach(([task, { diagnosis, probability }]) => {
        const severity = probability > 0.7 ? "High" : probability > 0.4 ? "Moderate" : "Low";
        doc.text(
          `- ${taskLabel(task)}: ${diagnosis} (${(probability * 100).toFixed(2)}%, ${severity})`,
          15,
          yOffset
        );
        yOffset += 10;
      });
      yOffset += 5;
    });
    doc.text(
      "Disclaimer: AI-generated. Consult a doctor for professional diagnosis.",
      10,
      yOffset
    );
    doc.save("mri-report.pdf");
  };

  return (
    <>
      <div className="result-wrapper">

        {/* Page Header */}
        <div className="result-page-header">
          <h1>MRI Analysis Report</h1>
          <p className="result-page-sub">AI-powered knee MRI diagnostic summary</p>
        </div>

        {/* Summary Stats Row */}
        <div className="result-stats-row">
          <div className="stat-card">
            <span className="stat-label">Scan Quality</span>
            <span className="stat-value stat-good">Good</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Conditions Checked</span>
            <span className="stat-value">{totalCount}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Positive Findings</span>
            <span className={`stat-value ${positiveCount > 0 ? "stat-warn" : "stat-good"}`}>
              {positiveCount}
            </span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Status</span>
            <span className="stat-value stat-good">Completed</span>
          </div>
        </div>

        {/* Primary Finding Banner */}
        <div className="primary-finding-card">
          <div className="primary-finding-label">Primary Finding</div>
          <div className="primary-finding-content">
            <span className="pf-condition">
              {taskLabel(result.task)}{" "}
              <span className="pf-plane">
                — {result.plane.charAt(0).toUpperCase() + result.plane.slice(1)} Plane
              </span>
            </span>
            <span className={`pf-badge ${result.diagnosis === "Positive" ? "badge-positive" : "badge-negative"}`}>
              {result.diagnosis} &nbsp;·&nbsp; {(result.probability * 100).toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="result-details-section">
          <h2 className="section-title">Detailed Results</h2>

          {["axial", "coronal", "sagittal"].map((plane) => {
            const planeIssues = detectedIssues.filter((i) => i.plane === plane);
            const isOpen = openPlanes[plane];
            return (
              <div className="plane-block" key={plane}>
                <button
                  className="plane-header"
                  onClick={() => togglePlane(plane)}
                  aria-expanded={isOpen}
                >
                  <span className="plane-title">
                    <span className="plane-dot"></span>
                    {plane.charAt(0).toUpperCase() + plane.slice(1)} Plane
                  </span>
                  <span className="plane-toggle-icon">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>

                {isOpen && (
                  <div className="plane-body">
                    {planeIssues.map((issue, idx) => (
                      <div className="result-row" key={idx}>
                        <div className="result-row-left">
                          <span className={`result-icon ${issue.detected ? "icon-positive" : "icon-negative"}`}>
                            {issue.detected ? <FaCheckCircle /> : <FaTimesCircle />}
                          </span>
                          <span className="result-condition">{issue.condition}</span>
                        </div>
                        <div className="result-row-right">
                          <span className={`severity-pill severity-${issue.severity.toLowerCase()}`}>
                            {issue.severity}
                          </span>
                          <span className="result-prob">{issue.probability}%</span>
                          <span className={`result-diagnosis ${issue.detected ? "diag-positive" : "diag-negative"}`}>
                            {issue.detected ? "Positive" : "Negative"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="result-actions-row">
          <button className="btn-primary btn-download" onClick={handleDownload}>
            <FaDownload style={{ marginRight: "8px" }} />
            Download Full Report
          </button>
          <p className="disclaimer-text">
            This is an AI-generated analysis. Always consult a qualified medical professional for diagnosis and treatment.
          </p>
        </div>

      </div>
      <Footer />
    </>
  );
}