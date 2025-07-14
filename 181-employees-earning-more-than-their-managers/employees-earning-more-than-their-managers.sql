-- Write your PostgreSQL query statement below
Select e.name as Employee FROM Employee e Left JOIN Employee bs ON e.managerId = bs.id WHERE e.salary > bs.salary