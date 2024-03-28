class Shape {
  constructor(fillColor) {
    this.fillColor = fillColor;
    this.svg = '';
  }
}

class Circle extends Shape {
  constructor(fillColor, radius = 50) {
    super(fillColor);
    this.radius = radius;
    this.svg = `<circle cx="150" cy="100" r="${this.radius}" fill="${this.fillColor}" />`;
  }
}

class Triangle extends Shape {
  constructor(fillColor) {
    super(fillColor);
    this.svg = `<polygon points="150,50 100,150 200,150" fill="${this.fillColor}" />`;
  }
}

class Square extends Shape {
  constructor(fillColor, sideLength = 100) {
    super(fillColor);
    this.sideLength = sideLength;
    const x = 150 - this.sideLength / 2;
    const y = 100 - this.sideLength / 2;
    this.svg = `<rect x="${x}" y="${y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.fillColor}" />`;
  }
}

function generateSvgContent(answers) {
  const shapeMap = {
    circle: Circle,
    triangle: Triangle,
    square: Square,
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

  module.exports = generateSvgContent