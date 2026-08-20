/*Use the spread operator to combine your favorite Zomato dishes and your favorite Swiggy dishes into 
a single array called allDishes, then log allDishes.*/

const zomatoDishes = ["Pizza", "Burger", "Pasta"];

const swiggyDishes = ["Dosa", "Biryani", "Sandwich"];


// Combine arrays using spread operator
const allDishes = [...zomatoDishes, ...swiggyDishes];


console.log(allDishes);