// TODO: Create Jest test for shapes
const Shape = require('./shapes.js');

describe('Circle', () => {
  describe('render', () => {
    it('should add the entered data into the SVG circle file string', () => {
      const generatedCircle = `<?xml version="1.0" standalone="no"?>
      <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="150" cy="100" r="70"  fill="black"/>
          <text x="150" y="100" font-family="Verdana" font-size="35" fill="green" text-anchor="middle" dominant-baseline="middle">OK</text>
        </g>
      </svg>`;
      const circle = new Shape.Circle("OK", "green", "black");
      expect(circle.render()).toEqual(generatedCircle);
    });
  });
});

describe('Triangle', () => {
  describe('render', () => {
    it('should add the entered data into the SVG triangle file string', () => {
        const generatedTriangle = `<?xml version="1.0" standalone="no"?>
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g>
            <polygon points="150, 25 75, 175 225, 175" fill="green"/>
            <text x="150" y="150" font-family="Verdana" font-size="35" fill="yellow" text-anchor="middle" dominant-baseline="middle">YEP</text>
          </g>
        </svg>`;
      const triangle = new Shape.Triangle("YEP", "yellow", "green");
      expect(triangle.render()).toEqual(generatedTriangle);
    });
  });
});

describe('Square', () => {
    describe('render', () => {
      it('should add the entered data into the SVG square file string', () => {
        const generatedSquare = `<?xml version="1.0" standalone="no"?>
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect x="90" y="40" width="120" height="120" fill="#FF00FF"/>
            <text x="150" y="100" font-family="Verdana" font-size="35" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">KWL</text>
          </g>
        </svg>`;
        const square = new Shape.Square("KWL", "#FFFFFF", "#FF00FF");
        expect(square.render()).toEqual(generatedSquare);
    });
  });
});