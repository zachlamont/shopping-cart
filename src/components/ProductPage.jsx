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
    <div className="product-page-container">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">${product.price}</p>
        <ul>
          {product.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <p className="product-description">{product.description}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
