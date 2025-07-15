-- Write your PostgreSQL query statement below
Select cs.name AS Customers from Customers cs
WHERE cs.id not in (Select c.id from Customers c
right join orders o on c.id = o.customerId
group by c.id having(count(c.id)>0))