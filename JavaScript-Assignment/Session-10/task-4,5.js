/*Write a function getDeliveryDetails that takes two parameters: address (string) and paymentMethod (string), 
both with default values ('Ahmedabad' and 'UPI'). Log a message using template literals showing both values. 
Call the function once with no arguments and once with custom values.*/

function getDeliveryDetails(address = "Ahmedabad", paymentMethod = "UPI") {

    console.log(`Delivery Address: ${address}, Payment Method: ${paymentMethod}`);

}


// Calling without arguments (default values will be used)
getDeliveryDetails();


// Calling with custom values
getDeliveryDetails("Rajkot", "Cash on Delivery");