from fastapi import APIRouter, UploadFile, File
from services.image_processing import process_uploaded_image

router = APIRouter()


@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):

    result = await process_uploaded_image(file)

    return result