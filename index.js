const File = require("fs");
const Inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Build = require("./src/buildHTML");

// Data and containers
let teamName;
let accumulator = []; // Empty container to hold data between prompts
let loopBack = true; // Loop management. Used for the add employee loop

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

function continueAddingMembers() {

    Inquirer.prompt( [
        {
            name: "continue",
            type: "confirm",
            message: "Would you like to add another member?"
        }
    ]).then( (response) => {

        if (response.continue) addTeamMember();
    });
}

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

            case "Manager":;
            break;
            
            case "Engineer":;
            break;

            case "Intern":;
            break;
        }

        continueAddingMembers();
    });
}


// .THEN
// {fs Write File} ( buildHTML(teamName, buildCards(listOfEmployees)) );

// Get the team name
askForTeamName();