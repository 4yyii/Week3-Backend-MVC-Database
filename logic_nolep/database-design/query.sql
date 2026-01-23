SELECT e.name, t.task_description, t.status
FROM employees e
JOIN tasks t ON e.id = t.employee_id;

SELECT p.project_name, e.name as member_name
FROM projects p
JOIN project_members pm ON pm.project_id = p.id
JOIN employees e ON pm.employee_id = e.id
WHERE p.id = 1;

SELECT p.project_name, SUM(e.salar_per_project) as total_expenses
FROM projects p
JOIN project_members pm ON p.id = pm.project_id
JOIN employees e ON pm.employee_id = e.id
GROUP BY p.id;

SELECT 
    p.project_name,
    p.revenue AS total_revenue,
    SUM(e.salary_per_project) AS total_expenses,
    (p.revenue - SUM(e.salary_per_project)) AS total_profit
FROM projects p
JOIN project_members pm ON pm.project_id = p.id
JOIN employees e ON e.id = pm.employee_id
WHERE p.status = 'Completed'
GROUP BY p.id, p.project_name, p.revenue;