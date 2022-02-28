const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email, role) {
        super(name, id, email, role)

        this.github = ''
    }

    async getGithub() {
        // function to get office number
        return await inquirer
            .prompt({
                type: 'text',
                name: 'githubInput',
                message: "What is this engineer's github account name?"
            })
    } 
}

module.exports = Engineer;