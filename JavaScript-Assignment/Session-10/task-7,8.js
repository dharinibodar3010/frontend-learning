/*Given an object representing a Zomato order: const order = { item: 'Pizza', price: 350, user: 'Amit' }, 
use object destructuring to extract item and price into variables, then log a message like 'Amit ordered Pizza for ₹350'.*/

const order = {
    item: "Pizza",
    price: 350,
    user: "Amit"
};


// Object destructuring
const { item, price, user } = order;


console.log(`${user} ordered ${item} for ₹${price}`);