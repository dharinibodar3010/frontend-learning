/*Create addToCart(productName, quantity) with log, warn, error.*/

function addToCart(productName, quantity) {


    if (quantity < 0) {

        console.error(
            "❌ Quantity cannot be negative"
        );

    }


    else if (quantity === 0) {

        console.warn(
            "⚠️ Quantity is zero"
        );

    }


    else {

        console.log(
            `✅ ${productName} added. Quantity: ${quantity}`
        );

    }


}



addToCart("Mobile", 2);

addToCart("Laptop", 0);

addToCart("Watch", -1);