// Zoya Egiazaryan helped me understand how to create classes, objects, and arrays 

// create classes for glaze type and pack size

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

// Napol walked me through how to create for loops and functions 

// create a for loop to populate dropdown with glaze options 

for (let i = 0; i < glazeArray.length; i++) {
    let a = document.getElementById("glaze");
    // create the option element
    var option = document.createElement('option');
    // get the ith element in glazeArray
    let glaze = glazeArray[i];
    // change the innerText and value accordingly
    option.text = glaze.glazeOptions;
    option.value = glaze.glazePrice;
    // add the option element to related select input.
    a.add(option);
}

// create a for loop to populate dropdown with pack size options

for (let i = 0; i < packArray.length; i++) {
    let a = document.getElementById("roll");
    // create the option element
    var option = document.createElement('option');
    // get the ith element in glazeArray
    let pack = packArray[i];
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
    glazingPrice = newGlazePrice; 
    calculateNewPrice();
}

// commented out to reflect the new base prices from rolls dictionary (HW4)

// let basePrice = 2.49;

// function calculateNewPrice() {
//     let newPrice = (basePrice + glazingPrice) * packPrice; 
//     console.log(newPrice);
//     updateTotalPrice(newPrice);
// }

function updateTotalPrice(price) {
    // changes dollar value with added dollar sign and rounds the price to 2 decimals 
    document.querySelector(".productdetails-total p").innerText = "$" + price.toFixed(2);
}

// HW4 

let cart = [];

// get roll type from url and store roll type as variable 

// get query string from url
const queryString = window.location.search;
// use query string to create URLSearchParams object
const params = new URLSearchParams(queryString);
// access 'roll' parameter using "get" method
const rollType = params.get('roll');

// assign variables to extract prices from rolls dictionary

const rollPrice = rolls[rollType].basePrice;

// assign variables to extract image paths from rolls dictionary

// after alternative methods did not work, I used https://stackoverflow.com/questions/66998563/adding-template-literals-to-an-img-src-tag 
// that helped me use template literals to link the image with its path
const rollImage = `products/${rolls[rollType].imageFile}`;
// get reference image from html 
const rollImageTag = document.getElementById("indeximage");
// select source to define image in 
rollImageTag.src = rollImage; 

// correct roll names added 

const headerElement = document.querySelector(".titletext");
headerElement.innerText = rollType + " Cinnamon Roll";

const titleElement = document.querySelector(".title");
headerElement.innerText = rollType + " Cinnamon Roll";

// define class Roll containing product information <---

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// calculate prices based on prices from rolls dictionary

function calculateNewPrice() {
    let newPrice = (rollPrice + glazingPrice) * packPrice; 
    console.log(newPrice);
    updateTotalPrice(newPrice);
}

// update prices from rolls dictionary 

document.querySelector(".productdetails-total p").innerText = "$" + rollPrice;

// add to cart function that reads roll from html 

function addToCart() {
    // variables to get glaze choices 
    const glazeChoice = document.getElementById("glaze");
    const glazing = glazeChoice.options[glazeChoice.selectedIndex].text;
    // variable to get pack choices 
    const packChoice = document.getElementById("roll");
    const packing = packChoice.options[packChoice.selectedIndex].text;
    // create instance of Roll class that reads roll type, glaze choice, pack choice, and roll price 
    let rollToAddToCart = new Roll(rollType, glazing, packing, rollPrice); // ?
    cart.push(rollToAddToCart);
    // print/update cart values
    console.log(cart);
}

if (document.URL.includes("cart.html")) {
    let cart = new Set();

    cart.add(new Roll("Original Cinnamon Roll", "Sugar Milk", 1, 2.49));
    cart.add(new Roll("Walnut Cinnamon Roll", "Vanilla Milk", 12, 3.49));
    cart.add(new Roll("Raisin Cinnamon Roll", "Sugar Milk", 3, 2.99));
    cart.add(new Roll("Apple Cinnamon Roll", "Original", 3, 3.49)); 

    function createElement(item) {
        const template = document.querySelector("#bunTemplate");
        console.log(template);
        const clone = template.content.cloneNode(true)
        console.log(clone)
        
    }
}




