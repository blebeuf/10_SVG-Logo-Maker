// Base class for all shapes
class Shape {
  constructor(fillColor) {
    this.fillColor = fillColor;
    this.svg = ''; // Placeholder for SVG markup. To be defined in subclasses.
  }
}

class Circle extends Shape {
  constructor(fillColor) {
    super(fillColor);
     // SVG markup for the circle, including position (cx, cy), radius (r), and fill color.
    this.svg = `<circle cx="150" cy="100" r="50" fill="${this.fillColor}" />`;
  }
}

class Triangle extends Shape {
  constructor(fillColor) {
    super(fillColor);
      // SVG markup for the triangle, defined by its points and fill color.
    this.svg = `<polygon points="150,50 100,150 200,150" fill="${this.fillColor}" />`;
  }
}

class Square extends Shape {
  constructor(fillColor) {
    super(fillColor);
    // SVG markup for the square, specifying its position (x, y), dimensions (width, height), and fill color.
    this.svg = `<rect x="103" y="53" width="94" height="94" fill="${this.fillColor}" />`;
  }
}

function generateSvgContent(answers) {
  const shapeMap = {
    circle: Circle, // Maps "circle" to the Circle class.
    triangle: Triangle, // '' 
    square: Square, // ''
  };

  const ShapeClass = shapeMap[answers.shape.toLowerCase()];
  const shape = new ShapeClass(answers.shapeColor);
  const shapeSvg = shape.svg; // Access the SVG markup directly

    return `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSvg}
    <text x="150" y="100" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="middle">${answers.text}</text>
  </svg>
    `;
  }

  module.exports = {
    generateSvgContent: generateSvgContent,
    Circle: Circle,
    Triangle: Triangle,
    Square: Square,
  };
  