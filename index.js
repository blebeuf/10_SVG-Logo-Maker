const fs = require('fs');
const inquirer= require('inquirer');
const jest = require('jest');
// const generateSvgContent = require('./lib/shapes')

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

function generateSvgContent(answers) {
    let shapeSvg = '';
    // Simplified shape drawing example
    const shape = answers.shape.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    switch(shape) {
      case 'circle':
        shapeSvg = `<circle cx="150" cy="100" r="50" fill="${answers.shapeColor}" />`;
        break;
      case 'triangle':
        // Example for a triangle, adjust points as needed
        shapeSvg = `<polygon points="150,50 100,150 200,150" fill="${answers.shapeColor}" />`;
        break;
      case 'square':
        shapeSvg = `<rect x="100" y="50" width="100" height="100" fill="${answers.shapeColor}" />`;
        break;
    }
  
    return `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSvg}
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