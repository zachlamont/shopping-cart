import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import products from "./products";

function App() {
  const [count, setCount] = useState(0);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.product.name === product.name
    );
    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.product.name === product.name) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedItems = cartItems.filter(
      (item) => item.product.name !== product.name
    );
    setCartItems(updatedItems);
  };

  const updateQuantity = (product, quantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.product.name === product.name) {
        return {
          ...item,
          quantity: parseInt(quantity),
        };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/shop"
            element={<Shop products={products} addToCart={addToCart} />}
          />
          <Route
            path="/product/:productName"
            element={<ProductPage products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
