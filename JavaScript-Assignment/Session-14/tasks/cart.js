import {
    formatPrice,
    getDiscountedPrice
} from "./utils.js";


const items = [

    {
        name: "Shoes",
        price: 2000,
        discount: 10
    },

    {
        name: "Watch",
        price: 3000,
        discount: 20
    },

    {
        name: "Bag",
        price: 1500,
        discount: 15
    }

];


items.forEach(item => {

    const discountedPrice =
        getDiscountedPrice(
            item.price,
            item.discount
        );

    console.log(
        item.name,
        "Original:",
        formatPrice(item.price),
        "Discounted:",
        formatPrice(discountedPrice)
    );

});