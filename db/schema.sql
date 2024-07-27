\c postgres;

DROP DATABASE IF EXISTS employee_tracker_app;

CREATE DATABASE employee_tracker_app;

\c employee_tracker_app;

CREATE TABLE departments (
	id SERIAL PRIMARY KEY,
	name VARCHAR(30) UNIQUE NOT NULL,
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
	salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL
);

CREATE TABLE employees (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	role_id INTEGER NOT NULL,
	manager_id INTEGER,
	-- FOREIGN KEY(course_id) REFERENCES courses(id)
	-- 	ON DELETE CASCADE,
	-- FOREIGN KEY(group_id) REFERENCES groups(id)
	-- 	ON DELETE SET NULL,
	-- FOREIGN KEY(group_leader_id) REFERENCES students(id)
	-- 	ON DELETE SET NULL
);