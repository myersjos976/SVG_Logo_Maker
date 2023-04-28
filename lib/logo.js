const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

/*
    Creates a Logo object using user inputted text, text color, shape, and shape color.
    Once all parameters are collected, generateLogo() is called by index.js to format text for SVG file.
    Content from generateLogo() is then used inside of a writeFile() function to generate the svg file.
*/
class Logo 
{
    constructor(text, textColor, shape, shapeColor) 
    {
        if (text.length > 3) {
            this.text = text.substring(0, 3);
        }
        else {
            this.text = text;
        }
        this.textColor = textColor.toLowerCase();
        this.shape = shape;
        this.shapeColor = shapeColor.toLowerCase();
    }

    // Draws text using the parameters from this instance of a Logo.
    drawText()
    {
        return `<text font-family="Super Sans" font-weight="bold" font-size="30px" fill="${this.textColor}" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${this.text}</text>`;
    }

    // Generates a logo using the specified text, text color, shape, and shape color.
    generateLogo() 
    {
        let shape;
        // If shape is a circle, draw a circle logo then add text.
        if (this.shape === "Circle") {
            shape = new Circle(this.shapeColor);
        }
        // If shape is a square, draw a square logo then add text.
        else if (this.shape === "Square") {
            shape = new Square(this.shapeColor);
        }
        // If shape is a triangle, draw a triangle logo then add text.
        else {
            shape = new Triangle(this.shapeColor);
        }
        return `<svg width="300" height="200">
    <font>
        <font-face font-family="Super Sans">
            <font-face-src>
                <font-face-uri xlink:href="fonts.svg#Super_Sans"/>
            </font-face-src>
        </font-face>
    </font>

    ${shape.drawShape()}

    ${this.drawText()}
</svg>`;
    }
}

module.exports = Logo;