class Employee {

    constructor(name, id, email) {

        if ((!name) || (!id) || (!email)) {
            throw new Error("Error: Invalid input. The Employee object requires Name, ID, and Email parameters");
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;