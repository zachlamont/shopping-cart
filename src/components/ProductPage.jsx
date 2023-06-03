// src/components/ProductPage.js

import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";

const ProductPage = ({ addToCart }) => {
  const { productName } = useParams();
  const product = products.find((p) => p.name === productName);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <ul>
        {product.keyFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
