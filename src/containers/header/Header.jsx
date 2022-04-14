import React from "react";
import { images } from "./../../constants";
import "./Header.scss";
function Header() {
  return (
    <div id="home" className="app__header">
      <div className="app__header-title">
        <h1 className="head-text">Technacy systems</h1>
        <p className="app__header-paragraph p-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          temporibus amet, quia accusantium, ipsa placeat eos, pariatur maxime
          quasi molestiae dignissimos beatae. Deserunt nisi nesciunt quis
          deleniti voluptas? Nihil, ut!
        </p>
        <button onClick={() => {}} className="custom__button app__flex">
          Contact Us
        </button>
      </div>
      <div className="app__header-image">
        <img src={images.app} alt="image" />
        {/* <p>text</p> */}
      </div>
    </div>
  );
}

export default Header;
