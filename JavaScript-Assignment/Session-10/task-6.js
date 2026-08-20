/*Write a function orderFood(item, quantity = 1) that returns a string like 'You ordered 2 Burgers.' 
Use default parameters so that if quantity is not passed, it defaults to 1.*/

function orderFood(item, quantity = 1) {

    return `You ordered ${quantity} ${item}.`;

}


console.log(orderFood("Pizza"));

console.log(orderFood("Burger", 2));