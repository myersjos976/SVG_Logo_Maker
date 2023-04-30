/*
    Creates a square object from shape color.
    drawShape will draw a square.
*/
class Square
{
    constructor(shapeColor) 
    {
        this.shapeColor = shapeColor;
    };

    // Draws a square using the parameters from this instance of a Logo.
    drawShape()
    {
        return `<rect x="85" y="40" width="130" height="130" fill="${this.shapeColor}" fill-opacity="1.0"/>`;
    }
}
module.exports = Square;