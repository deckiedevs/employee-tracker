
const inquirer = require('inquirer');
const questions = require('./lib/questions');
const { getEmployees, getData, addEmployee, addRole, addDepartment } = require('./utils/queries')

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
                    addEmployee(response.firstName, response.lastName, 1, 3);
                    // hard coded employee role and manager for testing
                    break;
                // case 'Remove Employee':
                //     break;
                case 'Update Employee Role':
                    break;
                // case 'Update Employee Manager':
                //     break;
                case 'View All Roles':
                    getData('roles.title', 'Roles', 'roles');
                    break;
                case 'Add Role':
                    addRole(response.title, response.salary, 1);
                    // hard coded department for testing only
                    break;
                // case 'Remove Role':
                //     break;
                case 'View All Departments':
                    getData('departments.name', 'Departments', 'departments');
                    break;
                case 'Add Department':
                    addDepartment(response.department);
                    break;
                // case 'Delete Department':
                //     break;
                // case 'View Utilized Budget':
                //     break;
            };
        });
};

promptUser();