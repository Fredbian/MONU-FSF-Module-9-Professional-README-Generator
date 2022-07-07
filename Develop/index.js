// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// const fs = require('fs')
// const readMe = requir('../README.md')

// TODO: Create an array of questions for user input
const questions = [
    // project title 
    {
        type: 'input',
        name: 'title',
        message: 'Your poject title?'
    },
    // description
    {
        type: 'input',
        name: 'description',
        message: 'What is the description?'
    },
    // installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How to install it?'
    },
    // usage
    {
        type: 'input',
        name: 'usage',
        message: 'How to use it?'
    },
    // license
    {
        type: 'list',
        name: 'license',
        message: 'What is the license?',
        choices: ['Apache-2.0', 'GPLv3', 'GPLv2', 'MIT', 'BSD 3', 'BSD 2', 'LGPLv2.1', 'Microsoft Public', 'Eclipse 1']
    },
    // contribution guidelines
    {
        type: 'input',
        name: 'contributing',
        message: 'How to contributing to it?'
    },
    // test instructions
    {
        type: 'input',
        name: 'tests',
        message: 'How to test?'
    },
    // questions (enter Github username, added with a link to profile)
    // (enter email address, added with instructions on how to reach me with additional questions )
    {
        type: 'input',
        name: 'questions',
        message: 'How to submit Feedback for your project?'
    }

];


inquirer.prompt(questions).then(function (answers) {
    console.log(answers)
    // fs.writeFile(__dirname + '/README.md', readMe.generateMarkdown(data), 'utf-8')
})



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
}

// Function call to initialize app
init();
