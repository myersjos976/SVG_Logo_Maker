/*
    Creates a circle object from shape color.
    drawShape will draw a circle.
*/
class Circle
{
    constructor(shapeColor) 
    {
        this.shapeColor = shapeColor;
    };

     // Draws a circle using the parameters from this instance of a Logo.
     drawShape()
     {
         return `<circle cx="150" cy="96" r="50" fill="${this.shapeColor}" fill-opacity="1.0"/>`;
     }
}
module.exports = Circle;