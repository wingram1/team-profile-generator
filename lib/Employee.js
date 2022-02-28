const inquirer = require("inquirer");

class Employee {

    constructor(name = '', id = '', email = '', role = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    async getName() {
        // function to get name
        return await inquirer
            .prompt({
                type: 'text',
                name: 'nameInput',
                message: 'What is the name of this employee?'
            })
    } 

    async getId() {
        // function to get id number
        return await inquirer
            .prompt({
                type: 'text',
                name: 'idInput',
                message: 'What is the ID number of this employee?'
            })
    } 


    async getEmail() {
        // function to get email
        return await inquirer
            .prompt({
                type: 'text',
                name: 'emailInput',
                message: 'What is the email address of this employee?'
            })
    } 

    async getRole() {
        return await inquirer
            .prompt({
                type: 'list',
                name: 'roleSelect',
                message: 'What is the role of this employee?',
                choices: ['Manager', 'Engineer', 'Intern', 'None']
            })
    } 
}

module.exports = Employee;