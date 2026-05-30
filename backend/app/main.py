from fastapi import FastAPI
from app.config import APP_ENV

app = FastAPI(title="McGill Seat Notification", version="0.1.0")


@app.get("/health")
def health():
    return {"status": "ok", "env": APP_ENV}
