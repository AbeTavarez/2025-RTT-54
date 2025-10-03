import PhysicalProduct from "./physical-product";


const phone = new PhysicalProduct('P8345', 'TSPhone', 300, 0.9);

// use the getter to read the price prop
console.log(phone.readPrice);
// use the getter to read computed prop of price + tax
console.log(phone.readFullPrice);


phone.newFullPrice(700, 0.9);
console.log(phone.readFullPrice);


// use the setter to update the price prop
phone.newPrice = 500;

console.log(phone.readPrice);



console.log("The price of the phone is: " + phone.price);

// phone.price = 1000;

console.log("The new price of the phone is: " + phone.price);

// console.log(phone);
