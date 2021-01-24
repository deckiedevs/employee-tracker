
const inquirer = require('inquirer');
const questions = require('./lib/questions');

const promptUser = () => {
    inquirer.prompt(questions)
        .then(res => {
            switch (res.initialPrompt) {
                case 'View All Employees':
                    getEmployees();
                    break;
                // case 'View All Employees By Department':
                //     break;
                // case 'View All Employees By Manager':
                //     break;
                case 'Add Employee':
                    addEmployee(res.firstName, res.lastName);
                    break;
                // case 'Remove Employee':
                //     break;
                case 'Update Employee Role':
                    break;
                // case 'Update Employee Manager':
                //     break;
                case 'View All Roles':
                    getRole();
                    break;
                case 'Add Role':
                    addRole(res.title, res.salary, 1);
                    // hard coded department for testing only
                    break;
                // case 'Remove Role':
                //     break;
                case 'View All Departments':
                    getDept();
                    break;
                case 'Add Department':
                    addDept(res.department);
                    break;
                // case 'Delete Department':
                //     break;
                // case 'View Utilized Budget':
                //     break;
                case 'Quit':
                    quit();
                    break;
            };
        })
};

promptUser();

module.exports = { promptUser };
const { addDepartment, quit } = require('./utils/index');
const { getEmployees, addEmployee } = require('./utils/employees');
const { getRole, addRole } = require('./utils/roles');
const { getDept, addDept } = require('./utils/department');