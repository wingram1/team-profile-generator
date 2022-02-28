const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// Set up employee list array
function App() {
    this.employeeList = [];
}

App.prototype.initializeApp = async function() {
    await this.promptQuestions()
        .then((createdEmployee) => {
            this.employeeList.push(createdEmployee);
            console.log("Current team profile: ")
            console.table(this.employeeList);
            return inquirer.prompt({
                type: 'confirm',
                message: 'Would you like to add a new employee?',
                name: 'addConfirm'
            })
        })
        .then(({ addConfirm }) => {
            if (addConfirm) {
                this.initializeApp()
            } else {
                console.log("You've finished making your employees. Goodbye!")
            }
        })
}

App.prototype.promptQuestions = async function() {
    // Create new employee object
    var newEmployee = new Employee();

    await newEmployee.getRole()
    .then((promptData) => {
        // if 'None', assign 'Employee'
        if (promptData.roleSelect === 'None') {
            newEmployee.role = 'Employee';
        } else {
        // assign role and continue prompts
        newEmployee.role = promptData.roleSelect
        console.log("newEmployee.role: " + newEmployee.role);
        }
    })
    await newEmployee.getName()
        .then((promptData) => {
            newEmployee.name = promptData.nameInput;
        }) 
    await newEmployee.getId()
        .then((promptData) => {
            newEmployee.id = promptData.idInput;
        })
    await newEmployee.getEmail()
        .then((promptData) => {
            newEmployee.email = promptData.emailInput;
        })

    
    // if no role selected,
    if (newEmployee.role === 'Employee') {
        console.log("Employee card for " + newEmployee.name + " created!")
        return newEmployee;
    }

    switch (newEmployee.role) {
        case 'Manager': 
            var newManager = new Manager(newEmployee.name, newEmployee.id, newEmployee.email, "Manager");
            await newManager.getOfficeNum()
                .then((promptData) => {
                    newManager.officeNum = promptData.officeNumInput;
                })
                console.log("Employee card for " + newManager.name + " created!");
                return newManager;
        case 'Intern':
            var newIntern = new Intern(newEmployee.name, newEmployee.id, newEmployee.email, "Intern")
            await newIntern.getSchool()
            .then((promptData) => {
                newIntern.school = promptData.schoolInput;
            })
            console.log("Employee card for " + newIntern.name + " created!");
            return newIntern;
        case 'Engineer':
            var newEngineer = new Engineer(newEmployee.name, newEmployee.id, newEmployee.email, "Engineer");
            await newEngineer.getGithub()
            .then((promptData) => {
                newEngineer.github = promptData.githubInput;
            })
            console.log("Employee card for " + newEngineer.name + " created!");
            return newEngineer;
        default: 'Oops! Something went wrong.'
    }
}




/////////// INITIALIZE APP ///////////
console.log(`
====== Welcome to your Team Profile Generator! ======
Answer the prompts to create a profile for your team.
`
    )
new App().initializeApp()