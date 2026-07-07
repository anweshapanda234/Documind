import os
import json
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def extract_document_information(ocr_text):

    prompt = f"""
You are an intelligent document parser.

The OCR text below may belong to one of these documents:

- Aadhaar Card
- PAN Card
- Passport
- Driving License
- Resume/CV
- 10th Certificate
- 12th Certificate
- College ID

Your task:

1. Detect the document type.
2. Extract all important fields.
3. Return ONLY valid JSON.

OCR Text:
{ocr_text}

Example Output:

{{
    "document_type":"PAN Card",
    "fields": {{
        "name":"John Doe",
        "pan_number":"ABCDE1234F",
        "dob":"01/01/2000"
    }}
}}

Do not return markdown.
Do not use ```json.
Return only JSON.
"""

    response = model.generate_content(prompt)

    try:
        return json.loads(response.text)

    except Exception:

        return {
            "document_type": "Unknown",
            "fields": {}
        }