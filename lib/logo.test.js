const Logo = require('./logo.js');
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

// Constructor Tests
describe('Logo Constructor Tests', () => {
  describe('Constructor With Correct Text Size', () => {
    it('should return all parameters as expected values', () => {
        const logo = new Logo("JTM", "white", "Square", "blue");
        expect(logo.text).toEqual("JTM");
    });
  });

  describe('Constructor With Text Longer than 3 Characters', () => {
    it('should return shortened text to make it 3 characters', () => {
        const logo = new Logo("Long Text", "white", "Triangle", "green");
        expect(logo.text).toEqual("Lon");
    });
  });

  describe('Contructor With All Constructor Parameters', () => {
    it('should return all parameters as expected values', () => {
        const logo = new Logo("JTM", "white", "Square", "blue");
        expect(logo.text).toEqual("JTM");
        expect(logo.textColor).toEqual("white");
        expect(logo.shape).toEqual("Square");
        expect(logo.shapeColor).toEqual("blue");
    });
  });
});

// Draw Methods Tests
describe('Shape Object Tests', () => {
    describe('Circle drawShape Returns Correct Content', () => {
      it('should return correct svg text content', () => {
          const circle = new Circle("green");
          expect(circle.drawShape()).toEqual(`<circle cx="150" cy="100" r="80" fill="green" fill-opacity="1.0"/>`);
      });
    });
  
    describe('Square drawShape Returns Correct Content', () => {
        it('should return correct svg text content', () => {
            const square = new Square("blue");
            expect(square.drawShape()).toEqual(`<rect x="85" y="40" width="130" height="130" fill="blue" fill-opacity="1.0"/>`);
        });
    });

    describe('Triangle drawShape Returns Correct Content', () => {
        it('should return correct svg text content', () => {
            const triangle = new Triangle("red");
            expect(triangle.drawShape()).toEqual(`<polygon points="150 20, 255 170, 45 170" fill="red" fill-opacity="1.0"/>`);
        });
    });

    describe('drawText Returns Correct Content', () => {
        it('should return correct svg text content', () => {
            const logo = new Logo("TXT", "black", "Triangle", "red");
            expect(logo.drawText()).toEqual(`<text font-family="Super Sans" font-size="50px" fill="black" x="150" y="125" text-anchor="middle">TXT</text>`);
        });
    });    
});

//Generate Logo Tests
describe('Generate Logo Tests', () => {
    describe('generateLogo Returns Correct Content For Circle', () => {
      it('should return correct svg text content', () => {
            const logo = new Logo("ABC", "white", "Circle", "purple");
expect(logo.generateLogo()).toEqual(
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
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

    <circle cx="150" cy="100" r="80" fill="purple" fill-opacity="1.0"/>

    <text font-family="Super Sans" font-size="60px" fill="white" x="150" y="125" text-anchor="middle">ABC</text>
</svg>`
);
      });
    });
  
    describe('generateLogo Returns Correct Content For Square', () => {
        it('should return correct svg text content', () => {
            const logo = new Logo("DEF", "blue", "Square", "orange");
expect(logo.generateLogo()).toEqual(
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
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

    <rect x="85" y="40" width="130" height="130" fill="orange" fill-opacity="1.0"/>

    <text font-family="Super Sans" font-size="60px" fill="blue" x="150" y="125" text-anchor="middle">DEF</text>
</svg>`
);
        });
    });

    describe('generateLogo Returns Correct Content For Triangle', () => {
        it('should return correct svg text content', () => {
            const logo = new Logo("GHI", "white", "Triangle", "red");
expect(logo.generateLogo()).toEqual(
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
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

    <polygon points="150 20, 255 170, 45 170" fill="red" fill-opacity="1.0"/>

    <text font-family="Super Sans" font-size="50px" fill="white" x="150" y="125" text-anchor="middle">GHI</text>
</svg>`
);
        });
    }); 
});




