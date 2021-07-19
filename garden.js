'use strict'

// GET ALL THE ELEMENTS
// CREATE elements
const PLANTNAME = document.querySelector("#plantName");
const PLANTTYPE = document.querySelector("#plantType");
const DECORATIVE = document.querySelector("#decorative");
const DIV = document.querySelector("#responsefromdb");
let submitButton = document.querySelector("#btn");

// READ elements
let readBTN = document.querySelector("#readbtn");


// UPDATE elements
const UPLANTNAME = document.querySelector("#uplantName");
const UPLANTTYPE = document.querySelector("#uplantType");
const UDECORATIVE = document.querySelector("#udecorative");
const UDIV = document.querySelector("#responsefromdb");
const UPDATEID = document.querySelector("#updateID");
let updateBTN = document.querySelector("#updatebtn");

// DELETE elements
const DELETEID = document.querySelector("#deleteID");
let delBTN = document.querySelector("#delBtn");


// CREATE THE CUSTOM METHOD
const printToScreen = (msg) => {
    const P = document.createElement("p");
    const TEXT = document.createTextNode(msg);

    P.appendChild(TEXT);
    DIV.appendChild(P);
}


// CREATE plant method
const createPlant = (e) => {
    e.preventDefault();

    // get the value from the element
    const PLANTNAME_VALUE = PLANTNAME.value; 
    const PLANTTYPE_VALUE = PLANTTYPE.value; 
    const DECORATIVE_VALUE = DECORATIVE.value; 

    console.log(PLANTNAME_VALUE,PLANTTYPE_VALUE,DECORATIVE_VALUE);

    // CREATE THE OBJECT TO BE SENT TO THE API

    let data = {
        plantName: PLANTNAME_VALUE,
        plantType: PLANTTYPE_VALUE,
        decorative: DECORATIVE_VALUE
    
    }

    axios.post(`http://localhost:9092/plants/createplant`, data, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }})
        .then((response) => printToScreen("Success!"))
        .catch((error) =>  printToScreen("ERROR!!!"));
}


// STUCK on the is bit ---------START FROM HERE. The comments are a compilation of various tries
// READ Method

// const readPlant = (data) => {
//     e.preventDefault();

// const readPlant = (e) => {
//     e.preventDefault();
//     console.log(plantName.value);

// }

// Commented this bit out

// const readPlant = (e) => {
//     e.preventDefault();

//     const PLANTNAME_VALUE = PLANTNAME.value; 
//     const PLANTTYPE_VALUE = PLANTTYPE.value; 
//     const DECORATIVE_VALUE = DECORATIVE.value; 

//     let data = {
//         plantName: PLANTNAME_VALUE,
//         plantType: PLANTTYPE_VALUE,
//         decorative: DECORATIVE_VALUE
//     }
    
    //     const readPlant = (e) => {
    //      e.preventDefault();

    //  let i=0
    //  while(i<=e.length)  {

     // printToScreen(data.plantType);  this was my attempt
     // printToScreen(data.decorative); another failed attempt

    //axios.get(`http://localhost:9092/plants/read/`)))  - this was my idea of putting the 
    //   axios.get inside the console.log

    //  I knew I had to loop through the data but couldn't figure out where it came from
     //   console.log(data);
    //   i++
    //   console.log(plantName.value, plantType,value, decorative.value);
    //   console.log(e.value);

 //}

// ---------END OF STUCK PART   End of bit I'm stuck on

// READ Method
// Credit to Cameron for the help on this one

        const readPlant = (e) => {
            e.preventDefault();
            axios.get(`http://localhost:9092/plants/read/`, {
      headers: {
          'Access-Control-Allow-Origin': '*',
      }})
      .then((response) => { 
          
        for(let entry in response.data){
        
        printToScreen(JSON.stringify(response.data[entry].plantName));
       
      }}
    
    )

     .catch((error) => printToScreen("An error has occurred - Try again"));
     }
    

// UPDATE METHOD
// CREATE THE UPDATED OBJECT TO BE SENT TO THE API

const updatePlant = (e) => {
    e.preventDefault();


// get the value from the element
const PLANTNAME_VALUE = UPLANTNAME.value; 
const PLANTTYPE_VALUE = UPLANTTYPE.value; 
const DECORATIVE_VALUE = UDECORATIVE.value; 
const UPDATEID_VALUE = Number(UPDATEID.value);

console.log(PLANTNAME_VALUE,PLANTTYPE_VALUE,DECORATIVE_VALUE, UPDATEID_VALUE);

// UPDATED OBJECT TO BE SENT TO THE API

let data = {
    plantName: PLANTNAME_VALUE,
    plantType: PLANTTYPE_VALUE,
    decorative: DECORATIVE_VALUE
}


axios.put(`http://localhost:9092/plants/updateplant/${UPDATEID_VALUE}`, data, {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }})
    .then((response) => printToScreen("Record has been updated"))
    .catch((error) =>  printToScreen("What the hell????"));

}


//DELETE Method

const deletePlant = () => {

    // GET THE VALUE FROM THE ID ELEMENT
    const DELID = Number(DELETEID.value);

    axios.delete(`http://localhost:9092/plants/delete/${DELID}`, {
        headers:{
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then((response) => printToScreen("You've successfully deleted your plant record"))
        .catch((error) => printToScreen("An error has occurred - Try again"));
}


submitButton.addEventListener('click',createPlant);
readBTN.addEventListener('click', readPlant);
updateBTN.addEventListener('click',updatePlant);
delBTN.addEventListener('click',deletePlant);

