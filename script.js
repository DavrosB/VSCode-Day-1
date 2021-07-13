`use strict`


//console.log("Davy");

//console.info("Bell");

//console.warn("Scotland");

//console.error("Pisces");
//console.log("BigBalls");

//let myCar = "Honda";
//let myModel = "CRV";
//console.log("My actual car is: " + myCar + " and the best model is: " + myModel);



//let myCar1 = "Honda";
//let myModel1 = "CRV";
//console.log(`my fav car is ${myCar1} and the model is ${myModel1}`);


//let a;
//let b = "12345";
//let c = 12344;
//let d = true;
//let e = {a:"JavaScript"};

//console.log (typeof(a));
//console.log (typeof(b));
//console.log (typeof(c));
//console.log (typeof(d));
//console.log (typeof(e));


//let totalMoney = 4000;
//let moneyPaidSoFar = 2348;
//let totalLeftToPay = totalMoney - moneyPaidSoFar;

//console.log(`The customer's bill is £${totalMoney} the remaining amount of money left to be paid is £${totalLeftToPay}`);

//console.log(`The customers bill so far is £${totalMoney} the amount left to pay is £${totalMoney - totalLeftToPay}`);


//Exercise 4
//let a = 100;
//while (a <= 200) {
//    console.log(`the value of a is ${a}`);
//    a++;
//}

//Exercise 5
//let a =100;
//while (a <= 200) {
//    if (a%2 == 0) {
//        console.log(`The number is even ${a} - `)
 //   }
//    else    {
//        console.log(`The number is odd ${a} * `)
//
//    }
//
//   a++
//}

//Exercise 6
//let number = 1;
//while (number <= 10) {

//for (let i =1; i<=10; i++) { 
 //   console.log(number);
//}
//let i=1;
//number++;
//
//}

//Exercise 7 use For Loop for Exercise 1 (4)
//for (let a = 100; a <= 200; a++) {
//    console.log(`a = ${a}`);
//  }


//Exercise 8 use For Loop for Exercise 2 (5)
//for (let a = 100; a <= 200; a++) {
//    if (a % 2 == 0) {
//      console.log(`The number is even ${a} - `);
//    } else {
//      console.log(`The number is odd ${a} * `);
//    }
//  }

//Exercise 9 - use switch case
// let today = new Date(); 
// let thisDay = today.getDay();
// //figure out which case number assigns to Tuesday
// console.log(thisDay.valueOf());

// switch (thisDay) {
//   case 0:
//     console.log(`It's Sunday`);
//     break;
//   case 6:
//     console.log(`It's Saturday`);
//     break;
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log(`It's either Tues/Wed/Thu or Fri`);
//     break;
//   default:
//     console.log(`I don't know what to do here`);
//     break;
// }


//MINI TASK Write a short program that prints each number from 1 to 100
// on a new line. For each multiple of 3, print "Fizz" instead of the number. 
//For each multiple of 5, print "Buzz" instead of the number. For numbers which
// are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


// let num = 1;
// for (let i=0; i<100;i++) {
//     if ((num%3 == 0) && (num%5 == 0)) {
//         console.log(`Number ${num} is FizzBuzz`)
//     }
//     else if (num%5 == 0) {

//         console.log(`Number ${num} is a Buzz`);

//     }

//     else if (num%3 == 0) {

//         console.log(`Number ${num} is a Fizz`)
//     }

//     else {

//         console.log(num);
//     }
    
//     num++;
  
    
//     }

// Conditional Exercise - If statement

// Create a IF statement that satifies the following:
// Declare a variable age
// Write a condition that checks if age is between 18 AND 65
// Return a value in each case where the condition is satisfied and not satisfied.
// Extra: Consider the case where age is less than 18 - return 'underage'.

// let age = 20;
// if ((age>=18)&&(age<=65)) {
//     console.log(`${age} is TRUE to condition`)

// }
// else if (age<18) {

//     console.log(`Underage`)
    
// }
// else {

//     console.log(`${age} is FALSE for the condition`)
// }


//Exercise 4 in QA Community
//Using ternary-if syntax, write code that checks if age is above 50.
// let age = 50;
// age >=50 ? console.log(`Age is 50 or above`):console.log(`Age is less than 50`);
//this is the finished code


// Exercise 1 
//Create an object called darthVader with the keys allegiance, 
//weapon and sith and the values of empire, lightsabre and true. 
//Finally log darthVader

// let darthVader = new Object();
// darthVader["allegiance"] = "empire";
// darthVader["weapon"] = "lightsabre";
// darthVader["sith"] = "true";

// console.log(darthVader);



//Exercise 2
//Create the following log statements using the darthVader Object
//Darth Vader's allegiance is to the Empire;
//Darth Vader's weapon of choice is a lightsabre;
//Darth Vader is a sith? true;
//Darth Vader is a Jedi? false;

// let darthVader = new Object();
// darthVader["allegiance"] = "empire";
// darthVader["weapon"] = "lightsabre";
// darthVader["sith"] = "true";

// console.log(`DarthVader allegiance is to the ${darthVader.allegiance}`);
// console.log(`DarthVader weapon of choice is a ${darthVader.weapon}`);
// if (darthVader.sith == "true") {
//     console.log(`DarthVader is a Sith?  TRUE or FALSE? = ${darthVader.sith}`)
// }


//Exercise 3

//Create an array with the name myArray with 2 elements hello,everyone..
let myArray = ["hello", "everyone"];

// Next print the length of the array
console.log(`The length of the array is ${myArray.length}`);

// Next use the push() method to add 3 elements to the array
myArray.push("how", "are","you");

// Next print the length of the array
console.log(`The length of the array is ${myArray.length}`);

// Next use shift() to remove an element
//In this case I'm removing the first element ie "hello"
myArray.shift(1);

// Finally print the contents of the array using an enhanced For loop.
for (let arrayPlace of myArray) {
    console.log(arrayPlace);
}





// blah blah

