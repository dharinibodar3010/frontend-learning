/*Rename displayDetails() method to showProductInfo().*/

class FlipkartProduct {

    constructor(title, price, rating) {

        this.title = title;
        this.price = price;
        this.rating = rating;

    }

    showProductInfo() {

        console.log(
            `${this.title} - ₹${this.price} - ${this.rating}⭐`
        );

    }


}

const product = new FlipkartProduct(
    "Samsung Galaxy",
    25000,
    4.3
);

product.showProductInfo();