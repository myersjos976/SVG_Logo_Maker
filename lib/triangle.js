/*
    Creates a triangle object from shape color.
    drawShape will draw a triangle.
*/
class Triangle
{
    constructor(shapeColor) 
    {
        this.shapeColor = shapeColor;
    };

    // Draws a triangle using the parameters from this instance of a Logo.
    drawShape()
    {
        return `<polygon points="150 20, 255 170, 45 170" fill="${this.shapeColor}" fill-opacity="1.0"/>`;
    }
}
module.exports = Triangle;