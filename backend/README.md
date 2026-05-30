# Backend

FastAPI backend for McGill Seat Notification.

## Requirements

- Python 3.11+

## Setup

```bash
cd backend

# Create and activate virtual environment
python -m venv .venv
.venv\Scripts\activate        # Windows
source .venv/bin/activate     # macOS/Linux

# Install dependencies
pip install -e .

# Configure environment
cp .env.example .env
```

Edit `.env` as needed before running.

## Running

```bash
uvicorn app.main:app --reload
```

Server starts at `http://localhost:8000`.

## Environment Variables

| Variable   | Default       | Description          |
|------------|---------------|----------------------|
| `APP_ENV`  | `development` | Runtime environment  |
| `APP_HOST` | `0.0.0.0`     | Host to bind to      |
| `APP_PORT` | `8000`        | Port to listen on    |

## API

| Method | Path      | Description        |
|--------|-----------|--------------------|
| GET    | `/health` | Health check       |

## Running Tests

```bash
pip install -e ".[dev]"
pytest
```
