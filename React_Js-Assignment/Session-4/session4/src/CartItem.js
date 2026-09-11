import { useState } from "react";

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div>
      <h2>Mobile Phone</h2>

      <button onClick={decreaseQuantity}>
        -
      </button>

      <span> {quantity} </span>

      <button onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
}

export default CartItem;