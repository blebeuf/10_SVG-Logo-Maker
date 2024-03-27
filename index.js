const fs = require('fs');
const inquirer= require('inquirer');

const generateSvgContent = require('./generateSvgContent');

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
    
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
        err ? console.error("File did not write", err) : console.log("Generated logo.svg")
    );
}

function generateSvgContent(answers) {
    // Placeholder for the function that generates SVG content based on user answers
    // This function should return a string containing SVG XML data
    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- Add your shapes and text here based on answers -->
  <!-- This is just an example -->
  <text x="10" y="20" fill="${answers.textColor}">${answers.text}</text>
</svg>
`;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const svgContent = generateSvgContent(answers);
        writeToFile('logo.svg', svgContent);
    });
}

init();