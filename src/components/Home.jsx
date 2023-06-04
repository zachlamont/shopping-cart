import React from "react";
import { Link } from "react-router-dom";
import products from "../products";

const Home = () => {
  return (
    <div className="content">
      <video autoPlay loop muted>
        <source src={"src/assets/vid1.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>
        Music at Your Fingertips. <br></br> Get it Fast.{" "}
      </h1>
    </div>
  );
};

export default Home;
