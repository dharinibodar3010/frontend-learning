export function addToCart(cart, item) {

    return [...cart, item];

}


export function removeFromCart(cart, itemName) {

    return cart.filter(
        item => item.name !== itemName
    );

}


export function calculateTotal(cart) {

    return cart.reduce(
        (total, item) =>
            total + item.price,
        0
    );

}