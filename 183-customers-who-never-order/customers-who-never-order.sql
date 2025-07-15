-- Write your PostgreSQL query statement below
Select cs.name AS Customers from Customers cs
WHERE cs.id not in (select customerId from orders group by customerId)