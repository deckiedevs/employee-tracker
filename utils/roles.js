const inquirer = require('inquirer');
const { connection, dbQuery } = require('./index')
const deptArr = [];

const getRole = () =>  {
    const sql = `SELECT roles.title AS Roles from roles`
    
    dbQuery(sql, false, false, true)
};

const addRole = () => {
    // gets all possible departments
    connection.query(`SELECT * from departments`, (err, res) => {
        if (err) {
            throw err;
        };

        res.forEach(row => {
            deptArr.push({
                id: row.id,
                name: row.name
            });
        });
        console.log(deptArr)
    });

    inquirer.prompt(rolePrompt)
        .then(input => {
            const deptId = deptArr.filter(dept => input.department === dept.name)[0].id;

            const sql = `INSERT INTO roles (title, salary, department_id)
                VALUES (?, ?, ?)`;
            const params = [input.title, input.salary, deptId];
        
            dbQuery(sql, params, 'Successfully added role!');
        });
};

module.exports = { getRole, addRole, deptArr };
const rolePrompt = require('../lib/roles');