// This function creates an array of strings,
// each of those strings containing HTML filled
// in with data from the each Employee object in
// employeeData
//      @params:
//          employeeData: array of Employee objects
function buildCards(employeeData) {

    // This function will return an array of strings
    let returnArray = [];

    // employeeData is an Array of Employee derivatives
    employeeData.forEach((employee) => {

        // For the current Employee, get it's role
        switch (employee.getRole()) {

            case 'Manager':
                returnArray += `<div class="card">
    <h3>${employee.getName()}</h3>
    <h4>${employee.getID()}</h4>
    <h4><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></h4>
    <h4>${employee.getOfficeNumber()}</h4>
    <br>
    <h5>Manager<h5>
</div>
`;
                break;
            
            case 'Engineer':
                returnArray += `<div class="card">
    <h3>${employee.getName()}</h3>
    <h4>${employee.getID()}</h4>
    <h4><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></h4>
    <h4><a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></h4>
    <br>
    <h5>Engineer<h5>
</div>
`;
                break;

            case 'Intern':
                returnArray += `<div class="card">
    <h3>${employee.getName()}</h3>
    <h4>${employee.getID()}</h4>
    <h4><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></h4>
    <h4>${employee.getSchool()}</h4>
    <br>
    <h5>Intern<h5>
</div>
`;
                break;
        }
    })

    return returnArray;
}

// This function blindly accepts an array of strings
// and inserts them into the <body> field of a generated
// HTML page. Essentially this can be used to create any
// content for the page, but in this use case, I'm only
// going to be inserting cards filled with data
//      @params:
//          teamName: The name of the development team
//                    to display in the title
//          inserts: Array of content to be inserted
//                   into the page
function buildHTML(teamName, inserts) {
    return `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./style.css"/>
    <title>${teamName}</title>
</head>
<body>
    <h1>${teamName}</h1>
    ${inserts ? inserts.toString().split(",") : ''/* Only insert non-null data */}
</body>
</html>`;
}

module.exports = {
    buildCards: buildCards,
    buildHTML: buildHTML
};
