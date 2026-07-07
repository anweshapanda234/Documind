function RenderData({ data }) {
  if (data === null || data === undefined) {
    return null;
  }

  // Primitive values
  if (typeof data !== "object") {
    return <input type="text" value={data} readOnly />;
  }

  // Arrays
  if (Array.isArray(data)) {
    return (
      <div className="nested-section">
        {data.map((item, index) => (
          <div key={index} className="nested-card">
            <RenderData data={item} />
          </div>
        ))}
      </div>
    );
  }

  // Objects
  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="form-group">

          <label>
            {key
              .replace(/_/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase())}
          </label>

          {typeof value === "object" ? (
            <RenderData data={value} />
          ) : (
            <input
              type="text"
              value={value}
              readOnly
            />
          )}

        </div>
      ))}
    </>
  );
}

function DynamicForm({ documentData }) {

  if (!documentData) {
    return (
      <div className="form-section">
        <h2>Extracted Information</h2>
        <p>Upload a document to view extracted information.</p>
      </div>
    );
  }

  return (
    <div className="form-section">

      <h2>Extracted Information</h2>

      <RenderData data={documentData.fields} />

    </div>
  );
}

export default DynamicForm;