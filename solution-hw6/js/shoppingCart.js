// create dictionaries that will be used to calculate price 

const glaze = {
    "Keep Original": 0,
    "Sugar milk": 0,
    "Vanilla milk" : 0.5,
    "Double Chocolate": 1.5
}

const pack = {
    1: 1,
    3: 3,
    6: 5,
    12: 10
}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// let cart = new Set();

// cart.add(new Roll("Original", "Sugar Milk", 1, 2.49));
// cart.add(new Roll("Walnut", "Vanilla Milk", 12, 3.49));
// cart.add(new Roll("Raisin", "Sugar Milk", 3, 2.99));
// cart.add(new Roll("Apple", "Original", 3, 3.49));

// calculate the final price of each roll

let cart = [];

if (localStorage.getItem("rollStorage")!=null) {
    const cartString = localStorage.getItem("rollStorage");
    const cartParsed = JSON.parse(cartString);
    for (let i = 0; i < cartParsed.length; i++) {
        cart.push(cartParsed[i]);
    } 
    console.log(cart);
}


function calculateNewPrice(rollPrice, glazingPrice, packPrice) {
    let newPrice = (rollPrice + glazingPrice) * packPrice; 
    return (newPrice);
}

// add up the total price of all rolls

function calculateFinalPrice() {
    let allItemPrices = 0;
    for (item of cart) {
        allItemPrices += calculateNewPrice(item.basePrice, glaze[item.glazing], pack[item.size]);
    }
    document.querySelector(".cart-price").innerText = "$ " + allItemPrices.toFixed(2);
}

// "remove" deletes item

function deleteItem(templateItem, item, index) {
    // take the template block out of the DOM
    templateItem.remove();
    // take the item out of the cart set
    cart.splice(index, 1)
    localStorage.setItem("rollStorage", JSON.stringify(cart));
    calculateFinalPrice();
}

// create template for roll items and update details on each roll item 

function createElement(item, index) {
    const template = document.querySelector("#bunTemplate");
    //console.log(template);
    const clone = template.content.cloneNode(true);
    //console.log(clone);
    const templateItem = clone.querySelector(".cartproduct1");
    //console.log(templateItem);
    let itemList = document.querySelector(".cartproducts");
    // remove button
    const removeButton = templateItem.querySelector(".remove");
    removeButton.addEventListener("click", () => {deleteItem(templateItem, item, index)})
    // update the image
    templateItem.querySelector(".cartimgstyle").src =  "./products/" + rolls[item.type].imageFile;
    // update the roll name
    templateItem.querySelector("#types").innerText = item.type + " Cinnamon Roll";
    // update the glazing
    console.log(glaze[item.glazing], pack[item.size])
    templateItem.querySelector("#glazing").innerText = "Glazing: " + item.glazing;
    // update the pack size
    templateItem.querySelector("#pack").innerText = "Pack Size: " + item.size;
    // calculate the right price
    itemPrice = calculateNewPrice(item.basePrice, glaze[item.glazing], pack[item.size]);
    // update correct price 
    console.log(typeof(itemPrice), itemPrice);
    templateItem.querySelector("#price").innerText = "$" + itemPrice.toFixed(2);
    // appends each item to the page
    itemList.append(templateItem);
}

// go through all objects in cart
for ([index, items] of cart.entries()) {
    createElement(items, index);
    // pass each element an id then store it in deleteItem above
}

// calculate total price
calculateFinalPrice();

