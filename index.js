const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
// not sure if I need the rest

// Set up employee list array
function App() {
    this.employeeList = [];
}

App.prototype.initializeApp = async function() {
    console.log(`
====== Welcome to your Team Profile Generator! ======
Answer the prompts to create a profile for your team.`
    )
    await this.promptQuestions()
        .then((newEmployee) => {
            this.employeeList.push(newEmployee);
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
                this.promptQuestions()
            } else {
                console.log("You've finished making your employees. Goodbye! :D")
            }
        })



    // Push working employee
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
        return newEmployee
    }

    switch (newEmployee.role) {
        case 'Manager': 
            var newManager = new Manager(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.role);
            await newManager.getOfficeNum()
                .then((promptData) => {
                    newManager.officeNum = promptData.officeNum;
                    console.log(newManager);
                    return newManager;
                })
        case 'Intern':
            // var newIntern = new Intern(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.role)
        case 'Engineer':
            // var newEngineer = new Engineer(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.role)
        default: 'Oops! Something went wrong in the switch statement on line 74'
    }
}




/////////// INITIALIZE APP ///////////
new App().initializeApp()