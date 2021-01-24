const { promptUser } = require('../index')
const mysql = require('mysql2');
const inquirer = require('inquirer');

// create connection to database
const connection = mysql.createConnection({
    host:  'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_db'
});

const dbQuery = (sql, params, msg, table) => {
    connection.query(sql, params, (err, res) => {
        if (err) {
            throw err;
        };

        if (msg) {
            console.log(msg)
        };

        if (table) {
            console.table(res);
        }
        
        promptUser();
    });
};

const quit = () => connection.end();

module.exports = { connection, dbQuery, quit };