`use strict`;

//Scope Exercise 1
//Write the following code and assess the output
//Create a function
//Declare a variable with a value inside it (i.e. let x = 'foo')
//Write an if statement that checks if the variable meets a condition
//Inside create a local variable
//Try to access both variables and asses your output

const dumbFunction = () => {
    
    let x=`foo`;
    if (x==`foo`) {
        let condition=true;
        console.log(condition)
    } 
    else {
        let condition=false;
        console.log(condition)
    }

}

dumbFunction();
