import React from "react";
import "./cart.css";
import etoile from "../bestSelling/bestSellingimage/etoile.png";
function Cart({ price, degre, description, image, taille }) {
  if (taille === "big") {
    return (
      <div className="big_cart">
        <div className="contain_big_cart_image">
          <img src={image} alt="cart_image" />
        </div>
        <h3>{description}</h3>
        <div className="contain_price">
          <span className="price">{price} </span> |
          <span className="contain_icon">
            {" "}
            {degre}{" "}
            <img src={etoile} alt="etoile_icon" className="etoile_icon" />
          </span>
        </div>
      </div>
    );
  } else if (taille === "small") {
    return (
      <div className="small_cart">
        <div className="contain_small_cart_image">
          <img src={image} alt="cart_image" />
        </div>
        <h3>{description}</h3>
        <div className="contain_price">
          <span className="price">{price} </span> |
          <span className="contain_icon">
            {" "}
            {degre}{" "}
            <img src={etoile} alt="etoile_icon" className="etoile_icon" />
          </span>
        </div>
      </div>
    );
  }
}

export default Cart;
