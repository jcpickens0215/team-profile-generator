const File = require("fs");
const Inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Build = require("./src/buildHTML");

let teamName;

// Employee-based objects will be pushed into this container
let listOfEmployees = [];

// Ask for team name
function askForTeamName() {

    Inquirer.prompt( [
        {
            name: "teamName",
            type: "input",
            message: "What is the name of your team? "
        }
    ]).then( (response) => {
    
        teamName = response.teamName; // Set the team's name
        console.log("! Please add your team members.");
        addTeamMember(); // Add the first member.
                         // I had to chain these functions into the promises
                         // Because the prompts like to do bizarre things
                         // Otherwise
    });
}

// Press 'Y' to continue!
// This just asks if the user wants to add another team member, and if so, it
// runs addTeamMember again
function continueAddingMembers() {

    Inquirer.prompt( [
        {
            name: "continue",
            type: "confirm",
            message: "Would you like to add another member?"
        }
    ]).then( (response) => {

        if (response.continue) {
            addTeamMember();
        } else {
            console.log(listOfEmployees);
            // Write to index.html
            File.writeFile( "./dist/index.html", Build.buildHTML(teamName, Build.buildCards(listOfEmployees)), (err) => {
                err ? console.error(err) : console.log('Success!') // Error function
            });
        }
    });
}

// Adds a team member into the listOfEmployees based on user input
function addTeamMember() {

    Inquirer.prompt( [
        {
            name: "name",
            type: "input",
            message: "What is the team member's name?: "
        },
        {
            name: "id",
            type: "input",
            message: "What is the team member's id?: "
        },
        {
            name: "email",
            type: "input",
            message: "What is the team member's email?: "
        },
        {
            name: "role",
            type: "list",
            message: "What is the team member's role?: ",
            choices: [
                       "Manager",
                       "Engineer",
                       "Intern"
                     ],
                     default: 1
        },
                        {
                            name: "officeNumber",
                            type: "input",
                            message: "What is the manager's office number?: ",
                            when: (res) => res.role === "Manager"
                        },
                        {
                            name: "github",
                            type: "input",
                            message: "What is the engineer's GitHub username?: ",
                            when: (res) => res.role === "Engineer"
                        },
                        {
                            name: "school",
                            type: "input",
                            message: "What is the intern's school?: ",
                            when: (res) => res.role === "Intern"
                        }
    ]).then( (response) => {

        // Add employee to listOfEmployees
        switch(response.role) {

            case "Manager":
                listOfEmployees.push( new Manager(response.name, response.id, response.email, response.officeNumber));
                break;
            
            case "Engineer":
                listOfEmployees.push( new Engineer(response.name, response.id, response.email, response.github));
                break;

            case "Intern":
                listOfEmployees.push( new Intern(response.name, response.id, response.email, response.school));
                break;
        }

        continueAddingMembers();
    });
}

// Get the team name
askForTeamName();