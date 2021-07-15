const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Contructor tests', () => {

        it('Should throw an Error if improperly constructed', () => {
            // Assign
            const A = () => new Intern("Bob", 20, "bob@bob.com"); // Name ID and email
        
            // Assert
            expect(A).toThrow();
        });

        it('Should NOT throw an error upon proper construction', () => {
            // Assign
            const A = () => new Intern("Bob", 20, "bob@bob.com", "SMU"); // Name ID Email and school

            // Assert
            expect(A).not.toThrow();
        });
    });

    describe('Getter tests', () => {

        // school property
        it('Should not store its school as NULL or not a string', () => {
            // Assign
            const A = () => new Intern("Bob", 20, "bob@bob.com", 1); // Should throw
            const B = new Intern("Bob", 20, "bob@bob.com", "SMU"); // Should not throw

            // Assert
            expect(A).toThrow();
            expect(B.getSchool()).not.toBeNull();
        });

        it('Should return "SMU" when getSchool() is called', () => {
            // Assign
            const A = new Intern("Bob", 20, "bob@bob.com", "SMU");

            // Assert
            expect(A.getSchool()).toBe("SMU");
        });

        // getRole()
        it('Should return "Intern" when getRole() is called', () => {
            // Assign
            const A = new Intern("Bob", 20, "bob@bob.com", "SMU");

            // Assert
            expect(A.getRole()).toBe("Intern");
        });
    })

});