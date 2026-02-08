// Task: Define an abstract class Shape2D:
// Abstract method area(): number;

// Then implement:

// Circle subclass (property: radius);
// Rectangle subclass (properties: width, height);

// Constructors should initialize properties, and area() should return correct values.

abstract class Shape2D{
    abstract area(): number;
}
class Circle extends Shape2D{
    constructor(public radius: number){
        super();
    }
    
    area(){
        return (this.radius ** 2) * 3.14
    }
}
class Rectangle extends Shape2D{
    constructor(public width: number, public length: number){
        super();
    }
    area(){
        return this.length * this.width
    }
}

const c1 = new Circle(5)
c1.area()

