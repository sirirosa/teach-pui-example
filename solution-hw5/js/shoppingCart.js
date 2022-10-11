// create dictionaries that will be used to calculate price 

const glaze = {
    "Original": 0,
    "Sugar Milk": 0,
    "Vanilla Milk" : 0.5,
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

let cart = new Set();

cart.add(new Roll("Original", "Sugar Milk", 1, 2.49));
cart.add(new Roll("Walnut", "Vanilla Milk", 12, 3.49));
cart.add(new Roll("Raisin", "Sugar Milk", 3, 2.99));
cart.add(new Roll("Apple", "Original", 3, 3.49));

// calculate the final price of each roll

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

function deleteItem(templateItem, item) {
    // take the template block out of the DOM
    templateItem.remove();
    // take the item out of the cart set
    cart.delete(item);
    calculateFinalPrice();
}

// create template for roll items and update details on each roll item 

function createElement(item) {
    const template = document.querySelector("#bunTemplate");
    //console.log(template);
    const clone = template.content.cloneNode(true);
    //console.log(clone);
    const templateItem = clone.querySelector(".cartproduct1");
    //console.log(templateItem);
    let itemList = document.querySelector(".cartproducts");
    // remove button
    const removeButton = templateItem.querySelector(".remove");
    removeButton.addEventListener("click", () => {deleteItem(templateItem, item)})
    // update the image
    templateItem.querySelector(".cartimgstyle").src =  "./products/" + rolls[item.type].imageFile;
    // update the roll name
    templateItem.querySelector("#types").innerText = item.type + " Cinnamon Roll";
    // update the glazing
    templateItem.querySelector("#glazing").innerText = "Glazing: " + item.glazing;
    // update the pack size
    templateItem.querySelector("#pack").innerText = "Pack Size: " + item.size;
    // calculate the right price
    itemPrice = calculateNewPrice(item.basePrice, glaze[item.glazing], pack[item.size]);
    // update correct price 
    templateItem.querySelector("#price").innerText = "$" + itemPrice.toFixed(2);
    // appends each item to the page
    itemList.append(templateItem);
}

// go through all objects in cart
for (items of cart) {
    createElement(items);
}

// calculate total price
calculateFinalPrice();
