// Zoya helped me understand how to create classes, objects, and arrays 

// class for glaze type and packs

class Rolls {
    glazeOptions;
    glazePrice;
    constructor(glazeOptions, glazePrice) {
        this.glazeOptions = glazeOptions;
        this.glazePrice = glazePrice; 
    }
}

class Pack {
    packSize;
    packMultiplier;
    constructor(packSize, packMultiplier) {
        this.packSize = packSize;
        this.packMultiplier = packMultiplier;
    }
}

// create 4 objects for glaze types and 4 for pack prices

let keepOriginal = new Rolls("Keep Original", 0);
let vanillaMilk = new Rolls("Vanilla milk", 0);
let sugarMilk = new Rolls("Sugar milk", 0.50);
let doubleChocolate = new Rolls("Double Chocolate", 1.50);

let one = new Pack(1, 1);
let three = new Pack(3, 3);
let six = new Pack(6, 5);
let twelve = new Pack(12, 10);

// create arrays for glaze options and pack options

const glazeArray = [keepOriginal, vanillaMilk, sugarMilk, doubleChocolate];  
const packArray = [one, three, six, twelve]; 

// Napol taught me how to create for loops and functions 

// create a for loop to populate dropdown with glaze options 

for (let i = 0; i < glazeArray.length; i++) {
    let a = document.getElementById("glaze");
    // Create the option element
    var option = document.createElement('option');

    let glaze = glazeArray[i] // get the ith element in glazeArray

    // Change the innerText and value accordingly
    option.text = glaze.glazeOptions;
    option.value = glaze.glazePrice;
    // Add the option element to related select input.
    a.add(option);
}

// create a for loop to populate dropdown with pack size options

for (let i = 0; i < packArray.length; i++) {
    let a = document.getElementById("roll");
    // create the option element
    var option = document.createElement('option');
    let pack = packArray[i] // get the ith element in glazeArray
    // change the innerText and value accordingly
    option.text = pack.packSize;
    option.value = pack.packMultiplier;
    // add the option element to related select input
    a.add(option);
}


let packPrice = 1.0;

function packChange(element) {
    const newPackPrice = parseFloat(element.value);
    packPrice = newPackPrice; // can create it based on this 
    calculateNewPrice(); // define this part later
}

let glazingPrice = 0.0;

function glazeChange(element) {
    const newGlazePrice = parseFloat(element.value);
    glazingPrice = newGlazePrice; // can create it based on this
    calculateNewPrice();
}

let basePrice = 2.49;

function calculateNewPrice() {
    let newPrice = (basePrice + glazingPrice) * packPrice;
    console.log(newPrice);
    updateTotalPrice(newPrice);
}

function updateTotalPrice(price) {
    document.querySelector(".productdetails-total p").innerText = "$" + price.toFixed(2);
}

// add line for hw3 

// the following was the code I wrote to help me understand the logic of for loops 


// let priceChange = 0;
// let oldPrice = 2.49;

// function glazeChange(){
//     let a = document.getElementById("glaze");
//     let text = a.options[a.selectedIndex].text; 
//     console.log(text);

//     // change to for loop with class 

//     if (text=="Vanilla milk"){
//         priceChange = 0.50;
//     }
//     else if (text=="Double chocolate"){
//         priceChange = 1.50;
//     }
//     else{
//         priceChange = 0;
//     }
//     let x = document.querySelector(".productdetails-total p").innerText;
//     let newPrice = oldPrice + priceChange;
//     console.log(priceChange);
    
//     document.querySelector(".productdetails-total p").innerText = newPrice;
// }


// $ sign plus price

// let packSize = 0;

// function pack(){
//     let a = document.getElementById("roll");
//     let text = a.options[a.selectedIndex].text; 
//     console.log(text);

//     // change to for loop with class 
    
//     if (text=="1"){
//         packSize = 1;
//     }
//     else if (text=="3"){
//         packSize = 3;
//     }
//     else if (text=="6"){
//         packSize = 6;
//     }
//     else{
//         packSize = 9;
//     }
//     let x = document.querySelector(".productdetails-total p").innerText;
//     let newPrice = oldPrice * packSize;
//     console.log(priceChange);
    
//     document.querySelector(".productdetails-total p").innerText = newPrice;
// }


























