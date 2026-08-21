/*Convert callback setTimeout code into Promis*/

function payment() {

    return new Promise((resolve, reject) => {


        setTimeout(() => {


            console.log("Payment successful!");

            resolve();


        }, 1000);


    });

}



payment();