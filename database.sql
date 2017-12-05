CREATE TABLE company (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	country VARCHAR(80 NOT NULL)
);

INSERT INTO company (name, country)
VALUES ('Ford', 'USA');

INSERT INTO company (name, country)
VALUES ('Toyota', 'Japan'),
('Aston Martin', 'UK'),
('Volkswagon', 'Germany');

SELECT * FROM company;

INSERT INTO company (name, country)
VALUES ('Ferarri', 'Italy');

CREATE TABLE car (
	id SERIAL PRIMARY KEY,
	company_id INT REFERENCES company(id) NOT NULL,
	year VARCHAR(80) NOT NULL,
	model VARCHAR(80) NOT NULL,
	nickname VARCHAR(80)
);

INSERT INTO car (company_id, year, model, nickname)
VALUES (12, 2003, 'A4', 'Chuck');

SELECT car.id, year, name, model, nickname, country FROM car 
JOIN company ON company.id=car.company_id 
ORDER BY id;

SELECT * FROM car 
JOIN company ON company.id=car.company_id;
