import React from "react";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.product.name}>
          <img src={item.product.image} alt={item.product.name} />
          <h3>{item.product.name}</h3>
          <p>${item.product.price}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.product, e.target.value)}
          />
          <button onClick={() => removeFromCart(item.product)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
