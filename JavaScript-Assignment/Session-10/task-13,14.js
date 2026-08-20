/*Refactor this function to use an arrow function and rest parameters: function addToCart() 
{ let total = 0; for(let i=0; i<arguments.length; i++) { total += arguments[i]; } return total; } 
 The new function should be called addToCartArrow and accept any number of prices as arguments, 
 returning their sum.*/

 const addToCartArrow = (...prices) => {

    let total = 0;

    for(let price of prices) {
        total += price;
    }

    return total;

};


console.log(addToCartArrow(100, 200, 300));