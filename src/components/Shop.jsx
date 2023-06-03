import React from "react";
import { Link } from "react-router-dom";
import products from "../products";

const Shop = () => {
  return (
    <div className="card-container">
      {products.map((product) => (
        <div key={product.name} className='product-card'>
          <Link to={`/product/${product.name}`}>
          
            <img src={product.image} alt={product.name} />
            <h4>{product.make}</h4>
            <p>{product.name}</p>
            <h3>${product.price}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Shop;