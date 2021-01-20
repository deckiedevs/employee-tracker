const questions = [
    {
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'view All Employees By Department', // bonus
            'View All Employees By Manager', // bonus
            'Add Employee',
            'Remove Employee', // bonus
            'Update Employee Role',
            'Update Employee Manager', // bonus
            'View All Roles',
            'Add Role',
            'Remove Role', // bonus
            'View All Departments',
            'Add Department',
            'Delete Department', // bonus
            'View Utilized Budget' // bonus
        ]
    }
];

module.exports = questions;