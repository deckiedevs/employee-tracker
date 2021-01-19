const mysql = require('mysql2');
const cTable = require('console.table');
// const inquirer = require('inquirer');
// const questions = require('./lib/questions');

// create connection to database
const connection = mysql.createConnection({
    host:  'localhost',
    user: 'root',
    database: 'employees_db'
});

// complete table
connection.query(
    `SELECT e1.id, e1.first_name, e1.last_name, departments.name AS department, 
        roles.title, roles.salary, CONCAT(e2.first_name, ' ', e2.last_name) AS manager
    FROM employees AS e1 INNER JOIN roles ON e1.role_id = roles.id
    INNER JOIN departments ON departments.id = roles.department_id
    LEFT JOIN employees AS e2 ON e1.manager_id = e2.id`,
    
    function(err, results, fields) {
        console.table(results); 
    }
);

// const promptUser = () => {
//     return inquirer.prompt(questions);
// }

// promptUser();