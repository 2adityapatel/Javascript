console.log("Javascript Assignment 7");

/*
Question :1
1. Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice Output: Ice
Input:Icecream Output:Icec…
*/

console.log("\nQuestion 1 \n");

function shortenString(){
    let result = "";
    let prompt = require('prompt-sync')();
    let string = prompt("Input a String : ");

    if(string.length <= 4){
        result = string;
    }
    else if(string.length > 4){
        for(let i= 0;i < 4;i++){
            result += string[i];
        }
        result += "...";
    }
    console.log("Input : "+ string + "  Output : " + result );

}

shortenString();

/*
2. Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy” Output: “HiiBoy”
*/

console.log("\nQuestion 2 \n");

function removeWhitespaces(){

    let prompt = require('prompt-sync')();
    let S = prompt("Input a String : ");

    let newString = "";

    for(let j = 0 ;j < S.length;j++ ){
        if(S[j] != " "){
            newString += S[j];
        }
    }
    console.log("Input : " + S + " Output : " + newString);
}

removeWhitespaces();

/*
3. Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy” Output: “Boy Hii”
*/

console.log("\nQuestion 3 \n");

function exchangewords(){
    let Result;
    let word1 ="",word2 = "";

    let prompt = require('prompt-sync')();
    let Str = prompt("Input a String of two words: ");

    indexOfSpace = Str.indexOf(" ");

    for(var k =0;k<indexOfSpace;k++){
        word1 += Str[k];
    }

    for(var j =indexOfSpace + 1;j<Str.length;j++){
        word2 += Str[j];
    }

    Result = word2 + " " + word1;

    console.log("Input : " + Str + " Output : " + Result );
}

exchangewords();

/*
4. Input a String S with a word, and replace character “a” with “x” and
display the result -
Input: “apple” Output: “xpple”
*/

console.log("\nQuestion 4 \n");

function replaceA(){
    let replacedStr;
    let prompt = require('prompt-sync')();
    let oldStr = prompt("Input a String with 'a' letter word: ");

    replacedStr = oldStr.replace("a","x")

    console.log("Input : " + oldStr + " Output : " + replacedStr);

}

replaceA();

/*
5. What string method can be used to convert string into array ?
*/

console.log("\nQuestion 5 \n");
//Answer
console.log(" Ans => The string method which can be used to convert string into array is split() method.");

/*
6. What string method can be used to check the occurrence of a specified
text in a string?
*/
console.log("\nQuestion 6 \n");
//Answer
console.log("Ans => includes() string method can be used to check the occurence of a specified text in a string");

/*
7. How can you break a string to a newline in Javascript ?
*/
console.log("\nQuestion 7 \n answer in code ");
//Answer
// => By ' \n ' character you can break a string to a newline in Javascript.

/*
8. Write a Javascript function to test whether the first character of a string
is lowercase.
*/
console.log("\nQuestion no. 8\n");


function toLowerCase(){
    let prompt = require('prompt-sync')();
    let str = prompt("Input a String : ");
        if( str.charAt(0).toLowerCase() === str.charAt(0)){
            console.log("Yes the first character of string is in lowercase and it is -> " + str[0]);
        }else{
            console.log("No ,the first character of string is not in lowercase and it is -> " + str[0]);
        }
}
toLowerCase();

/*
9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.
How will you handle that ?
*/

console.log("\nQuestion no. 9\n");
//Answer

console.log('Ans => If a user enters "yes", "YES","Yes" ,etc . Then we can either convert thr string into lowercase or uppercase. \n Or we can use regular expression like these input = /yes/i');

/*
10. Given a String S, achieve following tasks
a) Convert the String into upper case.
b) Convert only the first character to uppercase.
c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string
*/

console.log("\nQuestion no. 10\n");

let prompt = require("prompt-sync")();
let stR = prompt("Input a String : ");

console.log("\na)\n");

function intoUppercase() {
  let upperCaseStr = stR.toUpperCase();
  console.log("Uppercase String : " + upperCaseStr);
}

intoUppercase();

console.log("\nb)\n");

function firstCharUpper() {
  let firstChar = "";
  for (let i = 0; i < stR.length; i++) {
    if (stR[i] === stR[0]) {
      firstChar += stR[i].toUpperCase();
    } else {
      firstChar += stR[i];
    }
  }
  console.log("Input : " + stR + " Output : " + firstChar);
}

firstCharUpper();

console.log("\nc)\n");

function intoLowerCase() {
  let lowerCaseStr = stR.toLowerCase();
  console.log("Lowercase String :" + lowerCaseStr);
}

intoLowerCase();

console.log("\nd)\n");

function swapString() {
  let firsthalf = "",
    secondhalf = "",
    finalStr;
  if (stR.length % 2 === 0) {
    for (let j = 0; j < stR.length / 2; j++) {
      firsthalf += stR[j];
    }
    for (let k = stR.length / 2; k < stR.length; k++) {
      secondhalf += stR[k];
    }
    finalStr = secondhalf + firsthalf;
  } else {
    for (let j = 0; j < parseInt(stR.length / 2); j++) {
      firsthalf += stR[j];
    }
    for (let k = parseInt(stR.length / 2) + 1; k < stR.length; k++) {
      secondhalf += stR[k];
    }
    finalStr = secondhalf + stR[parseInt(stR.length / 2)] + firsthalf;
  }

  console.log(" Input : " + stR + " Swapped String : " + finalStr);
}

swapString();

console.log("\nd)\n");

function repeatingChars() {
  
  for (let i = 0; i < stR.length; i++) {
    let count = 0;
    for (let j = 0; j < stR.length; j++) {
      if (stR[i] == stR[j] && i > j) {
        break;
      }
      if (stR[i] === stR[j]) {
        count++;
      }
    }
    if(count > 0){
    console.log(`${stR[i]} repeats ${count} times`);
    }
   
  }
}
repeatingChars();


console.log("\nd)\n");

function reverseStr(){
    let reversedStr = "";
    console.log(reversedStr);
    for (let i = stR.length - 1; i >= 0; i--) {
        reversedStr += stR[i];
    }
    console.log("Input : "+ stR + " Reversed String : " + reversedStr);
}

reverseStr();


/*
Completed Assignment 7
*/