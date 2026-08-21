/*Add method displayDetails() to show product details.*/

class FlipkartProduct {


    constructor(title, price, rating) {

        this.title = title;
        this.price = price;
        this.rating = rating;

    }


    displayDetails() {

        console.log(
            `${this.title} - ₹${this.price} - ${this.rating}⭐`
        );

    }

}


const product = new FlipkartProduct(
    "Redmi Note 12 Pro",
    18999,
    4.5
);


product.displayDetails();