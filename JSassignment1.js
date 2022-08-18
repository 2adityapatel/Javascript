console.log("Javascript Assignment 1");

// Question no. 1
console.log("\nQuestion 1");
function checkleapyear(year){
if (year%4 == 0 && year%100 != 0 || year%400 == 0) {
    console.log(`Yes,${year} is a leap year.`);
}else{
    console.log(`${year} is not a leap year.\n`);
}
}
checkleapyear(2000);

// Question no. 2
console.log("\nQuestion 2"); 
function tempC(celsius,fahrenheit)   //tempC = Temperature Conversion Function
{
    let fahrenheitTemp = celsius * (9/5) + 32;
    console.log(celsius +"\xB0C" + " is " + fahrenheitTemp + "\xB0F");
    let celsiusTemp = (fahrenheit - 32) * (5/9);
    console.log(fahrenheit +"\xB0F" + " is " + celsiusTemp + "\xB0C");
}
tempC(60,45);


// Question no. 3
console.log("\nQuestion 3");
function fact(num)               //fact = means factorial (name of function)
{
    let fac = 1;
    if(num > 0)
    {
    for (let i = 1; i <= num; i++)
    {
        fac = fac * i;
    }   
    console.log(`The factorial of ${num} is ${fac}`);
    }
    else if(num == 0){
        console.log(`The factorial of 0 is 1`);
    }
    else{
        console.log("Not a valid no.");
    }
}
fact(6);