from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import os

origins = []
DIR = './dir'

app = FastAPI()

app.add_middleware(
	CORSMiddleware,
	allow_origins=["*"],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"]
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/getfile")
def read_item():
    res = [] 
    files = os.listdir(DIR);
    for f in files:
        info = os.stat(DIR + "/" + f)
        res.append({
            "name": f,
            "size": info.st_size,
            "last_modified": info.st_mtime
        })

    return res


@app.post("/upload")
def upload_file(file: UploadFile = File(...)):
	uppath = Path(DIR)
	uppath.mkdir(parents=True, exist_ok=True)
	save_path = uppath / file.filename

	try:
		with save_path.open("wb") as buffer:
			chunk_size = 1024 * 1024
			while chunk := file.file.read(chunk_size):
				buffer.write(chunk)
	finally:
		file.file.close()

	return {"filename": file.filename}

