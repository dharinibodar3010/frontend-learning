import PropTypes from "prop-types";

function ProductCard(props) {
  return (
    <div style={{ border: "1px solid black", padding: "20px", width: "250px" }}>
      <h2>{props.productName}</h2>
      <p>Price: ₹{props.price}</p>
    </div>
  );
}

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductCard;