// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const shape = require('./lib/shapes.js');

// Array of shapes for user to choose from.
const shapesList = [
    "Circle",
    "Square",
    "Triangle"
];

// Array of questions for user to answer.
const questions = [
    "Enter text (up to 3 characters):",
    "Enter text's color:",
    "Enter a shape form the list below:",
    "Enter shape's color:"
];

// Array of responses from user.
const responses = [];

// Writes text from data to a Logo.svg file at locations specified in fileName.
function writeToFile(fileName, data)
 {
    fs.writeFile(fileName + "/Logo.svg", data, (err) =>
    err ? console.error(err) : console.log('SUCCESS! Logo created') 
    );
 }

/*
 Intializes SVG Logo Maker
 Calls generateMarkdown function from generateMarkdown.js
*/
function init() 
{
    console.log("Welcome to the SVG Logo Maker!");
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'text',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'textColor',
            },
            {
                type: 'rawlist',
                message: questions[2],
                choices: shapesList,
                default: 'None',
                name: 'shape',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'shapeColor',
            },

            {
                type: 'input',
                message: questions[4],
                name: 'fileLocation',
            },
        ])
        .then((response) => 
            writeToFile(response.fileLocation, shape.generateLogo(
                [
                    response.text, 
                    response.textColor, 
                    response.shape, 
                    response.shapeColor 
                ]
            )),
            (err) =>
                err ? console.error(err) : console.log('SUCCESS!')
        );
}

// Function call to initialize app
init();



