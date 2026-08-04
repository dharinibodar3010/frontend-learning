/*Use map() to format Flipkart products.*/

const products = [

    {
        name: "Mobile",
        price: 20000
    },

    {
        name: "Watch",
        price: 5000
    }

];


const productDetails = products.map(product =>
    `Product: ${product.name}, Price: ₹${product.price}`
);


console.log(productDetails);