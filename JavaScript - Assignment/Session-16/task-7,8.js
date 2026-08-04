/*Use reduce() to calculate total clicks of Zomato orders.*/

const orders = [

    {
        restaurant: "Pizza Hut",
        clicks: 100
    },

    {
        restaurant: "Dominos",
        clicks: 250
    },

    {
        restaurant: "Burger King",
        clicks: 150
    }

];


const totalClicks = orders.reduce((total, order) => {

    return total + order.clicks;

}, 0);


console.log(totalClicks);