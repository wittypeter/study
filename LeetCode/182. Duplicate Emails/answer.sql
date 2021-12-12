# Write your MySQL query statement below

# first

# SELECT
#     distinct p.Email
# FROM Person p
# JOIN Person b
# ON p.Id != b.Id AND p.Email = b.Email

# second

# SELECT
#     Email
# FROM 
# (
#     SELECT
#         Email, COUNT(Email) as num
#     FROM Person
#     GROUP BY Email
# ) AS Counted
# WHERE num > 1;

# third

SELECT 
    Email
FROM Person
GROUP BY Email
HAVING COUNT(Email) > 1