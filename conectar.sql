DECLARE @MyCounter int;


INSERT INTO tbl_libros1 ( Titulo)
VALUES ('Adios');
select*from tbl_libros1;

UPDATE tbl_libros1 set Titulo='hola' WHERE Titulo='ho'