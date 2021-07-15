const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Contructor tests', () => {

        it('Should throw an Error if improperly constructed', () => {
            // Assign
            const A = () => new Manager("Bob", 20, "bob@bob.com"); // Name ID and email
        
            // Assert
            expect(A).toThrow();
        });

        it('Should NOT throw an error upon proper construction', () => {
            // Assign
            const A = () => new Manager("Bob", 20, "bob@bob.com", 5); // Name ID Email and office number

            // Assert
            expect(A).not.toThrow();
        });
    });

    describe('Getter tests', () => {

        // Office Number property
        it('Should not store its office number as NULL', () => {
            // Assign
            const A = new Manager("Bob", 20, "bob@bob.com", 1);

            // Assert
            expect(A.getOfficeNumber()).not.toBeNull();
        });

        it('Should return 1 when getOfficeNumber() is called', () => {
            // Assign
            const A = new Manager("Bob", 20, "bob@bob.com", 1);

            // Assert
            expect(A.getOfficeNumber()).toBe(1);
        });

        // getRole()
        it('Should return "Manager" when getRole() is called', () => {
            // Assign
            const A = new Manager("Bob", 20, "bob@bob.com", 1);

            // Assert
            expect(A.getRole()).toBe("Manager");
        });
    })

});