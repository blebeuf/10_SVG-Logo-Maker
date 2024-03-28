const fs = require('fs');
const inquirer= require('inquirer');
const jest = require('jest');
const { generateSvgContent } = require('./lib/shapes')

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters.',
        validate: (input) => {
            if (input.length > 3) {
              return 'Please enter up to three characters.';
            } 
              return true;     
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter your text color?' 
    },
    {    
        type: 'list',
        name: 'shape',
        message: 'Please selcet a shape:',
        choices: ['triangle','Circle','Square'] 
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter your shape color'
    },
    
];

function writeToFile(fileName, data) {
    fs.writeFile('./example/logo.svg', data, err =>
        err ? console.error("File did not write", err) : console.log("Generated logo.svg")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const svgContent = generateSvgContent(answers);
        writeToFile('logo.svg', svgContent);
    });
}

init();