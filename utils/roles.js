const { connection, dbQuery } = require('./index')

const getRole = () =>  {
    const sql = `SELECT roles.title AS Roles from roles`
    
    dbQuery(sql, false, false, true)
};

const addRole = (title, salary, department) => {
    const sql = `INSERT INTO roles (title, salary, department_id)
        VALUES (?, ?, ?)`;
    const params = [title, salary, department];

    dbQuery(sql, params, 'Successfully added role!');
};

module.exports = { getRole, addRole };