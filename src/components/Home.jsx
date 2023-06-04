import React from "react";
import { Link } from "react-router-dom";
import products from "../products";

const Home = () => {
  return (
    <div className="content">
      <iframe
  title="YouTube Video"
  width="560"
  height="315"
  src="https://www.youtube.com/embed/_qAWGvIcFoc"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
      <h1>
        Music at Your Fingertips. <br></br> Get it Fast.{" "}
      </h1>
    </div>
  );
};

export default Home;
