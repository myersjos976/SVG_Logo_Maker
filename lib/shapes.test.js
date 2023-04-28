const Logo = require('./shapes.js');

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
describe('Draw Methods Tests', () => {
    describe('drawCircle Returns Correct Content', () => {
      it('should return correct svg text content', () => {
          const logo = new Logo("JTM", "white", "Circle", "green");
          expect(logo.drawCircle()).toEqual(`<circle cx="150" cy="96" r="50" fill="green" fill-opacity="1.0"/>`);
      });
    });
  
    describe('drawSquare Returns Correct Content', () => {
        it('should return correct svg text content', () => {
            const logo = new Logo("JTM", "white", "Square", "blue");
            expect(logo.drawSquare()).toEqual(`<rect x="100" y="46" width="100" height="100" fill="blue" fill-opacity="1.0"/>`);
        });
    });

    describe('drawSquare Returns Correct Content', () => {
        it('should return correct svg text content', () => {
            const logo = new Logo("JTM", "white", "Triangle", "red");
            expect(logo.drawTriangle()).toEqual(`<polygon points="150 20, 230 150, 70 150" fill="red" fill-opacity="1.0"/>`);
        });
    });

    describe('drawText Returns Correct Content', () => {
        it('should return correct svg text content', () => {
            const logo = new Logo("TXT", "black", "Triangle", "red");
            expect(logo.drawText()).toEqual(`<text font-family="Super Sans" font-weight="bold" font-size="30px" fill="black" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">TXT</text>`);
        });
    });    
});

//Generate Logo Tests
describe('Generate Logo Tests', () => {
    describe('generateLogo Returns Correct Content For Circle', () => {
      it('should return correct svg text content', () => {
            const logo = new Logo("ABC", "white", "Circle", "purple");
expect(logo.generateLogo()).toEqual(
`<svg width="300" height="200">
    <font>
        <font-face font-family="Super Sans">
            <font-face-src>
                <font-face-uri xlink:href="fonts.svg#Super_Sans"/>
            </font-face-src>
        </font-face>
    </font>

    <circle cx="150" cy="96" r="50" fill="purple" fill-opacity="1.0"/>

    <text font-family="Super Sans" font-weight="bold" font-size="30px" fill="white" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">ABC</text>
</svg>`
);
      });
    });
  
    describe('generateLogo Returns Correct Content For Square', () => {
        it('should return correct svg text content', () => {
            const logo = new Logo("DEF", "blue", "Square", "orange");
expect(logo.generateLogo()).toEqual(
`<svg width="300" height="200">
    <font>
        <font-face font-family="Super Sans">
            <font-face-src>
                <font-face-uri xlink:href="fonts.svg#Super_Sans"/>
            </font-face-src>
        </font-face>
    </font>

    <rect x="100" y="46" width="100" height="100" fill="orange" fill-opacity="1.0"/>

    <text font-family="Super Sans" font-weight="bold" font-size="30px" fill="blue" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">DEF</text>
</svg>`
);
        });
    });

    describe('generateLogo Returns Correct Content For Triangle', () => {
        it('should return correct svg text content', () => {
            const logo = new Logo("GHI", "white", "Triangle", "red");
expect(logo.generateLogo()).toEqual(
`<svg width="300" height="200">
    <font>
        <font-face font-family="Super Sans">
            <font-face-src>
                <font-face-uri xlink:href="fonts.svg#Super_Sans"/>
            </font-face-src>
        </font-face>
    </font>

    <polygon points="150 20, 230 150, 70 150" fill="red" fill-opacity="1.0"/>

    <text font-family="Super Sans" font-weight="bold" font-size="30px" fill="white" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">GHI</text>
</svg>`
);
        });
    }); 
});




