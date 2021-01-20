const questions = [
    {
        type: 'list',
        name: 'initialPrompt',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            // 'View All Employees By Department', bonus
            // 'View All Employees By Manager', bonus
            'Add Employee',
            // 'Remove Employee', bonus
            'Update Employee Role',
            // 'Update Employee Manager', bonus
            'View All Roles',
            'Add Role',
            // 'Remove Role', bonus
            'View All Departments',
            'Add Department',
            // 'Delete Department', bonus
            // 'View Utilized Budget' bonus
        ]
    },
    {
        type: 'input',
        name: 'firstName',
        message: ({ firstName }) => `What is the employee's first name?`,
        when: ({ initialPrompt }) => {
            if (initialPrompt === 'Add Employee') {
                return true;
            } else {
                return false;
            }
        },
        validate: firstNameInput => {
            if (firstNameInput) {
                return true;
            } else {
                console.log('Please enter a first name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'lastName',
        message: ({ lastName }) => `What is the employee's last name?`,
        when: ({ initialPrompt }) => {
            if (initialPrompt === 'Add Employee') {
                return true;
            } else {
                return false;
            }
        },
        validate: lastNameInput => {
            if (lastNameInput) {
                return true;
            } else {
                console.log('Please enter a last name!');
                return false;
            }
        }
    },
];

module.exports = questions;