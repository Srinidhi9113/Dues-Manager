import bcrypt

def HashPW(password:str):
    salt = bcrypt.gensalt()
    hashed_pw = bcrypt.hashpw(password.encode('utf-8'),salt)
    stored_pw = salt+hashed_pw
    return str(stored_pw)

def DecodePW(password:str,stored_pw:str):
    salt = stored_pw[2:31]
    pw = stored_pw[31:-1]
    hashed_pw = bcrypt.hashpw(password.encode('utf-8'),salt.encode('utf-8'))
    return hashed_pw==pw
