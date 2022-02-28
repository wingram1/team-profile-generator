const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(name, id, email, role) {
        super(name, id, email, role)

        this.school = ''
    }

    async getSchool() {
        // function to get office number
        return await inquirer
            .prompt({
                type: 'text',
                name: 'schoolInput',
                message: 'What school does this intern attend?'
            })
    } 
}

module.exports = Intern;