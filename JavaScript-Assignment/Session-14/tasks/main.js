import {
    formatSongTitle,
    getSongDurationInMinutes
} from "./spotifyUtils.js";

import {
    addToCart,
    removeFromCart,
    calculateTotal
} from "./cartUtils.js";


function displaySong() {

    const title =
        formatSongTitle("shape of you");

    const duration =
        getSongDurationInMinutes(245);

    console.log("Song:", title);

    console.log("Duration:", duration);
}


function testCart() {

    let cart = [];


    cart = addToCart(
        cart,
        {
            name: "Shoes",
            price: 999
        }
    );


    cart = addToCart(
        cart,
        {
            name: "Watch",
            price: 1500
        }
    );


    console.log("Cart:", cart);


    console.log(
        "Total:",
        calculateTotal(cart)
    );


    cart = removeFromCart(
        cart,
        "Shoes"
    );


    console.log(
        "After Remove:",
        cart
    );
}


displaySong();

testCart();