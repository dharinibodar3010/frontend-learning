function CartSummary(props) {
  return (
    <div>
      <h2>Cart Summary</h2>

      {props.items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {props.items.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}

      {props.items.length >= 3 && (
        <button>Checkout Now</button>
      )}
    </div>
  );
}

export default CartSummary;