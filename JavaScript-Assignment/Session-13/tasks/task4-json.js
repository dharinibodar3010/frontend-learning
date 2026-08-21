function parseProduct() {

    const productData =
        '{"name":"Shoes","price":999}';


    try {

        const product =
            JSON.parse(productData);

        console.log(
            "Product:",
            product
        );

    } catch (error) {

        console.log(
            "Invalid product data"
        );

    } finally {

        console.log(
            "Parsing attempt finished"
        );

    }
}