const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Contructor tests', () => {

        it('Should throw an Error if improperly constructed', () => {
            // Assign
            const A = () => new Engineer("Bob", 20, "bob@bob.com"); // Name ID and email
        
            // Assert
            expect(A).toThrow();
        });

        it('Should NOT throw an error upon proper construction', () => {
            // Assign
            const A = () => new Engineer("Bob", 20, "bob@bob.com", "bobb29"); // Name ID Email and github

            // Assert
            expect(A).not.toThrow();
        });
    });

    describe('Getter tests', () => {

        // github property
        it('Should not store its github as NULL or not a string', () => {
            // Assign
            const A = () => new Engineer("Bob", 20, "bob@bob.com", 1); // Should throw
            const B = new Engineer("Bob", 20, "bob@bob.com", "bobb29"); // Should not throw

            // Assert
            expect(A).toThrow();
            expect(B.getGithub()).not.toBeNull();
        });

        it('Should return "bobb29" when getGithub() is called', () => {
            // Assign
            const A = new Engineer("Bob", 20, "bob@bob.com", "bobb29");

            // Assert
            expect(A.getGithub()).toBe("bobb29");
        });

        // getRole()
        it('Should return "Engineer" when getRole() is called', () => {
            // Assign
            const A = new Engineer("Bob", 20, "bob@bob.com", "bobb29");

            // Assert
            expect(A.getRole()).toBe("Engineer");
        });
    })

});