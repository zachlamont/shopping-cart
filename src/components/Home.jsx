import backgroundImg from "../assets/background.jpg";
import React from "react";


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
