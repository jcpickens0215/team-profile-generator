const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Contructor tests', () => {

        it('Should throw an Error if improperly constructed', () => {
            // Assign
            const A = () => new Employee(); // No params
            
            const B = () => new Employee("Bob"); // Only name
            const C = () => new Employee(20); // Only id
            const D = () => new Employee("bob@bob.com"); // Only email
            
            const E = () => new Employee("Bob", 20); // name and id
            const F = () => new Employee("Bob", "bob@bob.com"); // name and email
            const G = () => new Employee(20, "bob@bob.com"); // id and email
        
            // Assert
            expect(A).toThrow();
            expect(B).toThrow();
            expect(C).toThrow();
            expect(D).toThrow();
            expect(E).toThrow();
            expect(F).toThrow();
            expect(G).toThrow();
        });

        it('Should NOT throw an error upon proper construction', () => {
            // Assign
            const A = () => new Employee("Bob", 20, "bob@bob.com"); // Name ID and Email

            // Assert
            expect(A).not.toThrow();
        });
    });

    describe('Getter tests', () => {

        // Name property
        it('Should not store its name as NULL', () => {
            // Assign
            const A = new Employee("Bob", 20, "bob@bob.com");

            // Assert
            expect(A.getName()).not.toBeNull();
        });

        it('Should return "Bob" when getName() is called', () => {
            // Assign
            const A = new Employee("Bob", 20, "bob@bob.com");

            // Assert
            expect(A.getName()).toBe("Bob");
        });

        // ID property
        it('Should not store its id as NULL', () => {
            // Assign
            const A = new Employee("Bob", 20, "bob@bob.com");

            // Assert
            expect(A.getID()).not.toBeNull();
            expect(A.getID()).not.toBeNaN();
        });

        it('Should return 20 when getID() is called', () => {
            // Assign
            const A = new Employee("Bob", 20, "bob@bob.com");

            // Assert
            expect(A.getID()).toBe(20);
        });

        // Email property
        it('Should not store its email as NULL', () => {
            // Assign
            const A = new Employee("Bob", 20, "bob@bob.com");

            // Assert
            expect(A.getEmail()).not.toBeNull();
        });

        it('Should return "bob@bob.com" when getEmail() is called', () => {
            // Assign
            const A = new Employee("Bob", 20, "bob@bob.com");

            // Assert
            expect(A.getEmail()).toBe("bob@bob.com");
        });

        // getRole()
        it('Should return "Employee" when getRole() is called', () => {
            // Assign
            const A = new Employee("Bob", 20, "bob@bob.com");

            // Assert
            expect(A.getRole()).toBe("Employee");
        });
    })

});