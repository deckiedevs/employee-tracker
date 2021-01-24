const { connection, dbQuery } = require('./index')

const getEmployees = () => {
    const sql = `SELECT e1.id as ID, CONCAT(e1.first_name, ' ', e1.last_name) as 'Employee Name', 
        departments.name AS Department, roles.title as Title, roles.salary as Salary, 
        CONCAT(e2.first_name, ' ', e2.last_name) AS Manager
        FROM employees AS e1 INNER JOIN roles ON e1.role_id = roles.id
        INNER JOIN departments ON departments.id = roles.department_id
        LEFT JOIN employees AS e2 ON e1.manager_id = e2.id`
    
    dbQuery(sql, false, false, true);
};

const addEmployee = (firstName, lastName) => {
//    fix this code
};

module.exports = { getEmployees, addEmployee };
const { promptUser } = require('../index');