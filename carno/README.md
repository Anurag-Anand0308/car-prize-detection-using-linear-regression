# Carno

Carno is a React frontend and FastAPI backend for estimating used car prices.

## Run the backend

From `d:\project\cames`:

```powershell
pip install -r backend/requirements.txt
python backend/train_model.py
python -m uvicorn backend.main:app --reload --host 127.0.0.1 --port 5000
```

The API is available at `http://127.0.0.1:5000`. It exposes `GET /health` and `POST /predict`.

## Run the frontend

From `d:\project\cames\carno`:

```powershell
npm install
npm run dev
```

The frontend defaults to `http://localhost:5000` for the API. Copy `.env.example` to `.env` to override it with `VITE_API_URL`.

The backend trains a compatible pipeline from `data.csv` using the five fields collected by the UI. The original `gradient_boosting_model.joblib` expects 14 unnamed features and has no preprocessing artifact, so it is retained separately rather than used with an unsafe feature mapping.
