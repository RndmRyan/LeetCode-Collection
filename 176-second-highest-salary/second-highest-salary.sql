-- Write your PostgreSQL query statement below
Select MAX(salary) AS SecondHighestSalary from Employee
WHERE salary < (select MAX(salary) from Employee) 