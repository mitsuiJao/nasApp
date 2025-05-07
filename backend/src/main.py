from fastapi import FastAPI
import os

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/getfile")
def read_item():
    res = [] 
    os.path.abspath(__file__);
    files = os.listdir();
    for f in files:
        info = os.stat(f)
        res.append({
            "name": f,
            "size": info.st_size,
            "last_modified": info.st_mtime
        })

    return res
