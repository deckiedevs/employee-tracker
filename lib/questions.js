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
        message: `What is the employee's first name?`,
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
        message: `What is the employee's last name?`,
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
    {
        type: 'input',
        name: 'title',
        message: `What is the title of the new role?`,
        when: ({ initialPrompt }) => {
            if (initialPrompt === 'Add Role') {
                return true;
            } else {
                return false;
            }
        },
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'salary',
        message: `What is the salary for the new role?`,
        when: ({ initialPrompt }) => {
            if (initialPrompt === 'Add Role') {
                return true;
            } else {
                return false;
            }
        },
        validate: salaryInput => {
            if (salaryInput) {
                return true;
            } else {
                console.log('Please enter a salary!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'department',
        message: `What department would you like to add?`,
        when: ({ initialPrompt }) => {
            if (initialPrompt === 'Add Department') {
                return true;
            } else {
                return false;
            }
        },
        validate: departmentInput => {
            if (departmentInput) {
                return true;
            } else {
                console.log('Please enter a department!');
                return false;
            }
        }
    },
];

module.exports = questions;