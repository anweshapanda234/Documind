function PreviewSection({ file }) {
  return (
    <div className="card">
      <h2>Document Preview</h2>

      <div className="preview-box">
        {file ? (
          file.type.startsWith("image/") ? (
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="preview-image"
            />
          ) : (
            <div className="pdf-preview">
              <div className="pdf-icon">📄</div>
              <h3>PDF Document</h3>
              <p>{file.name}</p>
            </div>
          )
        ) : (
          <p>No file selected</p>
        )}
      </div>

      <div className="preview-box">
        <p>Processed Document Preview</p>
      </div>
    </div>
  );
}

export default PreviewSection;