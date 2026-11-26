
import { useState, useEffect } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";

import Products from "./components/Products";
import ProductsDetails from "./components/ProductsDetails";
import CartApp from "./components/CartApp";

import products from "./data/products";

import "./App.css";

function App() {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");

        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        document.title = "Shopping Cart App";
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(product) {

        setCart((oldCart) => {

            const existing = oldCart.find(
                (item) => item.id === product.id
            );

            if (existing) {

                return oldCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );

            }

            return [
                ...oldCart,
                { ...product, quantity: 1 }
            ];

        });

    }

    function removeFromCart(id) {

        setCart((oldCart) =>
            oldCart.filter((item) => item.id !== id)
        );

    }

    function changeQuantity(id, amount) {

        setCart((oldCart) =>
            oldCart.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + amount
                    }
                    : item
            ).filter((item) => item.quantity > 0)
        );

    }

    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (

        <BrowserRouter>

            <nav className="navbar">

                <h2>My Shop</h2>

                <div>

                    <Link to="/">Products</Link>

                    <Link to="/cart">
                        Cart ({cartCount})
                    </Link>

                </div>

            </nav>

            <Routes>

                <Route
                    path="/"
                    element={<Products products={products} />}
                />

                <Route
                    path="/products/:id"
                    element={
                        <ProductsDetails
                            products={products}
                            addToCart={addToCart}
                        />
                    }
                />

                <Route
                    path="/cart"
                    element={
                        <CartApp
                            cart={cart}
                            removeFromCart={removeFromCart}
                            changeQuantity={changeQuantity}
                        />
                    }
                />

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;
