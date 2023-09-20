// Load necessary packages
const fs = require('fs');
const inquirer = require('inquirer');
const genLogo = require('./lib/shapes.js');

// Create array with questions to be displayed in prompt
const inquirerQuestions = ['Please enter text to be displayed in the logo (up to three characters):', 'Please enter the text color (name or hex value):', 'Please choose a shape for the logo:', 'Please enter the logo color (name or hex value):'];

// Write generated SVG to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Generated logo.svg')
);
}

function init() {
    // Display prompts for generating logo
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: inquirerQuestions[0],
        },
        {
          type: 'input',
          name: 'textColor',
          message: inquirerQuestions[1],
        },
        {
          type: 'list',
          name: 'type',
          message: inquirerQuestions[2],
          choices: ['Circle', 'Triangle', 'Square'],
        },
        {
          type: 'input',
          name: 'backgroundFill',
          message: inquirerQuestions[3],
        }
      ])
      .then((compiledInfo) => {
        // Compile SVG data
        fileData = genLogo.createLogo(compiledInfo);
        // Write data to a new file
        writeToFile('./examples/logo.svg', fileData);
      });
  }
  
  // Initialize application
  init();
  