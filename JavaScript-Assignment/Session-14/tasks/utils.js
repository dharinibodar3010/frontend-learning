// Task 1 & 2
export function generateOrderId() {

    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let orderId = "";

    for (let i = 0; i < 8; i++) {

        const randomIndex =
            Math.floor(
                Math.random() * characters.length
            );

        orderId += characters[randomIndex];
    }

    return orderId;
}


// Task 3
export function formatPrice(price) {

    return `₹${price.toFixed(2)}`;
}


// Task 3
// Task 9 ma aa function default export banse.

export function getDiscountedPrice(price, discount) {

    return price - (price * discount / 100);
}