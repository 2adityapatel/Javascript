console.log("\nJavascript Assignment 8");

/*
1. Can we put duplicate values in the set object ?
*/
console.log("\nQuestion no. 1\n");
console.log("=> A JavaScript Set is a collection of unique values.\n=> Each value can only occur once in a Set .\n=> Therefore , we cannot duplicate values in the set object. ");

const Set1 = new Set([2,4,67,6,4]);
Set1.add(7);
Set1.delete(6);
console.log(Set1);
console.log("Here we inputed 4 two times then also it shows one time only.");

/*
2. Write the syntax for
a) Creating new set object
b) Adding new element to set object
c) Deleting element from set object
*/

console.log("\nQuestion no. 2\n");

console.log(" a) \nSyntax for new set object -> 'let Set1 = new Set()' ");
console.log(" b) \nAdding new element to set object -> Set1.add(9); ");
console.log(" c) \nDeleting element from set object -> Set1.delete(9); ");

/*
3. Create a set object with four random numbers from 0 to 10. Check if this
newly created set object has 8 in it. Use set object methods.
*/

console.log("\nQuestion no. 3\n");

const Set2 = new Set([3,5,8,1]);
console.log(Set2);
if(Set2.has(8) == true){
    console.log("Yes, 8 is present in the set.\n");
}else{
    console.log("No, 8 is not present in the set.\n");
}


/*
Completed Assignment 8 
*/