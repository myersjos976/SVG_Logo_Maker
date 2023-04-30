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
        if (this.shape === "Triangle") {
            return `<text font-family="Super Sans" font-size="50px" fill="${this.textColor}" x="150" y="125" text-anchor="middle">${this.text}</text>`;
        }
        else {
            return `<text font-family="Super Sans" font-size="60px" fill="${this.textColor}" x="150" y="125" text-anchor="middle">${this.text}</text>`;
        }
        
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
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <font id="Font1" horiz-adv-x="1000">
        <font-face
            font-family="Super Sans"
            font-weight="bold"
            font-style="normal"
            units-per-em="1000"
            cap-height="600"
            x-height="400"
            ascent="700"
            descent="300"
            alphabetic="0"
            mathematical="350"
            ideographic="400"
            hanging="500">
            <font-face-src>
            <font-face-name name="Super Sans Bold" />
            </font-face-src>
        </font-face>
        <missing-glyph><path d="M0,0h200v200h-200z" /></missing-glyph>
        <!-- Outline of exclamation point glyph -->
        <glyph unicode="!" horiz-adv-x="300"></glyph>
        <glyph unicode="@"><!-- Outline of @ glyph --></glyph>
        <!-- more glyphs -->
    </font>

    ${shape.drawShape()}

    ${this.drawText()}
</svg>`;
    }
}

module.exports = Logo;