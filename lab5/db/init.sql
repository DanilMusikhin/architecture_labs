CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO locations (id, name) VALUES 
(1, 'Главный цех'), 
(2, 'Склад материалов'), 
(5, 'Офис 2 этаж');
