const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const generateWebsite = require('./src/page-template');

const Worker = [];

const addWorker = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "What is your employee's name?",
        validate: name => {
            if (name) {
                return true;
            }
            else {
                console.log("Please enter employee's name.");
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'Select their role at the company.',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'id',
        message: 'What their worker ID?',
        validate: id => {
            if (id) {
                return true;
            }
            else {
                console.log('Please enter their worker ID.');
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter their email address.',
        validate: email => {
            if (email) {
                return true;
            }
            else {
                console.log('Please enter their email address.');
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?',
        when: (input) => input.role === "Manager",
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            }
            else {
                console.log('Provide their office number.')
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their github username?',
        when: (input) => input.role === "Engineer",
        validate: github => {
            if (github) {
                return true;
            }
            else {
                console.log('Please enter Their github .')
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school do they attend?',
        when: (input) => input.role === "Intern",
        validate: school => {
            if (school) {
                return true;
            }
            else{
                console.log('What school do they attend?');
            }
        }
    },
    {
        type: 'confirm',
        name: 'NewWorker',
        message: 'Would you like to add another employee?',
        default: false,
    }
])
    .then(employeeInfo => {
        
        let { name, role, id, email, officeNumber, github, school, NewWorker } = employeeInfo;

        let worker;

        if(role === 'Manager'){
            worker = new Manager (name, id, email, officeNumber);
            console.log(worker);
        }
        if(role === 'Engineer') {
            worker = new Engineer (name, id, email, github);
            console.log (worker)
        }
        if(role === 'Intern'){
            worker = new Intern (name, id, email, school);
            console.log(worker);       
        }
        Worker.push(worker)

        if(NewWorker) {
            return addWorker(Worker);
        } else {
            return Worker;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err)
            return
        }
        else {
            console.log('Index.html was made');
        }
    })
    console.log(Worker);
};

addWorker()
.then(Worker => {
    console.log(Worker);
    return generateWebsite(Worker);

})
.then(pageHTML => {
    console.log(pageHTML);
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});