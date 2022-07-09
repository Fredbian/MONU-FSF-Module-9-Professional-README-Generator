// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs/promises')
const markdown = require('./utils/generateMarkdown.js')



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
        message: 'What are the installation instructions for your project?'      
    },
    // usage
    {
        type: 'input',
        name: 'usage',
        message: 'How to use your app?'        
    },
    // license
    {
        type: 'list',
        name: 'license',
        message: 'What is the license?',
        choices: ['Apache-2.0', 'GPL-3.0', 'MIT', 'LGPL-3.0', 'No License']        
    },
    // contribution guidelines
    {
        type: 'input',
        name: 'contributing',
        message: 'How to contributing to your project?'     
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
        name: 'github',
        message: 'Please enter your Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email:'
    }, 
    {
        type: 'input',
        name: 'url',
        message: 'Please provide the URL of your project.'
    }   
];

// // for testing
// inquirer.prompt(questions)
//         .then(data => {
//             console.log(data)
//             return data
//         })


// TODO: Create a function to initialize app
function init() {
    // for testing
    // console.log('aaa')
    return inquirer.prompt(questions)
        .then(data => {
            // console.log(data)
            return data
        })
}

// Function call to initialize app
init()
    .then(data => markdown(data))
    .then((data) => fs.writeFile(__dirname + '/generated.md', data, 'utf-8'))
    .catch(err => {
        console.log(`ERROR! ${err.message}`)
    })