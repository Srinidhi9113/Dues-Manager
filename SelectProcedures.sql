USE My_University;

DELIMITER //

CREATE PROCEDURE GetDueLibraryInfo(
    IN p_studentID VARCHAR(13)
)
BEGIN
    SELECT
        dl.student_id,
        dl.library_id,
        dl.book_id,
        l.book_name,
        dl.due_date,
        dl.fee,
        dl.pending
    FROM
        Due_Library dl
    JOIN
        Library l ON dl.library_id = l.library_id AND dl.book_id = l.book_id
    WHERE
        dl.student_id = p_studentID;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetDueLaboratoryInfo(
    IN p_studentID VARCHAR(13)
)
BEGIN
    SELECT
        dl.student_id,
        dl.lab_id,
        dl.equip_id,
        l.equip_name,
        dl.due_date,
        dl.fee,
        dl.pending
    FROM
        Due_Laboratory dl
    JOIN
        Laboratory l ON dl.lab_id = l.lab_id AND dl.equip_id = l.equip_id
    WHERE
        dl.student_id = p_studentID;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetDueMessInfo(
    IN p_studentID VARCHAR(13)
)
BEGIN
    SELECT
        dm.student_id,
        dm.mess_id,
        m.mess_name,
        dm.due_date,
        dm.fee,
        dm.pending
    FROM
        Due_Mess dm
    JOIN
        Mess m ON dm.mess_id = m.mess_id
    WHERE
        dm.student_id = p_studentID;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetDueHostelInfo(
    IN p_studentID VARCHAR(13)
)
BEGIN
    SELECT
        dh.student_id,
        dh.hostel_id,
        h.hostel_name,
        dh.due_date,
        dh.fee,
        dh.pending
    FROM
        Due_Hostel dh
    JOIN
        Hostel h ON dh.hostel_id = h.hostel_id
    WHERE
        dh.student_id = p_studentID;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetDueCourseInfo(
    IN p_studentID VARCHAR(13)
)
BEGIN
    SELECT
        dc.student_id,
        dc.course_id,
        c.course_name,
        dc.due_date,
        dc.fee,
        dc.pending
    FROM
        Due_Course dc
    JOIN
        Course c ON dc.course_id = c.course_id
    WHERE
        dc.student_id = p_studentID;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetLibraryDues(IN in_library_id VARCHAR(13))
BEGIN
    SELECT DL.book_id, L.book_name, DL.student_id, S.student_name, DL.fee AS fine, DL.due_date
    FROM Due_Library DL
    INNER JOIN Library L ON DL.library_id = L.library_id AND DL.book_id = L.book_id
    INNER JOIN Student S ON DL.student_id = S.student_id
    WHERE DL.library_id = in_library_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetBookInfo(IN in_library_id VARCHAR(13))
BEGIN
    SELECT L.book_id, L.book_name, L.author, L.publication
    FROM Library L
    WHERE L.library_id = in_library_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetLabStudents(IN in_lab_id VARCHAR(13))
BEGIN
    SELECT S.student_id, S.student_name, S.batch
    FROM Due_Laboratory DL
    INNER JOIN Student S ON DL.student_id = S.student_id
    WHERE DL.lab_id = in_lab_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetLabEquipment(IN in_lab_id VARCHAR(13))
BEGIN
    SELECT L.equip_id, L.equip_name
    FROM Due_Laboratory DL
    INNER JOIN Laboratory L ON DL.lab_id = L.lab_id AND DL.equip_id = L.equip_id
    WHERE DL.lab_id = in_lab_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetLabDues(IN in_lab_id VARCHAR(13))
BEGIN
    SELECT S.student_id, S.student_name, DL.equip_id, L.equip_name, DL.fee AS fine, DL.pending, DL.due_date
    FROM Due_Laboratory DL
    INNER JOIN Student S ON DL.student_id = S.student_id
    INNER JOIN Laboratory L ON DL.lab_id = L.lab_id AND DL.equip_id = L.equip_id
    WHERE DL.lab_id = in_lab_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetHostelDues(IN in_hostel_id VARCHAR(13))
BEGIN
    SELECT H.room_id, DH.student_id, S.student_name, DH.fee AS fine, DH.pending, DH.due_date
    FROM Due_Hostel DH
    INNER JOIN Hostel H ON DH.hostel_id = H.hostel_id AND DH.room_id = H.room_id
    INNER JOIN Student S ON DH.student_id = S.student_id
    WHERE DH.hostel_id = in_hostel_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetHostelStudents(IN in_hostel_id VARCHAR(13))
BEGIN
    SELECT S.student_id, S.student_name, H.room_id
    FROM Hostel H
    INNER JOIN Due_Hostel DH ON H.hostel_id = DH.hostel_id AND H.room_id = DH.room_id
    INNER JOIN Student S ON DH.student_id = S.student_id
    WHERE H.hostel_id = in_hostel_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetMessStudents(IN in_mess_id VARCHAR(13))
BEGIN
    SELECT S.student_id, S.student_name, M.room_id
    FROM Mess M
    INNER JOIN Due_Mess DM ON M.mess_id = DM.mess_id
    INNER JOIN Student S ON DM.student_id = S.student_id
    WHERE M.mess_id = in_mess_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetMessDues(IN in_mess_id VARCHAR(13))
BEGIN
    SELECT S.student_id, S.student_name, M.room_id, DM.fee AS fine, DM.pending, DM.due_date
    FROM Due_Mess DM
    INNER JOIN Mess M ON DM.mess_id = M.mess_id
    INNER JOIN Student S ON DM.student_id = S.student_id
    WHERE DM.mess_id = in_mess_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetCourseStudents(IN in_course_id VARCHAR(13))
BEGIN
    SELECT S.student_id, S.student_name, S.dept, S.batch
    FROM Due_Course DC
    INNER JOIN Student S ON DC.student_id = S.student_id
    WHERE DC.course_id = in_course_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetCourseDues(IN in_course_id VARCHAR(13))
BEGIN
    SELECT S.student_id, S.student_name, S.dept, S.batch, DC.fee AS fine, DC.pending, DC.due_date
    FROM Due_Course DC
    INNER JOIN Student S ON DC.student_id = S.student_id
    WHERE DC.course_id = in_course_id;
END //

DELIMITER ;

-- Calls to all above procedures
/*
CALL GetDueLibraryInfo('PES1UG21CS622');
CALL GetDueLaboratoryInfo('PES1UG21CS622');
CALL GetDueMessInfo('PES1UG21CS622');
CALL GetDueHostelInfo('PES1UG21CS622');
CALL GetDueCourseInfo('PES1UG21CS622');

CALL GetLibraryDues('your_library_id');
CALL GetBookInfo('your_library_id');

CALL GetLabStudents('your_lab_id');
CALL GetLabEquipment('your_lab_id');
CALL GetLabDues('your_lab_id');

CALL GetHostelDues('your_hostel_id');
CALL GetHostelStudents('your_hostel_id');

CALL GetMessStudents('your_mess_id');
CALL GetMessDues('your_mess_id');

CALL GetCourseStudents('your_course_id');
CALL GetCourseDues('your_course_id');

*/

-- DROP PROCEDURE IF EXISTS GetDueLibraryInfo;
-- DROP PROCEDURE IF EXISTS GetDueLaboratoryInfo;
-- DROP PROCEDURE IF EXISTS GetDueMessInfo;
-- DROP PROCEDURE IF EXISTS GetDueHostelInfo;
-- DROP PROCEDURE IF EXISTS GetDueCourseInfo;
-- DROP PROCEDURE IF EXISTS GetLibraryDues;
-- DROP PROCEDURE IF EXISTS GetBookInfo;
-- DROP PROCEDURE IF EXISTS GetLabStudents;
-- DROP PROCEDURE IF EXISTS GetLabEquipment;
-- DROP PROCEDURE IF EXISTS GetLabDues;
-- DROP PROCEDURE IF EXISTS GetHostelDues;
-- DROP PROCEDURE IF EXISTS GetHostelStudents;
-- DROP PROCEDURE IF EXISTS GetMessStudents;
-- DROP PROCEDURE IF EXISTS GetMessDues;
-- DROP PROCEDURE IF EXISTS GetCourseStudents;
-- DROP PROCEDURE IF EXISTS GetCourseDues;