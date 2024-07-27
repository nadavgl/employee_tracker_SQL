\c postgres;

DROP DATABASE IF EXISTS employee_tracker_app;

CREATE DATABASE employee_tracker_app;

\c employee_tracker_app;

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    role_title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER
    -- You can uncomment and modify the FOREIGN KEY constraints as needed
    -- FOREIGN KEY(role_id) REFERENCES roles(id) ON DELETE CASCADE,
    -- FOREIGN KEY(manager_id) REFERENCES employees(id) ON DELETE SET NULL
);
