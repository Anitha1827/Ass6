class Circle{
constructor(color,radius){
    this.coloe = color;
    this.radius = radius;
}
setColor(color){
    this.color =color;
}
setRaduis(radius){
    this.radius = radius;
}
getColor(){
    return this.color;
}
getRadius(){
    return this.radius;
}
getArea(){
    let area = (3.14*this.getRadius()*this.getRadius()).toFixed(2);
    return `Area of circle is ${area}`
}
getcircumference(){
    let circum = (2*3.14*this.getRadius()).toFixed(2);
    return `Circumference of circle is ${circum}`;
}
show(){
    let str = `[radius : ${this.getRadius()}, color : ${this.getColor()}]`;
    return str;
}

}

let circle1=new Circle();
let circle2=new Circle()
let circle3=new Circle();
circle1.setRaduis(6)
circle1.setColor("white")
circle2.setRaduis(9)
circle2.setColor("red");
circle3.setRaduis(3);
circle3.setRaduis("green")
console.log(circle1.show())
console.log(circle2.show())

console.log(circle3.getArea());
console.log(circle3.getcircumference())