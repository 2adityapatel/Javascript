console.log("Javascript Assignment 4");

// Question no. 1 

/*
 Create a function that takes a number (step) as an argument and returns the
 number of matchsticks in that step. See step 1, 2 and 3 in the image above.

 examples :
 matchHouses(1) ➞ 6
 matchHouses(4) ➞ 21
 matchHouses(87) ➞ 436
*/
console.log("\nQuestion no. 1");

function matchHouses(step)
{
    noofmatchsticks = (step * 5) + 1 ;    
    console.log(`matchHouses(${step}) => ${noofmatchsticks}\n`);
}

matchHouses(1);
matchHouses(4);
matchHouses(87);
