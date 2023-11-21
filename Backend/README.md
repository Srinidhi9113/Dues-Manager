# Backend for the project

**Before you start**
- Install required packages:
```
pip install -r requirements.txt
```

- Create a .env file entering the details of your database
```
DB_USERNAME = "your_root"
DB_PASSWORD = "your_password"
DB_HOST = "your_host"
DB_DATABASE = "My_University"
```

**To start the fast api server:**
```
uvicorn main:app --reload
```

**Initialise your database with the sql files in the parent directory**

- DDL.sql - Create all the tables used in the project
- SelectProcedures.sql - Create all the procedures to enter data into respective tables
- insertProcedure.sql - Create procedures to insert data into tables
- UpdateProcedure.sql - Create procedures to update tables used in the project
- deleteTrigger.sql - Create a trigger to automatically delete a record in one of the table on update
- dropDB.sql - To selectively drop tables, procedures, functions and triggers created in the project(**Run ony if reqd)

