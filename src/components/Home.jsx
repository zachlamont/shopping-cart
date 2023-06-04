import React from "react";
import { Link } from "react-router-dom";
import products from "../products";
import backgroundImg from "../assets/background.jpg";

const Home = () => {
  return (
    <div className="content">
     <img src={backgroundImg} alt="Background" />
      <h1>
        Music at Your Fingertips. <br /> Get it Fast.
      </h1>
    </div>
  );
};

export default Home;
