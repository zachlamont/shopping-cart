import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div>
      <p>{product.make}</p>
      <Link to={`/product/${product.name}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </Link>
    </div>
  );
};

export default Product;