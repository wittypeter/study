# Write your MySQL query statement below


SELECT Name as Customers
FROM Customers
WHERE Customers.Id not in
(
    SELECT 
        CustomerId
    FROM Orders
)