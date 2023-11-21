USE My_University;

DELIMITER //

CREATE FUNCTION UpdatePendingAmount(
    currentPending INT,
    paidAmount INT
) RETURNS INT
DETERMINISTIC
BEGIN
    RETURN currentPending - paidAmount;
END //

DELIMITER ;

DELIMITER //

-- Create Update Procedure for Due_Library
CREATE PROCEDURE UpdateDueLibraryPending(
    IN p_studentID VARCHAR(13),
    IN p_libraryID VARCHAR(13),
    IN p_bookID VARCHAR(10),
    IN p_paidAmount INT
)
BEGIN
    DECLARE currentPending INT;

    -- Get the current pending amount
    SELECT pending
    INTO currentPending
    FROM Due_Library
    WHERE student_id = p_studentID
    AND library_id = p_libraryID
    AND book_id = p_bookID;

    -- Update the pending amount using the function
    UPDATE Due_Library
    SET pending = UpdatePendingAmount(currentPending, p_paidAmount)
    WHERE student_id = p_studentID
    AND library_id = p_libraryID
    AND book_id = p_bookID;
END //

CREATE PROCEDURE UpdateDueLaboratoryPending(
    IN p_studentID VARCHAR(13),
    IN p_labID VARCHAR(13),
    IN p_equipID VARCHAR(10),
    IN p_paidAmount INT
)
BEGIN
    DECLARE currentPending INT;

    -- Get the current pending amount
    SELECT pending
    INTO currentPending
    FROM Due_Laboratory
    WHERE student_id = p_studentID
    AND lab_id = p_labID
    AND equip_id = p_equipID;

    -- Update the pending amount using the function
    UPDATE Due_Laboratory
    SET pending = UpdatePendingAmount(currentPending, p_paidAmount)
    WHERE student_id = p_studentID
    AND lab_id = p_labID
    AND equip_id = p_equipID;
END //

-- Create Update Procedure for Due_Mess
CREATE PROCEDURE UpdateDueMessPending(
    IN p_studentID VARCHAR(13),
    IN p_messID VARCHAR(13),
    IN p_paidAmount INT
)
BEGIN
    DECLARE currentPending INT;

    -- Get the current pending amount
    SELECT pending
    INTO currentPending
    FROM Due_Mess
    WHERE student_id = p_studentID
    AND mess_id = p_messID;

    -- Update the pending amount using the function
    UPDATE Due_Mess
    SET pending = UpdatePendingAmount(currentPending, p_paidAmount)
    WHERE student_id = p_studentID
    AND mess_id = p_messID;
END //

-- Create Update Procedure for Due_Hostel
CREATE PROCEDURE UpdateDueHostelPending(
    IN p_studentID VARCHAR(13),
    IN p_hostelID VARCHAR(13),
    IN p_paidAmount INT
)
BEGIN
    DECLARE currentPending INT;

    -- Get the current pending amount
    SELECT pending
    INTO currentPending
    FROM Due_Hostel
    WHERE student_id = p_studentID
    AND hostel_id = p_hostelID;

    -- Update the pending amount using the function
    UPDATE Due_Hostel
    SET pending = UpdatePendingAmount(currentPending, p_paidAmount)
    WHERE student_id = p_studentID
    AND hostel_id = p_hostelID;
END //

-- Create Update Procedure for Due_Course
CREATE PROCEDURE UpdateDueCoursePending(
    IN p_studentID VARCHAR(13),
    IN p_courseID VARCHAR(13),
    IN p_paidAmount INT
)
BEGIN
    DECLARE currentPending INT;

    -- Get the current pending amount
    SELECT pending
    INTO currentPending
    FROM Due_Course
    WHERE student_id = p_studentID
    AND course_id = p_courseID;

    -- Update the pending amount using the function
    UPDATE Due_Course
    SET pending = UpdatePendingAmount(currentPending, p_paidAmount)
    WHERE student_id = p_studentID
    AND course_id = p_courseID;
END //

DELIMITER ;

-- Calls to all above procedures
/*
-- Example call for Due_Laboratory
CALL UpdateDueLaboratoryPending('PES1UG21CS622', 'PESLAB21CS123', 'EQUIP_001', 20);

-- Example call for Due_Mess
CALL UpdateDueMessPending('PES1UG21CS622', 'PESMESS21', 10);

-- Example call for Due_Hostel
CALL UpdateDueHostelPending('PES1UG21CS622', 'PESHOSTEL21', 15);

-- Example call for Due_Course
CALL UpdateDueCoursePending('PES1UG21CS622', 'PESCOURSE21CS', 25);
*/

