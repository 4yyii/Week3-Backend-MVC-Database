INSERT INTO position (position_name) VALUES 
('Manager'), 
('Senior Developer'), 
('Junior Developer');

INSERT INTO employees (name, position_id, salary_per_project) VALUES 
('Budi Santoso', 1, 10000000), 
('Siti Aminah', 2, 7000000),   
('Agus Prayogo', 3, 5000000);  

INSERT INTO projects (project_name, manager_id, revenue, status) VALUES 
('Sistem E-Library', 1, 50000000, 'Completed'),
('Mobile Banking Update', 1, 75000000, 'On Progress');

INSERT INTO project_members (project_id, employee_id) VALUES 
(1, 1), 
(1, 2), 
(1, 3); 

INSERT INTO tasks (project_id, employee_id, task_description, status) VALUES 
(1, 2, 'Membuat Database Schema', 'Done'),
(1, 3, 'Slicing UI Dashboard', 'Done'),
(1, 1, 'Review Code & Quality Assurance', 'Done');

INSERT INTO attendance (employee_id, status) VALUES 
(1, 'Hadir'),
(2, 'Hadir'),
(3, 'Izin');