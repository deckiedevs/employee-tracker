const mysql = require('mysql2');
const cTable = require('console.table');

// create connection to database
const connection = mysql.createConnection({
    host:  'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_db'
});

const getEmployees = () => {
let query = `SELECT e1.id, e1.first_name, e1.last_name, departments.name AS department, 
roles.title, roles.salary, CONCAT(e2.first_name, ' ', e2.last_name) AS manager
FROM employees AS e1 INNER JOIN roles ON e1.role_id = roles.id
INNER JOIN departments ON departments.id = roles.department_id
LEFT JOIN employees AS e2 ON e1.manager_id = e2.id`

    // complete table
    connection.query(query, (err, results, fields) => {
        if (err) {
            throw err;
        };

        console.table(results); 
    });
};

const getRoles = () => {
    const sql = `SELECT roles.title AS Roles FROM roles`

    connection.query(sql, (err, results, fields) => {
        if (err) {
            throw err;
        };

        console.table(results);
    });
};

const getDepartments = () => {
    const sql = `SELECT departments.name AS Departments FROM departments`

    connection.query(sql, (err, results, fields) => {
        if (err) {
            throw err;
        };
        
        console.table(results)
    });
};

const addEmployees = (firstName, lastName, role, manager) => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?)`;
    const params = [firstName, lastName, role, manager]

    connection.query(sql, params, (err, res) => {
        if (err) {
            throw err;
        };

        console.log('Successfully added employee!')
    });
};

const inquirer = require('inquirer');
const questions = require('./lib/questions');

const promptUser = () => {
    inquirer.prompt(questions)
        .then(response => {
            switch (response.initialPrompt) {
                case 'View All Employees':
                    getEmployees();
                    break;
                // case 'View All Employees By Department':
                //     break;
                // case 'View All Employees By Manager':
                //     break;
                case 'Add Employee':
                    addEmployees(response.firstName, response.lastName, 1, 3);
                    // hard coded employee role and manager for testing
                    break;
                // case 'Remove Employee':
                //     break;
                case 'Update Employee Role':
                    break;
                // case 'Update Employee Manager':
                //     break;
                case 'View All Roles':
                    getRoles();
                    break;
                case 'Add Role':
                    break;
                // case 'Remove Role':
                //     break;
                case 'View All Departments':
                    getDepartments()
                    break;
                case 'Add Department':
                    break;
                // case 'Delete Department':
                //     break;
                // case 'View Utilized Budget':
                //     break;
            };
        });
};

promptUser();