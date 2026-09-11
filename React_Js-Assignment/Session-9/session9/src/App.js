import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import DealsPage from "./DealsPage";
import CartPage from "./CartPage";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Flipkart Style Navigation</h1>

        <nav>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              marginRight: "20px",
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal"
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/deals"
            style={({ isActive }) => ({
              marginRight: "20px",
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal"
            })}
          >
            Deals
          </NavLink>

          <NavLink
            to="/cart"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal"
            })}
          >
            Cart
          </NavLink>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;