import { useReducer } from "react";

function reducer(state, action) {
    if (action.type === "increment") {
        return state + 1;
    }

    if (action.type === "decrement") {
        if (state === 0) {
            return state;
        }

        return state - 1;
    }

    if (action.type === "reset") {
        return 0;
    }

    return state;
}

function CartItem() {
    const [quantity, dispatch] = useReducer(reducer, 1);

    return (
        <div>
            <h1>Flipkart Cart</h1>

            <h2>Product: Mobile Phone</h2>

            <h3>Quantity: {quantity}</h3>

            <button onClick={() => dispatch({ type: "increment" })}>
                +
            </button>

            <button
                onClick={() => dispatch({ type: "decrement" })}
                disabled={quantity === 0}
            >
                -
            </button>

            <button onClick={() => dispatch({ type: "reset" })}>
                Reset
            </button>
        </div>
    );
}

export default CartItem;