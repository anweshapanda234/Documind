import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

function UploadSection({
  file,
  setFile,
  handleUpload,
  loading
}) {
  const [dragActive, setDragActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const uploadedFile = e.dataTransfer.files[0];

    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];

    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    <div className="card">
      <h2>Upload Document</h2>

      <div
        className={`upload-zone ${dragActive ? "drag-active" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="upload-icon">
          <FiUploadCloud />
        </div>

        <h3>Drag & Drop Files Here</h3>

        <p>
          Aadhaar • PAN • Passport • Resume • Certificates • PDF • JPG • PNG
        </p>

        <label className="browse-btn">
          Browse Files
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            hidden
          />
        </label>

        {file && (
          <div className="file-info">
            <h4>Selected File</h4>

            <p>
              <strong>Name:</strong> {file.name}
            </p>

            <p>
              <strong>Type:</strong> {file.type}
            </p>

            <p>
              <strong>Size:</strong>{" "}
              {(file.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}
      </div>

      <button
        className="upload-btn"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload Document"}
     </button>
    </div>
  );
}

export default UploadSection;