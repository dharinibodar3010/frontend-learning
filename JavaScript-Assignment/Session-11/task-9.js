/*Create function getOrderStatus(orderId) that returns Promise.

Even ID → resolve
Odd ID → reject*/


function getOrderStatus(orderId) {

    return new Promise((resolve, reject) => {


        setTimeout(() => {


            if (orderId % 2 === 0) {

                resolve("Order delivered");

            }
            else {

                reject("Order not found");

            }


        }, 1500);


    });

}


getOrderStatus(102)

    .then((result) => {

        console.log(result);

    })

    .catch((error) => {

        console.log(error);

    });