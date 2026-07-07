import json
import os
from datetime import datetime

METADATA_FOLDER = "metadata"
METADATA_FILE = os.path.join(METADATA_FOLDER, "metadata.json")

os.makedirs(METADATA_FOLDER, exist_ok=True)

if not os.path.exists(METADATA_FILE):
    with open(METADATA_FILE, "w") as file:
        json.dump([], file, indent=4)


def save_metadata(filename, document_type):

    with open(METADATA_FILE, "r") as file:
        metadata = json.load(file)

    metadata.append({
        "filename": filename,
        "document_type": document_type,
        "status": "Processed",
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    })

    with open(METADATA_FILE, "w") as file:
        json.dump(metadata, file, indent=4)