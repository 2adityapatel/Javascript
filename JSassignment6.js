console.log("Javascript Assignment 6");

// Question no 1
/*
Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
  ○ It is a subclass of Rectangle.
  ○ It contains a constructor and no other methods.
  ○ It can use the Rectangle class' area method to print the area
    of a Square object.
*/

console.log("\nQuestion no. 1");

class Rectangle{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }

    area(){
        let Area = this.length * this.breadth;
        console.log(`Area is ${Area}`);
    }
}

class Square extends Rectangle{
    constructor(length){
        super(length)
        this.breadth = length;
    }
}

let obj = new Square(45);
obj.area();

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question no. 2
/*
Write a javascript function find_largest to return the nth largest number

in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]

find_largest(3) will return third largest number from the above array -
which is 8.
*/

console.log("\nQuestion no. 2");

let arr = [3,45,6,7,23,5,7,8];

let arr1 = arr; // arr1 = duplicate array of arr

let nthMaxnumber ,n ;

function nthLargest(n){

for(let i = 0;i < n;i++){
    nthMaxnumber = Math.max(...arr1);
    arr1 = removeItem(nthMaxnumber,arr1);  
   
}
console.log(`${n} Largest no. from the array [${arr}]`);
console.log(`Answer = ${nthMaxnumber}`);

function removeItem(nthMaxnumber,arr1){
  arr1 = arr1.filter((a) => a !== nthMaxnumber);
   return arr1;
}

}

nthLargest(3);

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Question no. 3
/*
Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8.
*/

console.log("\nQuestion no. 3");

let prompt = require('prompt-sync')();
let num = prompt("Input the No. = ");
let str = num.toString();



let resultstr = [str[0]];       // it is storing the first element of str string....
 // resultstr = resultant string

for(let i = 1;i < str.length;i++){

  if(str[i]%2 === 0 && str[i-1]%2 === 0){          
    resultstr.push("-",str[i]);
  }else{                                         // here we are adding "-" and number from str array to resultstr acc. to condition
    resultstr.push(str[i]);
  }

}
resultstr =  resultstr.join('');

console.log( "Your Output = " + resultstr);

