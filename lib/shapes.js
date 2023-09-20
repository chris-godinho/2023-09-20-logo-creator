const imgWidth = "300";
const imgHeight = "200";

class Shape {
    constructor(text, textColor, backgroundFill) {
        this.backgroundFill = backgroundFill;
        this.text = text;
        this.textX = "150";
        this.textY = "100";
        this.fontFamily = "Verdana";
        this.fontSize = "35";
        this.alignX = "middle";
        this.alignY = "middle";
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    constructor(text, textColor, backgroundFill) {
        super(text, textColor, backgroundFill);
        this.centerX = "150";
        this.centerY = "100";
        this.radius = "70";
    }

    render() {
      return `<?xml version="1.0" standalone="no"?>
      <svg width=${imgWidth} height=${imgHeight} version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx=${this.centerX} cy=${this.centerY} r=${this.radius}  fill=${this.backgroundFill}/>
          <text x=${this.textX} y=${this.textY} font-family=${this.fontFamily} font-size=${this.fontSize} fill=${this.textColor} text-anchor=${this.alignX} dominant-baseline=${this.alignY}>${this.text}</text>
        </g>
      </svg>`
    }
}

class Triangle extends Shape {
    constructor(text, textColor, backgroundFill) {
        super(text, textColor, backgroundFill);
        this.vertices = "150, 25 75, 175 225, 175";
        this.textY = "150";
    }

    render() {
        return `<?xml version="1.0" standalone="no"?>
        <svg width=${imgWidth} height=${imgHeight} version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g>
            <polygon points=${this.vertices} fill=${this.backgroundFill}/>
            <text x=${this.textX} y=${this.textY} font-family=${this.fontFamily} font-size=${this.fontSize} fill=${this.textColor} text-anchor=${this.alignX} dominant-baseline=${this.alignY}>${this.text}</text>
          </g>
        </svg>`
    }
}

class Square extends Shape {
    constructor(text, textColor, backgroundFill) {
        super(text, textColor, backgroundFill);
        this.startX = "90";
        this.startY = "40";
        this.width = "120";
        this.height = "120";
    }

    render() {
        return `<?xml version="1.0" standalone="no"?>
        <svg width=${imgWidth} height=${imgHeight} version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect x=${this.startX} y=${this.startY} width=${this.width} height=${this.height} fill=${this.backgroundFill}/>
            <text x=${this.textX} y=${this.textY} font-family=${this.fontFamily} font-size=${this.fontSize} fill=${this.textColor} text-anchor=${this.alignX} dominant-baseline=${this.alignY}>${this.text}</text>
          </g>
        </svg>`
    }
}

module.exports = {
    createLogo: (data) => {
        if (data.type === 'Circle') {
          const logo = new Circle(data.text, data.textColor, data.backgroundFill);
          return logo.render();
        } else if (data.type === 'Triangle') {
          const logo = new Triangle(data.text, data.textColor, data.backgroundFill);
          return logo.render();
        } else {
          const logo = new Square(data.text, data.textColor, data.backgroundFill);
          return logo.render();
        }
    },
  }
  