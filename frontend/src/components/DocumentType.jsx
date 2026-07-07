function DocumentType({ documentData }) {
  return (
    <div className="document-type">
      <h3>
        Document Type:{" "}
        {documentData
          ? documentData.document_type
          : "Not Detected"}
      </h3>
    </div>
  );
}

export default DocumentType;