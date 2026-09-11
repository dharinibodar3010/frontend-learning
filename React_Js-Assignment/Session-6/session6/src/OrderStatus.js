function OrderStatus(props) {
  return (
    <h2>
      {props.isDelivered
        ? "Order Delivered 🎉"
        : "Order on the way 🚚"}
    </h2>
  );
}

export default OrderStatus;