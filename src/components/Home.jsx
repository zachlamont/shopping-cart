import React from "react";
import { Link } from "react-router-dom";
import products from "../products";

const Home = () => {
  return (
    <div className="content">
      <video autoPlay loop muted>
        <source
          src={"https://www.youtube.com/watch?v=_qAWGvIcFoc"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h1>
        Music at Your Fingertips. <br></br> Get it Fast.{" "}
      </h1>
    </div>
  );
};

export default Home;
