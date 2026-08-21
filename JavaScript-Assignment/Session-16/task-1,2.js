/* Given an array of Flipkart product objects with name, price, and isInStock, use filter() to 
create a new array containing only products that are in stock. */

const products = [

    {
        name: "iPhone",
        price: 70000,
        isInStock: true
    },

    {
        name: "Laptop",
        price: 50000,
        isInStock: false
    },

    {
        name: "Headphone",
        price: 3000,
        isInStock: true
    }

];


const inStockProducts = products.filter(product => product.isInStock);


console.log(inStockProducts);