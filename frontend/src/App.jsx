import { useState } from "react";

import UploadSection from "./components/UploadSection";
import PreviewSection from "./components/PreviewSection";
import DocumentType from "./components/DocumentType";
import DynamicForm from "./components/DynamicForm";
import { uploadDocument } from "./api/upload";

import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [processedImage, setProcessedImage] = useState("");
  const [documentData, setDocumentData] = useState(null);
  const handleUpload = async () => {
  if (!file) {
    alert("Please select a file first");
    return;
  }

  try {
    setLoading(true);

    const result = await uploadDocument(file);

    setUploadStatus(result.message);

    setProcessedImage(
      `http://127.0.0.1:8000/${result.processed_file}`
    );
    setDocumentData(result.document);
  

    console.log(result);

   

   
  } catch (error) {
    console.error(error);

    setUploadStatus("Upload Failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container">
      <header className="header">
  <div>
    <h1>DocuMind</h1>
    <p>AI-powered Document Processing & Information Extraction</p>
    
  </div>
</header>

      <div className="top-section">

       
        <UploadSection
          file={file} //read current file state
          setFile={setFile}//update the file state when a new file is uploaded
          handleUpload={handleUpload} //function to handle the upload process
          loading={loading}
       />

        <PreviewSection
          file={file}
          processedImage={processedImage}
        />

      </div>

      <DocumentType documentData={documentData} />

      {uploadStatus && (
        <div className="upload-status">
          {uploadStatus}
        </div>
      )}

    

<DynamicForm documentData={documentData} />

    </div>
  );
}

export default App;
