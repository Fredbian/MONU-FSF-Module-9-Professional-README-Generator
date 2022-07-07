// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const readMe = requir('../README.md')
// TODO: Create an array of questions for user input
const questions = ['Your poject title?', 'What is the description?', 'How to install it?', 'How to use it?', 'What is the license?', 'How to contributing to it?', 'How to test?', 'How to submit Feedback for your project?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    inquirer.prompt([
        // project title 
        {
            type: "input",
            message: `${questions[0]}`,
            name: "title"
        },
        // description
        {
            type: "editor",
            message: `${questions[1]}`,
            name: "description"
        },
        // installation instructions
        {
            type: "input",
            message: `${questions[2]}`,
            name: "installation"
        },
        // usage
        {
            type: "input",
            message: `${questions[3]}`,
            name: "usage"
        },
        // license
        {
            type: "list",
            message: `${questions[4]}`,
            choices: ['Apache-2.0', 'GPLv3', 'GPLv2', 'MIT', 'BSD 3', 'BSD 2', 'LGPLv2.1', 'Microsoft Public', 'Eclipse 1'],
            name: "license"
        },
        // contribution guidelines
        {
            type: "input",
            message: `${questions[5]}`,
            name: "contributing"
        },
        // test instructions
        {
            type: "input",
            message: `${questions[6]}`,
            name: "tests"
        },
        // questions (enter Github username, added with a link to profile)
        // (enter email address, added with instructions on how to reach me with additional questions )
        {
            type: "input",
            message: `${questions[7]}`,
            name: "questions"
        }
    ])
        .then(function (data) {
            console.log(data)
            return answer
            // fs.writeFile(__dirname + '/README.md', readMe.generateMarkdown(data), 'utf-8')
        })
}





// TODO: Create a function to initialize app
function init() {
    writeToFile()
 }

// Function call to initialize app
init();
