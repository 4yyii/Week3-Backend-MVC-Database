SELECT product_name, price
FROM Products
ORDER BY price DESC;


SELECT p.product_name, i.quantity, i.location
FROM Products p
JOIN Inventory i ON p.product_id = i.product_id;

SELECT 
    i.location,
    SUM(i.quantity * p.price) AS total_value
FROM Inventory i
JOIN Products p ON i.product_id = p.product_id
GROUP BY i.location;

SELECT 
    o.order_id,
    o.order_date,
    SUM(od.quantity * p.price) AS total_amount
FROM Orders o
JOIN OrderDetails od ON o.order_id = od.order_id
JOIN Products p ON od.product_id = p.product_id
GROUP BY o.order_id, o.order_date;

SELECT p.product_id, p.product_name
FROM Products p
LEFT JOIN OrderDetails od ON p.product_id = od.product_id
WHERE od.product_id IS NULL;
