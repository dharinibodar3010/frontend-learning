function getOrderTotal(items) {

    let total = 0;


    for (const item of items) {

        if (item.price < 0) {

            throw new Error(
                "Invalid item price"
            );

        }

        total += item.price;

    }


    return total;
}


function testOrder() {

    const items = [

        {
            name: "Pizza",
            price: 250
        },

        {
            name: "Burger",
            price: 150
        },

        {
            name: "Fries",
            price: -50
        }

    ];


    try {

        const total =
            getOrderTotal(items);

        console.log(
            "Order Total:",
            total
        );

    } catch (error) {

        console.log(
            "Sorry, your order contains an invalid item price."
        );

    }
}