function checkPaymentAmount(amount) {

    if (amount <= 0) {

        throw new Error(
            "Amount must be positive"
        );

    }

    return "Payment accepted";
}


function testPayment() {

    try {

        const result =
            checkPaymentAmount(500);

        console.log(result);

    } catch (error) {

        console.log(
            error.message
        );

    }
}