function PreviewSection({ file, processedImage }) {
  return (
    <div className="card">
      <h2>Document Preview</h2>

      {/* Original Document */}
      <div className="preview-box">
        {file ? (
          file.type.startsWith("image/") ? (
            <img
              src={URL.createObjectURL(file)}
              alt="Original"
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

      {/* Processed Document */}
      <div className="preview-box">
        {processedImage ? (
          <img
            src={processedImage}
            alt="Processed"
            className="preview-image"
          />
        ) : (
          <p>Processed Document Preview</p>
        )}
      </div>
    </div>
  );
}

export default PreviewSection;