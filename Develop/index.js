// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Enter a description for your project:",
            name: "description"
        },
        {
            type: "input",
            message: "Enter installation insructions as a comma separated list:",
            name: "installation"
        },
        {
            type: "input",
            message: "Enter usage information for your project:",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter contribution guidelines for your project:",
            name: "contribution"
        },
        {
            type: "input",
            message: "Enter testing information for your project:",
            name: "testing"
        },
        {
            type: "input",
            message: "Enter your GitHub Username:",
            name: "github"
        },
        {
            type: "input",
            message: "Enter your email address:",
            name: "email"
        },
        {
            type: "list",
            message: "Which license does this project fall under?",
            name: "license",
            choices: [
                "MIT License",
                "Code Project Open License (CPOL)",
                "Common Development and Distribution License (CDDL)",
                "Microsoft Public License (Ms-PL)",
                "Mozilla Public License 1.1 (MPL 1.1)",
                "Common Public License Version 1.0 (CPL)",
                "Eclipse Public License 1.0",
                "Apache License, Version 2.0"
            ]
        }
    ]);
}
// TODO: Create a function to write README file
const generateHTML = (answers) =>

`# ${answers.title}

## Description
${answers.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
1. ${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Tests
${answers.testing}

## License
${answers.license}
This project is convered under the MIT License.

## Questions
For questions about this project, please see my GitHub at [${answers.github}](https://github.com/${answers.github}), or reach out by email at ${answers.email}.`

// TODO: Create a function to initialize app
function init() {

    questions()
    .then((answers) => writeFileAsync('README.md', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};


// Function call to initialize app
init();
