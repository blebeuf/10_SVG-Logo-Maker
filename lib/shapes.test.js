const { Triangle } = require('./shapes.js');

// describe block define test suite
describe('Triangle', () => {
    // Inside the test suite, we define a single test case using 'it'.
    it('constructor and render method returns correct SVG string', () => {
    
    // creating a new instanct of the class and passing "blue" as property.
    const triangle = new Triangle("blue");
    
    expect(triangle.svg).toEqual('<polygon points="150,50 100,150 200,150" fill="blue" />');

    });

});

