import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

host = os.getenv("DB_HOST")
user = os.getenv("DB_USERNAME")
password = os.getenv("DB_PASSWORD")
database = os.getenv("DB_DATABASE")

def InsertUser(data):
    mydb = mysql.connector.connect(
        host=host,
        user=user,
        password=password,
        database=database
    )
    mycursor = mydb.cursor()
    query = "INSERT INTO Login(admin_id,admin_pw,admin_role) VALUES (%s,%s,%s)"
    try:
        mycursor.execute(query,(data["name"],data["password"],data["role"]))
        mydb.commit()
        mycursor.close()
        return True
    except:
        mydb.commit()
        mycursor.close()
        return False
    
