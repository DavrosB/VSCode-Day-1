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
let age = 50;
age >=50 ? console.log(`Age is 50 or above`):console.log(`Age is less than 50`);
//this is the finished code
