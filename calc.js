`use strict`

// create a heading called CALCULATOR

let heading = document.querySelector("#heading");
logo.setAttribute("height","500");
logo.setAttribute("width","1000");

console.dir(logo);

//! Create new HTML elements

let newHeading = document.createElement("h1"); //<h1> </h1>
let text = document.createTextNode("Calculator"); // 

newHeading.appendChild(text); // <h1> Calculator </h1>

//? 1. Grab the DIV from the HTML 
let divAddToMe = document.querySelector("#heading");

divAddToMe.appendChild(newHeading);


// Calculator functions

let addNum(n1, n2) {
    let addVal=n1+n2;
    console.log(n1+n2);
}

let minNum(n1,n2) {
    let minVal = n1-n2;
    console.log(n1-n2)
}

let mulNum(n1,n2) {
    let mulVal = n1 * n2;
    console.log(n1 * n2)
}

let divNum (n1, n2) {
    if ((n1 != 0) ¦¦ (n2 != 0))   {

    let divVal = n1 / n2;
    console.log (n1 / n2) 
    }

   else {
       console.log("Can't divide these numbers - one of the numbers is zero")
   } 

}