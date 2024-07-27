INSERT INTO departments (department_name) VALUES 
  ('Engineering'),
  ('Accounting'),
  ('HR');

INSERT INTO roles (
    title,
    salary,
    department_id,
) VALUES
  ('Intern', 0 , 1),
  ('Senior Accountant', 90000, 2),
  ('Junior Engineer' 70000, 3);

INSERT INTO employees (
    first_name, 
    last_name, 
    role_id, 
    manager_id,
) VALUES
  ('John', 'Smith', 1, 2),
  ('Jane', 'Doe', 3, 2),
  ('Susan', 'Wilson', 2, 1),
  ('Frank', 'Jackson', 1, 2);