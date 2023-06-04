import React from "react";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const handleCheckout = () => {
    alert("Checkout not available");
  };

  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <div className="cart-item" key={item.product.name}>
          <img
            className="cart-image"
            src={item.product.image}
            alt={item.product.name}
          />
          <h4 className="cart-item-name">{item.product.name}</h4>
          <p className="cart-item-price">${item.product.price}</p>
          <input
            className="cart-item-quantity"
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.product, e.target.value)}
          />
          <button
            className="cart-item-button"
            onClick={() => removeFromCart(item.product)}
          >
            Delete
          </button>
        </div>
      ))}
      <button className="checkout-button" onClick={handleCheckout}>
        Go to Checkout
      </button>
    </div>
  );
};

export default Cart;
