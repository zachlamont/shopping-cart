import React from "react";
import { Link } from "react-router-dom";
import products from "../products";

const Shop = () => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.name}>
          <Link to={`/product/${product.name}`}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Shop;