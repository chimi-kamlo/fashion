import React from "react";
import Navbar from "../navbar/Navbar";
import "./header.css";
import header_image from "../../assets/header_image.png";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="header_text_image">
        <div className="text_container">
          <h1>Discover and Find Your Own Fashion!</h1>
          <p>
            Explore our curated collection of stylish clothing and accessories
            tailored to your unique taste.
          </p>
          <button className="explore_now_buttom">Explore Now</button>
        </div>
        <div className="contain_image">
          <img src={header_image} />
        </div>
      </div>
    </div>
  );
}

export default Header;
