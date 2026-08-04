
/* Simulate a Zomato order status updater using callbacks. Write a function placeOrder that takes 
    food item and callback, waits 1 second using setTimeout, then calls callback. */

function placeOrder(item, callback){

    setTimeout(function(){

        callback(`Your ${item} is being prepared`);

    },1000);

}


placeOrder("Pizza", function(message){

    console.log(message);

});