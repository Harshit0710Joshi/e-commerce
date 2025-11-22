from fastapi import FastAPI
from app.auth.routes import router as auth_router
from app.models import User
from app.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth_router)
