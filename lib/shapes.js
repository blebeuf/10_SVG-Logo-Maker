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
    <text x="150" y="100" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="middle">${answers.text}</text>
  </svg>
    `;
  }

  module.exports = generateSvgContent