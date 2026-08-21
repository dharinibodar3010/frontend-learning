/*Use one-liner with map() and reduce() to calculate total Myntra cart price.*/

const cartItems = [

    {
        name: "Shirt",
        price: 1000
    },

    {
        name: "Shoes",
        price: 3000
    },

    {
        name: "Jeans",
        price: 2000
    }

];


const totalAmount = cartItems.map(item => item.price)
    .reduce((sum, price) => sum + price, 0);


console.log(totalAmount);