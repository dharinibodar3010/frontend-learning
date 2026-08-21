/*Use find() to get first restaurant serving Chinese cuisine.*/

const restaurants = [

    {
        name: "Pizza Corner",
        cuisine: "Italian"
    },

    {
        name: "Dragon House",
        cuisine: "Chinese"
    },

    {
        name: "Burger Point",
        cuisine: "Fast Food"
    }

];


const chineseRestaurant = restaurants.find(
    restaurant => restaurant.cuisine === "Chinese"
);


console.log(chineseRestaurant);