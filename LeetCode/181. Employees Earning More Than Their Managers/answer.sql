# Write your MySQL query statement below

SELECT e.Name AS Employee
FROM Employee e
JOIN Employee j
ON e.ManagerId = j.Id AND e.Salary > j.Salary

# SELECT e.Name AS Employee
# FROM Employee e
# JOIN Employee j
# ON e.ManagerId = j.Id
# WHERE e.Salary > j.Salary
