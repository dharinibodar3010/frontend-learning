export function addToWishlist(
    wishlist,
    item
) {

    return [...wishlist, item];

}


export function removeFromWishlist(
    wishlist,
    itemName
) {

    return wishlist.filter(
        item => item.name !== itemName
    );

}


export function listWishlist(
    wishlist
) {

    wishlist.forEach(item => {

        console.log(
            item.name
        );

    });

}