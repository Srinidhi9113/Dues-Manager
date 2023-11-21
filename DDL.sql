CREATE DATABASE My_University;

USE My_University;

CREATE TABLE Student(
student_id varchar(13),
student_name char(20),
student_pw varchar(92),
dept char(3),
batch char(1),
primary key (student_id)
);

CREATE TABLE Library(
library_id varchar(13),
book_id varchar(10),
book_name varchar(20),
author char(20),
publication char(20),
edition char(5),
primary key(library_id,book_id)
);

CREATE TABLE Laboratory(
lab_id varchar(13),
equip_id varchar(10),
equip_name varchar(20),
primary key(lab_id,equip_id)
);

CREATE TABLE Mess(
mess_id varchar(13),
mess_name varchar(20),
primary key(mess_id)
);

CREATE TABLE Hostel(
hostel_id varchar(13),
hostel_name varchar(10),
num_rooms int,
primary key(hostel_id)
);

CREATE TABLE Course(
course_id varchar(13),
course_name char(20),
dept char(3),
primary key(course_id)
);

CREATE TABLE Due_Library (
    student_id VARCHAR(13),
    library_id VARCHAR(13),
    book_id VARCHAR(10),
    fee INT,
    pending INT,
    due_date DATE,
    PRIMARY KEY (student_id, library_id, book_id),
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (library_id, book_id) REFERENCES Library(library_id, book_id)
);

CREATE TABLE Due_Laboratory (
    student_id VARCHAR(13),
    lab_id VARCHAR(13),
    equip_id VARCHAR(10),
    fee INT,
    pending INT,
    due_date DATE,
    PRIMARY KEY (student_id, lab_id, equip_id),
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (lab_id, equip_id) REFERENCES Laboratory(lab_id, equip_id)
);

CREATE TABLE Due_Mess (
    student_id VARCHAR(13),
    mess_id VARCHAR(13),
    fee INT,
    pending INT,
    due_date DATE,
    PRIMARY KEY (student_id, mess_id),
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (mess_id) REFERENCES Mess(mess_id)
);

CREATE TABLE Due_Hostel (
    student_id VARCHAR(13),
    hostel_id VARCHAR(13),
    fee INT,
    pending INT,
    due_date DATE,
    PRIMARY KEY (student_id, hostel_id),
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (hostel_id) REFERENCES Hostel(hostel_id)
);

CREATE TABLE Due_Course (
    student_id VARCHAR(13),
    course_id VARCHAR(13),
    fee INT,
    pending INT,
    due_date DATE,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (course_id) REFERENCES Course(course_id)
);


CREATE TABLE Login(
admin_id varchar(13),
admin_pw varchar(92),
admin_role char(3)
);