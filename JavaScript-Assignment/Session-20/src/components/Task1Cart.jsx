import { useState } from "react";

function Task1Cart() {

    const product = {
        id: 1,
        name: "iPhone 15",
        price: 69999
    };

    const [cart, setCart] = useState([]);

    function addToCart() {

        const alreadyExists = cart.some(
            item => item.id === product.id
        );

        if (!alreadyExists) {

            setCart([...cart, product]);

        }
    }

    return (
        <div className="card">

            <h2>{product.name}</h2>

            <p>₹{product.price}</p>

            <button onClick={addToCart}>
                Add to Cart
            </button>

            <p>
                Cart Count: {cart.length}
            </p>

            {cart.length > 0 && (
                <p className="success">
                    Product added to cart
                </p>
            )}

        </div>
    );
}

export default Task1Cart;