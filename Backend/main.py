from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import LoginSchema
from database import *
from hashPW import HashPW, DecodePW

origins = [
    "http://localhost:5173",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def root():
    return {"message":"Hello World"}

@app.post("/login")
def Login(body : LoginSchema):
    user_id = body.name
    return user_id

@app.post("/signup")
def Signup(body:LoginSchema):
    user_id = body.name
    role = user_id[3:6]
    pw = body.password
    stored_pw = HashPW(pw)
    if(InsertUser({"name":user_id,"password":stored_pw,"role":role})):
        return "Success"
    else:
        return "Failed"

@app.get("/student/{infra}/{student_id}")
def GetDueInfo(infra:str,student_id:str):
    data = GetDuesFromDB(student_id,infra)
    return data