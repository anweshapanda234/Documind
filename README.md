# 📄 DocuMind – AI Powered Document Processing & Information Extraction

DocuMind is an AI-powered document intelligence platform that automates document processing using Computer Vision, Optical Character Recognition (OCR), and Large Language Models (LLMs). The application intelligently extracts structured information from multiple document types, automatically detects the document category, and presents the extracted data through a dynamic user interface.

---

## 🚀 Features

- Upload and process image-based documents
- Image preprocessing using OpenCV
- OCR-based text extraction using EasyOCR
- AI-powered document type detection using Google Gemini
- Automatic extraction of structured information in JSON format
- Dynamic form generation based on the detected document type
- JSON-based metadata tracking for processed documents
- Original and processed document preview
- Modular React and FastAPI architecture

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- FastAPI
- Python

### AI & Computer Vision
- OpenCV
- EasyOCR
- Google Gemini API

### Storage
- JSON (Metadata Tracking)

### Tools
- Git
- GitHub
- Visual Studio Code

---

## 🏗️ System Architecture

```text
                React Frontend
                      │
             Upload Document
                      │
                      ▼
               FastAPI Backend
                      │
        ┌─────────────┴─────────────┐
        │                           │
        ▼                           ▼
   Save Original File         OpenCV Processing
      (uploads/)               (Grayscale)
        │                           │
        └─────────────┬─────────────┘
                      ▼
                  EasyOCR
                      │
             Extract Raw Text
                      │
                      ▼
                 Gemini API
                      │
      Detect Document Type
   Extract Structured Fields
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
 Dynamic Form Generation    Metadata Tracking
```

---

## ⚙️ Workflow

1. User uploads a document through the React frontend.
2. FastAPI receives and stores the uploaded document.
3. OpenCV preprocesses the image to improve OCR performance.
4. EasyOCR extracts text from the processed document.
5. Gemini API identifies the document type and extracts structured information.
6. The extracted data is displayed dynamically in the frontend.
7. Metadata including filename, document type, processing status, and timestamp is stored in a JSON file.

---

<img width="2418" height="1132" alt="image" src="https://github.com/user-attachments/assets/14a60501-b0a5-4fe3-af21-4459f4a78e03" />


## 📂 Project Structure

```text
AI_document_processor/
│
├── backend/
│   ├── routers/
│   ├── services/
│   │   ├── image_processing.py
│   │   ├── ocr_service.py
│   │   ├── gemini_service.py
│   │   └── metadata_service.py
│   ├── uploads/
│   ├── processed/
│   ├── metadata/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── api/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 📌 Supported Documents

- Resume / CV
- Aadhaar Card
- PAN Card
- Passport
- Driving License
- College ID
- Class 10 Certificate
- Class 12 Certificate

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/AI_document_processor.git
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **backend** directory.

```env
GEMINI_API_KEY=YOUR_API_KEY
```

> **Note:** Never commit your `.env` file or API keys to GitHub.

---

## 🔮 Future Enhancements

- OCR support for PDF documents
- Upload history dashboard
- Download extracted information as JSON
- Enhanced visualization of nested extracted data
- Database integration
- User authentication and authorization

---

## 👩‍💻 Author

**Anwesha Panda**

---

## ⭐ Acknowledgements

- OpenCV
- EasyOCR
- Google Gemini API
- FastAPI
- React.js
