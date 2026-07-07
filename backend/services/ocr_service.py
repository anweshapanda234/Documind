import easyocr

# Load the OCR model only once when the server starts
reader = easyocr.Reader(['en'])


def extract_text(image_path):
    """
    Extract text from an image using EasyOCR.
    """

    results = reader.readtext(image_path)

    extracted_text = []

    for result in results:
        extracted_text.append(result[1])

    return "\n".join(extracted_text)