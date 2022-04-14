import React from "react";
import "./AboutUs.scss";
import { images } from "./../../constants";
function AboutUs() {
  return (
    <div id="about" className="app__aboutUs">
      <div className="app__aboutUs-title">
        <h1>About Us</h1>
      </div>
      <div className="app__aboutUs-line" />
      <div className="app__aboutUs-main">
        <div className="app__aboutUs-heading">
          <h2>Technacy System</h2>
          <p>
            We provide holistic understanding of technology in relation to
            creation, design and Implementation of projects.
          </p>
        </div>
        <div className="app__aboutUs-image">
          <img src={images.app} alt="about image" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
