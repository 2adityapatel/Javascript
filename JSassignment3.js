console.log("Javascript Assignment 3");

// Question no. 1
// Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10

console.log("\nQuestion no. 1");

let str = "";
let count = 1;

for (let i = 1; i <= 4; i++){

    for(let j = 1;j <= i; j++){
        str = str + count + " ";
        count++ ;
    }
    str = str + "\n";
}

console.log(str);


//----------------------------------------------------------------------------------------------->

// Question no. 2
// Write a program to find whether a given number is armstrong number or
// not-

console.log("\nQuestion no. 2");

let num = 153;              // rem = remainder , 
let x = num;
let  sum = 0 ,rem ;
 while(x > 0){
    rem = x%10;
    sum = sum + (rem*rem*rem);
    x = parseInt(x/10);
 }
 if(sum === num){
 console.log(`${num} is an Armstrong no. `);
 }else{
    console.log(`${num} is not an Armstrong no. `);
 }


 //----------------------------------------------------------------------------------------------------------


 // Question no. 3
 //  Write a program to find whether a given number is special number or
//  not-


 console.log("\nQuestion no. 3");

 let N = 145;              // rema = remainder , fac = factorial , N = special no.
 let y = N;
 let  fac = 1,summ = 0 ,rema ;


 while(y > 0){
    rema = y%10;
    for(let k =1;k <= rema;k++){
        fac = fac * k;
    }
    summ = summ + fac;
    y = parseInt(y/10);
    fac = 1;
 }


 if(summ === N){
    console.log(`${N} is a Special number (N)... `);
 }else{
    console.log(`${N} is not a Special number (N)... `);
 }