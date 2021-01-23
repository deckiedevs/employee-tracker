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

const getData = (data, header, table) =>  {
    const sql = `SELECT ${data} AS ${header} from ${table}`
    
    connection.query(sql, (err, res) => {
        if (err) {
            throw err;
        };

        console.table(res);
    });
}

const addEmployee = (firstName, lastName, role, manager) => {
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

const addRole = (title, salary, department) => {
    const sql = `INSERT INTO roles (title, salary, department_id)
        VALUES (?, ?, ?)`;
    const params = [title, salary, department];

    connection.query(sql, params, (err, res) => {
        if (err) {
            throw err;
        };

        console.log('Succesfully added role!')
    });
};

const addDepartment = name => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = [name];

    connection.query(sql, params, (err, res) => {
        if (err) {
            throw err;
        };

        console.log('Successfully added department!')
    });
};

module.exports = { getEmployees, getData, addEmployee, addRole, addDepartment }