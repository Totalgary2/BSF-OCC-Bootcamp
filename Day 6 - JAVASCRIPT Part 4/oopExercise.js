class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea(){
        throw new Error("Method not implemented.");
    }
}

class Rectangle extends Shape {
    displayFormula(){
        console.log("Area = Width * Height");
    }

    calculateArea(){
        let a = this.width * this.height;
        console.log('The area is', a);
    }
    
}
const shape1 = new Rectangle(4,5);
shape1.displayFormula();
shape1.calculateArea();


