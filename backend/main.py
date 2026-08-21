from pathlib import Path

import joblib
import pandas as pd
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

MODEL_PATH = Path(__file__).resolve().parent / 'car_price_model.joblib'

app = FastAPI(title='Carno Price Prediction API', version='1.0.0')
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173', 'http://127.0.0.1:5173'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

try:
    model = joblib.load(MODEL_PATH)
except FileNotFoundError as error:
    raise RuntimeError('Model file is missing. Run: python backend/train_model.py') from error


class PredictionRequest(BaseModel):
    age: float = Field(alias='Age', ge=0, le=100)
    engine_hp: float = Field(alias='Engine HP', gt=0, le=3000)
    engine_cylinders: float = Field(alias='Engine Cylinders', gt=0, le=16)
    transmission_type: str = Field(alias='Transmission Type', min_length=1)
    driven_wheels: str = Field(alias='Driven_Wheels', min_length=1)

    model_config = {'populate_by_name': True}


@app.get('/health')
def health_check() -> dict[str, str]:
    return {'status': 'ok'}


@app.post('/predict')
def predict_price(request: PredictionRequest) -> dict[str, float]:
    row = pd.DataFrame([{
        'Age': request.age,
        'Engine HP': request.engine_hp,
        'Engine Cylinders': request.engine_cylinders,
        'Transmission Type': request.transmission_type,
        'Driven_Wheels': request.driven_wheels,
    }])
    try:
        prediction = float(model.predict(row)[0])
    except Exception as error:
        raise HTTPException(status_code=500, detail='The model could not process these car details.') from error
    return {'predicted_price': round(max(0, prediction), 2)}
