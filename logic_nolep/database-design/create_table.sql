CREATE TYPE attendance_status AS ENUM('Hadir', 'Izin', 'Sakit', 'Alpa');
CREATE TYPE project_status AS ENUM('On Progress', 'Completed');
CREATE TYPE task_status AS ENUM('Pending', 'Done');

CREATE TABLE position (
    id SERIAL PRIMARY KEY ,
    position_name VARCHAR(50) NOT NULL
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position_id INT REFERENCES position(id),
    salary_per_project DECIMAL(15, 2)
);

CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    employee_id INT REFERENCES employees(id),
    check_in TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status attendance_status
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    project_name VARCHAR(100) NOT NULL,
    manager_id INT REFERENCES employees(id),
    revenue DECIMAL(15, 2),
    status project_status DEFAULT 'On Progress'
);

CREATE TABLE project_members (
    project_id INT REFERENCES projects(id),
    employee_id INT REFERENCES employees(id), 
    PRIMARY KEY (project_id, employee_id)
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    project_id INT REFERENCES projects(id),
    employee_id INT REFERENCES employees(id),
    task_description TEXT,
    status task_status DEFAULT 'Pending'
);