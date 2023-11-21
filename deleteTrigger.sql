-- Trigger for Due_Library
DELIMITER //

CREATE TRIGGER delete_due_library_trigger
AFTER UPDATE ON Due_Library
FOR EACH ROW
BEGIN
    IF NEW.pending = 0 THEN
        DELETE FROM Due_Library WHERE student_id = NEW.student_id AND library_id = NEW.library_id AND book_id = NEW.book_id;
    END IF;
END;

//

DELIMITER ;
