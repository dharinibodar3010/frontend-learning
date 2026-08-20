/*Create class FlipkartProduct with title, price, rating and method getDiscountedPrice().*/

class FlipkartProduct {


    constructor(title, price, rating) {

        this.title = title;
        this.price = price;
        this.rating = rating;

    }


    getDiscountedPrice(discountPercent) {

        return this.price -
            (this.price * discountPercent / 100);

    }

}

const product = new FlipkartProduct(
    "iPhone",
    70000,
    4.5
);


console.log(product.getDiscountedPrice(10));