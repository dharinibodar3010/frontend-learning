import {
    addToWishlist,
    removeFromWishlist,
    listWishlist
} from "./wishlistUtils.js";


let wishlist = [];


wishlist = addToWishlist(
    wishlist,
    {
        name: "Shoes",
        price: 999
    }
);


wishlist = addToWishlist(
    wishlist,
    {
        name: "Watch",
        price: 1499
    }
);


console.log("Wishlist:");

listWishlist(wishlist);


wishlist = removeFromWishlist(
    wishlist,
    "Shoes"
);


console.log(
    "After removing Shoes:"
);

listWishlist(wishlist);