console.log("Javascript Assignment 5");

// Question no. 1

/*
Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.

eg- to get volume of cylinder-
let obj= new Cylinder(radius,height);
obj.getVolume();
*/

console.log("\nQuestion no. 1");

let pi = 3.14;

class Cylinder{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        let volume = pi * this.radius * this.radius * this.height;
        volume = volume.toFixed(4);
        console.log(`\nVolume of cylinder : ${volume}`);
    }

}

class Sphere{
    constructor(radius){
        this.radius = radius;
    }
    getVolume(){
        let volume = (4/3) * pi * this.radius * this.radius * this.radius;
        volume = volume.toFixed(4);
        console.log(`\nVolume of Sphere : ${volume}`);
    }

}

class Cone{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        let volume = pi * this.radius * this.radius * ( this.height / 3 );
        volume = volume.toFixed(4);
        console.log(`\nVolume of Cone : ${volume}\n`);
    }

}

let obj = new Cylinder(3.56,13);
obj.getVolume();

let obj1 = new Sphere(4.3);
obj1.getVolume();

let obj2 = new Cone(2.3,8.7);
obj2.getVolume();
