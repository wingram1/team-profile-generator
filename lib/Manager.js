const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name, id, email, role, officeNum) {
        super(name, id, email, role)
        this.officeNum = ''
    }

    async getOfficeNum() {
        // function to get office number
        return await inquirer
            .prompt({
                type: 'text',
                name: 'officeNumInput',
                message: 'What is the office number of this employee?'
            })
    } 
}

module.exports = Manager;