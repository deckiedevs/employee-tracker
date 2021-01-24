const { connection, dbQuery } = require('./index')

const getDept = () =>  {
    const sql = `SELECT departments.name AS Departments from departments`
    dbQuery(sql);
};

const addDept = name => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = [name];

    dbQuery(sql, params, 'Successfully added department!');
};

module.exports = { getDept, addDept };