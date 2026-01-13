from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .auth.routes import router as auth_router
from .models import User
from .database import Base, engine, SessionLocal
from .utils import hash_password
from sqlalchemy.orm import Session
from .admin import router as admin_router

Base.metadata.create_all(bind=engine)

# Seed an admin user for development (admin@example.com / adminpass)
db: Session = SessionLocal()
if not db.query(User).filter(User.email == "admin@example.com").first():
    admin_user = User(email="admin@example.com", password=hash_password("adminpass"), is_verified=True, role="admin")
    db.add(admin_user)
    db.commit()

app = FastAPI()

import os

# Allow requests from frontend origins (dev and production)
frontend_origins = os.getenv("FRONTEND_ORIGINS", "http://localhost:3000").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=frontend_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(admin_router)
