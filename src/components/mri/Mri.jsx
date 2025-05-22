// import React, { useRef, useState } from "react";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../../firebase";
// import Footer from "../footer/Footer";
// import "./mri.css";
// import axios from "axios";

// export default function MRIUpload() {
//   const fileInputRef = useRef(null);
//   const navigate = useNavigate();
//   const [uploadMessage, setUploadMessage] = useState("");
//   const [isValidScan, setIsValidScan] = useState(false);

//   const checkLogin = () => {
//     if (!auth.currentUser) {
//       alert("You must log in to upload files!");
//       navigate("/login");
//       return false;
//     }
//     return true;
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0]; // Expect a single file
//     if (!file) {
//       setUploadMessage("❌ No file selected.");
//       return;
//     }

//     if (!file.name.endsWith('.npy')) {
//       setUploadMessage("❌ Only .npy files are accepted.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("files", file);

//     setUploadMessage("⏳ Uploading & analyzing...");
//     axios
//       .post("http://localhost:5000/predict", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         console.log("Prediction Result:", res.data);
//         setUploadMessage("✅ Prediction complete. Check console for result.");
//         setIsValidScan(true);
//       })
//       .catch((err) => {
//         console.error(err);
//         setUploadMessage(`❌ Upload failed: ${err.response?.data?.error || err.message}`);
//         setIsValidScan(false);
//       });
//   };

//   const handleUploadClick = () => {
//     if (checkLogin()) {
//       fileInputRef.current?.click();
//     }
//   };

//   return (
//     <>
//       <div className="main-container">
//         <div className="containerc">
//           <h1 className="titlec">Result One Click Away</h1>
//           <h2 className="subtitlec">Advanced AI Analysis for MRI Scans</h2>
//           <p className="descriptionc">
//             Upload your MRI scan data (.npy format, 3D array with 10–24 slices) for instant, AI-powered analysis and interpretation.
//           </p>

//           <div className="upload-section">
//             <h2 className="upload-heading">Upload Your MRI Scan Here</h2>
//             <div
//               className="upload-box"
//               role="button"
//               tabIndex={0}
//               onClick={handleUploadClick}
//               onKeyPress={(e) => e.key === "Enter" && handleUploadClick()}
//             >
//               <FaCloudUploadAlt className="upload-icon" />
//               <p className="upload-text">Click to upload or drag and drop</p>
//               <p className="upload-formats">Only .npy files are accepted (3D MRI array, 10–24 slices)</p>
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 className="file-input"
//                 onChange={handleFileChange}
//                 accept=".npy"
//                 style={{ display: "none" }}
//               />
//             </div>
//           </div>

//           {uploadMessage && (
//             <div className={`upload-message ${isValidScan ? "valid" : "invalid"}`}>
//               {uploadMessage}
//             </div>
//           )}

//           <button className="upload-button" onClick={handleUploadClick}>
//             Submit
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }






// import React, { useRef, useState } from "react";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../../firebase";
// import Footer from "../footer/Footer";
// import "./mri.css";
// import { useDispatch } from "react-redux";


// export default function MRIUpload() {
//   const fileInputRef = useRef(null);
//   const navigate = useNavigate();
//   const [uploadMessage, setUploadMessage] = useState("");
//   const [isValidScan, setIsValidScan] = useState(false);
//   const dispatch = useDispatch();

//   const checkLogin = () => {
//     if (!auth.currentUser) {
//       alert("You must log in to upload files!");
//       navigate("/login");
//       return false;
//     }
//     return true;
//   };

//   function getHighestProbabilityDisease(data) {
//     let maxProb = -1;
//     let result = {
//       plane: null,
//       task: null,
//       probability: null,
//       diagnosis: null,
//     };

//     for (const plane in data) {
//       for (const task in data[plane]) {
//         const { probability, diagnosis } = data[plane][task];
//         if (probability > maxProb) {
//           maxProb = probability;
//           result = { plane, task, probability, diagnosis };
//         }
//       }
//     }
//     return result;
//   }

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (!file) {
//       setUploadMessage("❌ No file selected.");
//       return;
//     }
//     if (!file.name.toLowerCase().endsWith('.npy')) {
//       setUploadMessage("❌ Only .npy files are accepted.");
//       return;
//     }
//     if (file.size > 16 * 1024 * 1024) {
//       setUploadMessage("❌ File size exceeds 16MB limit.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("files", file);

//     setUploadMessage("⏳ Uploading...");

//     const xhr = new XMLHttpRequest();
//     xhr.upload.onprogress = (e) => {
//       if (e.lengthComputable) {
//         const percent = (e.loaded / e.total) * 100;
//         setUploadMessage(`⏳ Uploading... ${percent.toFixed(0)}%`);
//       }
//     };

//     xhr.open("POST", "http://localhost:5000/predict");
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         const res = JSON.parse(xhr.responseText);
//         console.log("Prediction Result:", JSON.stringify(res, null, 2));
//         const highest = getHighestProbabilityDisease(res);
//         dispatch(setPredictionResult(highest));

//         setUploadMessage("✅ Prediction complete. Redirecting to results...");
//         setIsValidScan(true);
//         setTimeout(() => navigate("/results", { state: { results: res } }), 1000);
//       } else {
//         const error = JSON.parse(xhr.responseText)?.error || `Server responded with status ${xhr.status}`;
//         console.error("Upload error:", error);
//         setUploadMessage(`❌ Upload failed: ${error}`);
//         setIsValidScan(false);
//       }
//     };

//     xhr.onerror = () => {
//       console.error("Network error:", {
//         status: xhr.status,
//         statusText: xhr.statusText,
//       });
//       setUploadMessage("❌ Upload failed: Network error. Please ensure the server is running.");
//       setIsValidScan(false);
//     };

//     xhr.send(formData);
//   };

//   const handleUploadClick = () => {
//     if (checkLogin()) {
//       fileInputRef.current?.click();
//     }
//   };

//   return (
//     <>
//       <div className="main-container">
//         <div className="containerc">
//           <h1 className="titlec">Result One Click Away</h1>
//           <h2 className="subtitlec">Advanced AI Analysis for MRI Scans</h2>
//           <p className="descriptionc">
//             Upload your MRI scan data (.npy format, 3D array with 10–24 slices, max 16MB) for instant, AI-powered analysis.
//           </p>

//           <div className="upload-section">
//             <h2 className="upload-heading">Upload Your MRI Scan Here</h2>
//             <div
//               className="upload-box"
//               role="button"
//               tabIndex={0}
//               onClick={handleUploadClick}
//               onKeyPress={(e) => e.key === "Enter" && handleUploadClick()}
//             >
//               <FaCloudUploadAlt className="upload-icon" />
//               <p className="upload-text">Click to upload or drag and drop</p>
//               <p className="upload-formats">Only .npy files accepted (3D MRI array, 10–24 slices, max 16MB)</p>
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 className="file-input"
//                 onChange={handleFileChange}
//                 accept=".npy"
//                 style={{ display: "none" }}
//               />
//             </div>
//           </div>

//           {uploadMessage && (
//             <div className={`upload-message ${isValidScan ? "valid" : "invalid"}`}>
//               {uploadMessage}
//             </div>
//           )}

//           <button className="upload-button" onClick={handleUploadClick}>
//             Submit
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }














  // import React, { useRef, useState } from "react";
  // import { FaCloudUploadAlt } from "react-icons/fa";
  // import { useNavigate } from "react-router-dom";
  // import { auth } from "../../firebase";
  // import Footer from "../footer/Footer";
  // import "./mri.css";
  // import { useDispatch } from "react-redux";
  // import { setPredictionResult } from '../slice';


  // export default function MRIUpload() {
  //   const fileInputRef = useRef(null);
  //   const navigate = useNavigate();
  //   const [uploadMessage, setUploadMessage] = useState("");
  //   const [isValidScan, setIsValidScan] = useState(false);
  //   const dispatch = useDispatch();

  //   const checkLogin = () => {
  //     if (!auth.currentUser) {
  //       alert("You must log in to upload files!");
  //       navigate("/login");
  //       return false;
  //     }
  //     return true;
  //   };

  //   function getHighestProbabilityDisease(data) {
  //     let maxProb = -1;
  //     let result = {
  //       plane: null,
  //       task: null,
  //       probability: null,
  //       diagnosis: null,
  //     };

  //     for (const plane in data) {
  //       for (const task in data[plane]) {
  //         const { probability, diagnosis } = data[plane][task];
  //         if (probability > maxProb) {
  //           maxProb = probability;
  //           result = { plane, task, probability, diagnosis };
  //         }
  //       }
  //     }
  //     return result;
  //   }

  //   const handleFileChange = (event) => {
  //     const file = event.target.files[0];
  //     if (!file) {
  //       setUploadMessage("❌ No file selected.");
  //       return;
  //     }
  //     if (!file.name.toLowerCase().endsWith('.npy')) {
  //       setUploadMessage("❌ Only .npy files are accepted.");
  //       return;
  //     }
  //     if (file.size > 16 * 1024 * 1024) {
  //       setUploadMessage("❌ File size exceeds 16MB limit.");
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append("files", file);

  //     setUploadMessage("⏳ Uploading...");

  //     const xhr = new XMLHttpRequest();
  //     xhr.upload.onprogress = (e) => {
  //       if (e.lengthComputable) {
  //         const percent = (e.loaded / e.total) * 100;
  //         setUploadMessage(`⏳ Uploading... ${percent.toFixed(0)}%`);
  //       }
  //     };

  //     xhr.open("POST", "http://localhost:5000/predict");
  //     xhr.onload = () => {
  //       if (xhr.status === 200) {
  //         const res = JSON.parse(xhr.responseText);
  //         console.log("Prediction Result:", JSON.stringify(res, null, 2));
  //         const highest = getHighestProbabilityDisease(res);
  //         dispatch(setPredictionResult(highest));

  //         setUploadMessage("✅ Prediction complete. Redirecting to results...");
  //         setIsValidScan(true);
  //         setTimeout(() => navigate("/results", { state: { results: res } }), 1000);
  //       } else {
  //         const error = JSON.parse(xhr.responseText)?.error || `Server responded with status ${xhr.status}`;
  //         console.error("Upload error:", error);
  //         setUploadMessage(`❌ Upload failed: ${error}`);
  //         setIsValidScan(false);
  //       }
  //     };

  //     xhr.onerror = () => {
  //       console.error("Network error:", {
  //         status: xhr.status,
  //         statusText: xhr.statusText,
  //       });
  //       setUploadMessage("❌ Upload failed: Network error. Please ensure the server is running.");
  //       setIsValidScan(false);
  //     };

  //     xhr.send(formData);
  //   };

  //   const handleUploadClick = () => {
  //     if (checkLogin()) {
  //       fileInputRef.current?.click();
  //     }
  //   };

  //   return (
  //     <>
  //       <div className="main-container">
  //         <div className="containerc">
  //           <h1 className="titlec">Result One Click Away</h1>
  //           <h2 className="subtitlec">Advanced AI Analysis for MRI Scans</h2>
  //           <p className="descriptionc">
  //             Upload your MRI scan data (.npy format, 3D array with 10–24 slices, max 16MB) for instant, AI-powered analysis.
  //           </p>

  //           <div className="upload-section">
  //             <h2 className="upload-heading">Upload Your MRI Scan Here</h2>
  //             <div
  //               className="upload-box"
  //               role="button"
  //               tabIndex={0}
  //               onClick={handleUploadClick}
  //               onKeyPress={(e) => e.key === "Enter" && handleUploadClick()}
  //             >
  //               <FaCloudUploadAlt className="upload-icon" />
  //               <p className="upload-text">Click to upload or drag and drop</p>
  //               <p className="upload-formats">Only .npy files accepted (3D MRI array, 10–24 slices, max 16MB)</p>
  //               <input
  //                 type="file"
  //                 ref={fileInputRef}
  //                 className="file-input"
  //                 onChange={handleFileChange}
  //                 accept=".npy"
  //                 style={{ display: "none" }}
  //               />
  //             </div>
  //           </div>

  //           {uploadMessage && (
  //             <div className={`upload-message ${isValidScan ? "valid" : "invalid"}`}>
  //               {uploadMessage}
  //             </div>
  //           )}

  //           <button className="upload-button" onClick={handleUploadClick}>
  //             Submit
  //           </button>
  //         </div>
  //       </div>
  //       <Footer />
  //     </>
  //   );
  // }







import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Footer from "../footer/Footer";
import "./mri.css";
import { useDispatch } from "react-redux";
import { setPredictionResult } from "../slice";

export default function MRIUpload() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [uploadMessage, setUploadMessage] = useState("");
  const [isValidScan, setIsValidScan] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Enhanced login check that shows a message and redirects
  const checkLogin = () => {
    if (!auth.currentUser) {
      setUploadMessage("❌ You must log in to upload files!");
      setTimeout(() => navigate("/login"), 1500);
      return false;
    }
    return true;
  };

  function getHighestProbabilityDisease(data) {
    let maxProb = -1;
    let result = {
      plane: null,
      task: null,
      probability: null,
      diagnosis: null,
    };

    for (const plane in data) {
      for (const task in data[plane]) {
        const { probability, diagnosis } = data[plane][task];
        if (probability > maxProb) {
          maxProb = probability;
          result = { plane, task, probability, diagnosis };
        }
      }
    }
    return result;
  }

  const handleFileChange = (event) => {
    // First check if user is logged in
    if (!checkLogin()) {
      return;
    }

    const file = event.target.files[0];
    if (!file) {
      setUploadMessage("❌ No file selected.");
      setSelectedFile(null);
      return;
    }
    if (!file.name.toLowerCase().endsWith('.npy')) {
      setUploadMessage("❌ Only .npy files are accepted.");
      setSelectedFile(null);
      return;
    }
    if (file.size > 16 * 1024 * 1024) {
      setUploadMessage("❌ File size exceeds 16MB limit.");
      setSelectedFile(null);
      return;
    }
    setUploadMessage("✅ File selected. Click Submit to upload.");
    setSelectedFile(file);
  };

  const handleUploadClick = () => {
    if (!checkLogin()) return;
    if (!selectedFile) {
      setUploadMessage("❌ Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("files", selectedFile);
    setUploadMessage("⏳ Uploading...");

    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        const percent = (e.loaded / e.total) * 100;
        setUploadMessage(`⏳ Uploading... ${percent.toFixed(0)}%`);
      }
    };

    xhr.open("POST", "http://localhost:5000/predict");
    xhr.onload = () => {
      try {
        if (xhr.status === 200) {
          const res = JSON.parse(xhr.responseText);
          console.log("Prediction Result:", JSON.stringify(res, null, 2));
          const highest = getHighestProbabilityDisease(res);
          dispatch(setPredictionResult({ highest, fullResults: res }));
          setUploadMessage("✅ Prediction complete. Redirecting to results...");
          setIsValidScan(true);
          setTimeout(() => navigate("/results"), 1000);
        } else {
          const error = JSON.parse(xhr.responseText)?.error || `Server responded with status ${xhr.status}`;
          setUploadMessage(`❌ Upload failed: ${error}`);
          setIsValidScan(false);
        }
      } catch (e) {
        setUploadMessage("❌ Upload failed: Invalid server response.");
        setIsValidScan(false);
      }
    };

    xhr.onerror = () => {
      setUploadMessage("❌ Upload failed: Network error. Please ensure the server is running.");
      setIsValidScan(false);
    };

    xhr.send(formData);
  };

  return (
    <>
      <div className="main-container">
        <div className="containerc">
          <h1 className="titlec">Result One Click Away</h1>
          <h2 className="subtitlec">Advanced AI Analysis for MRI Scans</h2>
          <p className="descriptionc">
            Upload your MRI scan data (.npy format, 3D array with 10–24 slices, max 16MB) for instant, AI-powered analysis.
          </p>

          <div className="upload-section">
            <h2 className="upload-heading">Upload Your MRI Scan Here</h2>
            <div
              className="upload-box"
              role="button"
              tabIndex={0}
              onClick={() => {
                if (checkLogin()) {
                  fileInputRef.current?.click();
                }
              }}
              onKeyPress={(e) => e.key === "Enter" && checkLogin() && fileInputRef.current?.click()}
            >
              <FaCloudUploadAlt className="upload-icon" />
              <p className="upload-text">Click to upload or drag and drop</p>
              <p className="upload-formats">Only .npy files accepted (3D MRI array, 10–24 slices, max 16MB)</p>
              <input
                type="file"
                ref={fileInputRef}
                className="file-input"
                onChange={handleFileChange}
                accept=".npy"
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
            disabled={!auth.currentUser} // Disable button if not logged in
          >
            {auth.currentUser ? "Submit" : "Please Login First"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}













