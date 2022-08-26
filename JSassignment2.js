console.log("\nJavascript Assignment 2");

// Question 1 

console.log("\nQuestion 1");

function sidesOfTriangle(s1 , s2 , s3){
    if( s1 === s2 && s2 === s3){
        console.log("It's an equilateral triangle.");
    }
    else if(s1 ===  s2 || s2 === s3 || s1 === s3){
        console.log("It's an isosceles triangle.");
    }
    else{
        console.log("It's a scalene triangle");
    }
}
let s1 = 3, s2 = 3, s3 = 6;

sidesOfTriangle(s1,s2,s3);

//--------------------------------------------------------------------------

// Question 2

console.log("\nQuestion 2");

let x = 99;  // x = marks 

function checkGrade(x){
switch (true) {
    case (x >= 90 && x<= 100):
    console.log("S grade");
    break;
    case (x >= 80 && x<= 90):
    console.log("A grade");
    break;
    case (x >= 70 && x <= 80):
    console.log("B grade");
    break;
    case (x >= 60 && x<= 70):
    console.log("C grade");
    break;
    case (x >= 50 && x<=60):
    console.log("D grade");
    break;
    case (x >= 40 && x<=50):
    console.log("E grade");
    break;
    case (x >= 0 && x<= 40):
    console.log("Student has failed");
    break;

  default:
    console.log("Invalid marks");
    break;
}
}

checkGrade(x);

//--------------------------------------------------------------------------------------

// Question 3 

console.log("\nQuestion 3");

let result =0;

for(i = 1;i < 1000;i++){
    if(i%3 === 0 || i%5 === 0){
       result += i;
    }
}
console.log(result);

//-----------------------------------------------------------------------------------------------------

// Question 4

console.log("\nQuestion 4");

let fac = 1, count = 0;                  // fac = factorial

function prime(x, y){
    for(i = x;i <= y;i++){
        for(k=1;k<= i;k++){
            if(i%k == 0){
                count++;
            }   
        }
        if(count == 2){
            for(j = 1;j <= i;j++){
                fac = fac * j;
            }
            console.log("factorial of",i, " = ",fac );
        }
    count = 0;    
    fac = 1; 
}
}

prime(1,15);