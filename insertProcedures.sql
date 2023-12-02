USE My_University;

DELIMITER //

CREATE PROCEDURE InsertStudent(
    IN p_student_id VARCHAR(13),
    IN p_student_name CHAR(20),
    IN p_student_pw VARCHAR(92),
    IN p_dept CHAR(3),
    IN p_batch CHAR(1)
)
BEGIN
    INSERT INTO Student (student_id, student_name, student_pw, dept, batch)
    VALUES (p_student_id, p_student_name, p_student_pw, p_dept, p_batch);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE InsertLibrary(
    IN p_library_id VARCHAR(13),
    IN p_book_id VARCHAR(10),
    IN p_book_name VARCHAR(20),
    IN p_author CHAR(20),
    IN p_publication CHAR(20)
)
BEGIN
    INSERT INTO Library (library_id, book_id, book_name, author, publication)
    VALUES (p_library_id, p_book_id, p_book_name, p_author, p_publication);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE InsertLaboratory(
    IN p_lab_id VARCHAR(13),
    IN p_equip_id VARCHAR(10),
    IN p_equip_name VARCHAR(20)
)
BEGIN
    INSERT INTO Laboratory (lab_id, equip_id, equip_name)
    VALUES (p_lab_id, p_equip_id, p_equip_name);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE InsertMess(
    IN p_mess_id VARCHAR(13),
    IN p_mess_name VARCHAR(20),
    IN p_room_id INT
)
BEGIN
    INSERT INTO Mess (mess_id, mess_name,room_id)
    VALUES (p_mess_id, p_mess_name,p_room_id);
END //

DELIMITER ;

DELIMITER //

DELIMITER //

CREATE PROCEDURE InsertHostel(
    IN p_hostel_id VARCHAR(13),
    IN p_hostel_name VARCHAR(10),
    IN p_room_id INT
)
BEGIN
    INSERT INTO Hostel (hostel_id, hostel_name, room_id)
    VALUES (p_hostel_id, p_hostel_name, p_room_id);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE InsertCourse(
    IN p_course_id VARCHAR(13),
    IN p_course_name CHAR(20),
    IN p_dept CHAR(3)
)
BEGIN
    INSERT INTO Course (course_id, course_name, dept)
    VALUES (p_course_id, p_course_name, p_dept);
END //

DELIMITER ;

-- Calls to all above procedures

CALL InsertStudent('PES1UG21CS622', 'Srinidhi', 'hashed_password', 'CS', 'K');
CALL InsertLibrary('PESLIB21CS234', 'BOOK_001', 'Database Systems', 'John Doe', 'PublisherX');
CALL InsertLaboratory('PESLAB21CS123', 'EQUIP_001', 'Microscope');
CALL InsertLaboratory('PESLAB21CS123', 'EQUIP_000', 'Enroll');
CALL InsertMess('PESMESS21', 'South Mess');
CALL InsertHostel('PESHOSTEL21', 'Hostel A', 100);
CALL InsertCourse('PESCOURSE21CS', 'Computer Science', 'CS');


DELIMITER //
CREATE PROCEDURE InsertDueLibrary(
    IN p_student_id VARCHAR(13),
    IN p_library_id VARCHAR(13),
    IN p_book_id VARCHAR(10),
    IN p_fee INT,
    IN p_due_date DATE
)
BEGIN
    INSERT INTO Due_Library (student_id, library_id, book_id, fee, pending, due_date)
    VALUES (p_student_id, p_library_id, p_book_id, p_fee, p_fee, p_due_date);
END //
DELIMITER ;

DELIMITER //

-- Procedure to enroll a student in the laboratory
DELIMITER //

CREATE PROCEDURE EnrollStudentInLaboratory(
    IN p_studentID VARCHAR(13),
    IN p_labID VARCHAR(13),
    IN p_equipID VARCHAR(10)
)
BEGIN
    -- Check if the student is not already enrolled
    IF NOT EXISTS (
        SELECT 1
        FROM Due_Laboratory
        WHERE student_id = p_studentID AND lab_id = p_labID
    ) THEN
        -- Insert a new row into Due_Laboratory with fee and pending set to zero
        INSERT INTO Due_Laboratory (student_id, lab_id, equip_id, fee, pending, due_date)
        VALUES (p_studentID, p_labID, p_equipID, 0, 0, CURDATE());
        SELECT 'Student enrolled successfully.' AS result;
    ELSE
        SELECT 'Student is already enrolled in the laboratory.' AS result;
    END IF;
END //

//

DELIMITER ;


DELIMITER //

CREATE PROCEDURE InsertDueMess(
    IN p_student_id VARCHAR(13),
    IN p_mess_id VARCHAR(13),
    IN p_room_id INT,
    IN p_fee INT,
    IN p_due_date DATE
)
BEGIN
    INSERT INTO Due_Mess (student_id, mess_id, fee, pending, due_date,room_id)
    VALUES (p_student_id, p_mess_id, p_fee, p_fee, p_due_date,p_room_id);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE InsertDueHostel(
    IN p_student_id VARCHAR(13),
    IN p_hostel_id VARCHAR(13),
    IN p_fee INT,
    IN p_due_date DATE,
    IN p_room_id int
)
BEGIN
    INSERT INTO Due_Hostel (student_id, hostel_id, fee, pending, due_date,room_id)
    VALUES (p_student_id, p_hostel_id, p_fee, p_fee, p_due_date,p_room_id);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE InsertDueCourse(
    IN p_student_id VARCHAR(13),
    IN p_course_id VARCHAR(13),
    IN p_fee INT,
    IN p_due_date DATE
)
BEGIN
    INSERT INTO Due_Course (student_id, course_id, fee, pending, due_date)
    VALUES (p_student_id, p_course_id, p_fee, p_fee, p_due_date);
END //

DELIMITER ;

-- Calls to all above procedures

CALL InsertDueLibrary('PES1UG21CS622', 'PESLIB21CS234', 'BOOK_001', 0, '2023-11-21');
CALL EnrollStudentInLaboratory('PES1UG21CS622', 'PESLAB21CS123',"EQUIP_000");
CALL InsertDueMess('PES1UG21CS622', 'PESMESS21', 30, '2023-11-21');
CALL InsertDueHostel('PES1UG21CS622', 'PESHOSTEL21', 40, '2023-11-21',3);
CALL InsertDueCourse('PES1UG21CS622', 'PESCOURSE21CS', 60, '2023-11-21');

DROP PROCEDURE InsertDueHostel;
