const fs = require('fs');
const inquirer= require('inquirer');

const generateSvgContent = require('./generateSvgContent');

const questions = [
    {
        type: 'input',
        name: 'firstThree',
        message: 'Please enter the first three letters of your name.'},
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter your text color?'},
    {    
        type: 'list',
        name: 'shape',
        message: 'Please selcet a shape:',
        choices: [
            'triangle',
            'Circle',
            'Square' ] },
    
];

function generateSvgContent(answers) {

    ;
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
        err ? console.error("File did not write") : console.log("README.MD has been written")
    );
}


// TODO: Create a function to initialize app
function init()  {
inquirer.prompt(questions).then((answers) => {
        // logic to process answers and perhaps generate more data
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    });
}

init();