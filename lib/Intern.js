const Employee = require('./Employee');

class Intern extends Employee {

    constructor(name, id, email, school) {

        if ((!school) || (typeof school !== "string")) {
            throw new Error("Error: Invalid input. The Intern object requires Name, ID, Email, and school parameters\nThe school parameter must be a string");
        }

        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;