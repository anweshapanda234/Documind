from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, UploadFile, File
import os
import cv2
import easyocr

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.get("/")
def home():
    return {"message":"Backend Running"}

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename) #save the uploaded file to the uploads folder

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    processed_folder = "processed"

    os.makedirs(processed_folder, exist_ok=True)
    
    processed_path=os.path.join(processed_folder, f"processed_{file.filename}")

    image=cv2.imread(file_path) #read the uploaded image using OpenCV

    grey=cv2.cvtColor(image, cv2.COLOR_BGR2GRAY) #convert the image to grayscale

    cv2.imwrite(processed_path, grey) #save the processed image

    return{
        "message": "File uploaded successfully",
        "filename": file.filename,
        "processed_file": processed_path
    }