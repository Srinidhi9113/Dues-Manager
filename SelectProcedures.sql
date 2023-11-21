USE My_University;

DELIMITER //

CREATE PROCEDURE GetDueLibraryInfo(
    IN p_studentID VARCHAR(13),
    IN p_libraryID VARCHAR(13)
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
        dl.student_id = p_studentID
        AND dl.library_id = p_libraryID;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetDueLaboratoryInfo(
    IN p_studentID VARCHAR(13),
    IN p_labID VARCHAR(13)
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
        dl.student_id = p_studentID
        AND dl.lab_id = p_labID;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetDueMessInfo(
    IN p_studentID VARCHAR(13),
    IN p_messID VARCHAR(13)
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
        dm.student_id = p_studentID
        AND dm.mess_id = p_messID;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetDueHostelInfo(
    IN p_studentID VARCHAR(13),
    IN p_hostelID VARCHAR(13)
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
        dh.student_id = p_studentID
        AND dh.hostel_id = p_hostelID;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetDueCourseInfo(
    IN p_studentID VARCHAR(13),
    IN p_courseID VARCHAR(13)
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
        dc.student_id = p_studentID
        AND dc.course_id = p_courseID;
END //

DELIMITER ;



-- Calls to all above procedures
/*
CALL GetDueLibraryInfo('PES1UG21CS622', 'PESLIB21CS234');
CALL GetDueLaboratoryInfo('PES1UG21CS622', 'PESLAB21CS123');
CALL GetDueMessInfo('PES1UG21CS622', 'PESMESS21');
CALL GetDueHostelInfo('PES1UG21CS622', 'PESHOSTEL21');
CALL GetDueCourseInfo('PES1UG21CS622', 'PESCOURSE21CS');
*/