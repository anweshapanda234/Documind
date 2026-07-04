import os
import cv2
from fastapi import UploadFile

UPLOAD_FOLDER = "uploads"
PROCESSED_FOLDER = "processed"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PROCESSED_FOLDER, exist_ok=True)


async def process_uploaded_image(file: UploadFile):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    processed_path = os.path.join(
        PROCESSED_FOLDER,
        f"processed_{file.filename}"
    )

    image = cv2.imread(file_path)

    gray = cv2.cvtColor(
        image,
        cv2.COLOR_BGR2GRAY
    )

    cv2.imwrite(
        processed_path,
        gray
    )

    return {
        "message": "File uploaded and processed successfully",
        "filename": file.filename,
        "processed_file": processed_path
    }