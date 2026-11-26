
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProductsDetails(props) {

    const { id } = useParams();
    const navigate = useNavigate();

    const product = props.products.find(
        (item) => item.id === Number(id)
    );

    useEffect(() => {
        document.title = product ? product.name : "Product Not Found";
    }, [product]);

    if (!product) {
        return <h2>Product Not Found</h2>;
    }

    function handleAddToCart() {
        props.addToCart(product);
        navigate("/cart");
    }

    return (

        <div className="details-container">

            <img src={product.image} alt={product.name} />

            <div className="details-info">

                <h2>{product.name}</h2>

                <h3>Price: ₹{product.price}</h3>

                <p>Category: {product.category}</p>

                <p>{product.description}</p>

                <button onClick={handleAddToCart}>
                    Add To Cart
                </button>

                <button onClick={() => navigate("/")}>
                    Back To Products
                </button>

            </div>

        </div>

    );

}

export default ProductsDetails;
