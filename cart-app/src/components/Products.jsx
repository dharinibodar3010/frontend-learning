
import { Link } from "react-router-dom";

function Products(props) {

    return (

        <div className="products-container">

            <h2>Our Products</h2>

            <div className="products-grid">

                {props.products.map((product) => (

                    <div className="product-card" key={product.id}>

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                        <h3>{product.name}</h3>

                        <p>Price: ₹{product.price}</p>

                        <Link to={"/products/" + product.id}>
                            View Details
                        </Link>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Products;
