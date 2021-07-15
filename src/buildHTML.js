// Do we need Employee.js?

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
    for (employee in employeeData) {

        // For the current Employee, get it's role
        switch (getRole(employee)) {

            case 'Manager':
                returnArray += `Some HTML goes here.`;
                break;
            
            case 'Engineer':
                returnArray += `Some HTML goes here.`;
                break;

            case 'Intern':
                returnArray += `Some HTML goes here.`;
                break;
        }
    }
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
    ${inserts ? inserts.toString().split(",") : ''/* Only insert non-null data */}
</body>
</html>`;
}

module.exports = {
    buildCards: buildCards,
    buildHTML: buildHTML
};
