const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        if (!officeNumber) {
            throw new Error("Error: Invalid input. The Manager object requires Name, ID, Email, and Office Number parameters");
        }

        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;