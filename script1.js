class Circle {
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius
    }
    changeradius(modifiedradius){
        this.radius = modifiedradius;
    }
    getcolor(){
        return this.color
    }
    changecolor(modifiedcolor){
        this.color = modifiedcolor;
    }
    tostring(){
        return (this.radius.toString(),
         this.color.toString());
        
    }
    getArea(){
        return Math.PI*this.radius*this.radius;
    }
    getCircumference(){
        return 2*Math.PI*this.radius
    }

}
var c1 = new Circle();
var c2 = new Circle(1.0);
var c3 = new Circle(1.0,"red");
console.log(c3.tostring())