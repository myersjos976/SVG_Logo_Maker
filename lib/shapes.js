/*
    Creates a Logo object using user inputted text, text color, shape, and shape color.
    Once all parameters are collected, generateLogo() is called by index.js to format text for SVG file.
    Content from generateLogo() is then used inside of a writeFile() function to generate the svg file.
*/
class Logo 
{
    constructor(text, textColor, shape, shapeColor, ) 
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

    // Draws a circle using the parameters from this instance of a Logo.
    drawCircle()
    {
        return `<circle cx="150" cy="96" r="50" fill="${this.shapeColor}" fill-opacity="1.0"/>`;
    }

    // Draws a square using the parameters from this instance of a Logo.
    drawSquare()
    {
        return `<rect x="100" y="46" width="100" height="100" fill="${this.shapeColor}" fill-opacity="1.0"/>`;
    }

    // Draws a triangle using the parameters from this instance of a Logo.
    drawTriangle() 
    {
        return `<polygon points="150 20, 230 150, 70 150" fill="${this.shapeColor}" fill-opacity="1.0"/>`;
    }

     // Draws text using the parameters from this instance of a Logo.
    drawText()
    {
        return `<text font-family="Super Sans" font-weight="bold" font-size="30px" fill="${this.textColor}" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${this.text}</text>`;
    }

    // Generates a logo using the specified text, text color, shape, and shape color.
    generateLogo() {
// If shape is a circle, draw a circle logo then add text.
if (this.shape === "Circle") {
return `<svg width="300" height="200">
    <font>
        <font-face font-family="Super Sans">
            <font-face-src>
                <font-face-uri xlink:href="fonts.svg#Super_Sans"/>
            </font-face-src>
        </font-face>
    </font>

    ${this.drawCircle()}

    ${this.drawText()}
</svg>`;
}

// If shape is a square, draw a square logo then add text.
else if (this.shape === "Square") {
return `<svg width="300" height="200">
    <font>
        <font-face font-family="Super Sans">
            <font-face-src>
                <font-face-uri xlink:href="fonts.svg#Super_Sans"/>
            </font-face-src>
        </font-face>
    </font>

    ${this.drawSquare()}

    ${this.drawText()}
</svg>`;
}

// If shape is a triangle, draw a triangle logo then add text.
else {
return `<svg width="300" height="200">
    <font>
        <font-face font-family="Super Sans">
            <font-face-src>
                <font-face-uri xlink:href="fonts.svg#Super_Sans"/>
            </font-face-src>
        </font-face>
    </font>

    ${this.drawTriangle()}

    ${this.drawText()}
</svg>`;
}
}
}
module.exports = Logo;