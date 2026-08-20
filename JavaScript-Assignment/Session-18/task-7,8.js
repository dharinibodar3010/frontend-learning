/*Function throws error when quantity is 0. Use breakpoint.*/

function addToCart(item, quantity) {

    if (quantity === 0) {

        throw new Error("Quantity cannot be zero");
    }

    console.log(item, quantity);
}

addToCart("Mobile", 0);