
function CartApp(props) {

    const subtotal = props.cart.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );

    return (

        <div className="cart-container">

            <h2>Shopping Cart</h2>

            {props.cart.length === 0 ? (

                <h3>Your Cart is Empty</h3>

            ) : (

                <>

                    {props.cart.map((item) => (

                        <div className="cart-item" key={item.id}>

                            <img
                                src={item.image}
                                alt={item.name}
                            />

                            <div>

                                <h3>{item.name}</h3>

                                <p>Price: ₹{item.price}</p>

                                <p>Quantity: {item.quantity}</p>

                                <p>
                                    Subtotal: ₹
                                    {item.price * item.quantity}
                                </p>

                                <button
                                    onClick={() =>
                                        props.changeQuantity(item.id, 1)
                                    }
                                >
                                    +
                                </button>

                                <button
                                    onClick={() =>
                                        props.changeQuantity(item.id, -1)
                                    }
                                >
                                    -
                                </button>

                                <button
                                    onClick={() =>
                                        props.removeFromCart(item.id)
                                    }
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    ))}

                    <div className="total">

                        <h2>Grand Total: ₹{subtotal}</h2>

                    </div>

                </>

            )}

        </div>

    );

}

export default CartApp;
