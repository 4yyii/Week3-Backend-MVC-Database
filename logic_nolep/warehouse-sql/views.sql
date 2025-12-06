CREATE VIEW ProductStock AS
SELECT 
    p.product_name,
    i.quantity,
    i.location
FROM Products p
JOIN Inventory i ON p.product_id = i.product_id;
