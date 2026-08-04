/*Rewrite a Flipkart-style product search using both a callback version and a Promise version: 
given an array of products, simulate a 1 second delay before returning all products whose name 
includes the search term.Hint:Use setTimeout to simulate the delay in both approaches.*/

const products = [
    { name: "iPhone" },
    { name: "Samsung Mobile" },
    { name: "Laptop" },
    { name: "Headphone" }
];


// Callback Version

function searchProductCallback(products, search, callback) {


    setTimeout(() => {


        let result = products.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );


        callback(result);


    }, 1000);


}



searchProductCallback(products, "mobile", function (result) {

    console.log("Callback Result:", result);

});




// Promise Version

function searchProductPromise(products, search) {


    return new Promise((resolve) => {


        setTimeout(() => {


            let result = products.filter(product =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );


            resolve(result);


        }, 1000);


    });


}



searchProductPromise(products, "iphone")

    .then((result) => {

        console.log("Promise Result:", result);

    });