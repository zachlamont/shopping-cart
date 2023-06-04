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
    // Show an alert indicating that the product has been added to the cart
    alert(`${product.name} has been added to your cart!`);
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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/shopping-cart" element={<Home />} />
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
