from fastapi import FastAPI
from models import LoginSchema
from database import InsertUser
from hashPW import HashPW, DecodePW

app = FastAPI()

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