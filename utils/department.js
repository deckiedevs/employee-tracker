const { connection, dbQuery } = require('./index')

const getDept = () =>  {
    const sql = `SELECT departments.id as 'Dept. ID', departments.name AS Departments FROM departments`
    dbQuery(sql, false, false, true);
};

const addDept = name => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = [name];

    dbQuery(sql, params, 'Successfully added department!');
};

module.exports = { getDept, addDept };