const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name, id, email, github) {

        if ((!github) || (typeof github !== "string")) {
            throw new Error("Error: Invalid input. The Engineer object requires Name, ID, Email, and github parameters\nThe github parameter must be a string");
        }

        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;