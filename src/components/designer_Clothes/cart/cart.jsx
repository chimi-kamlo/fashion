import React from "react";
import "./cart.css";
function Cart({ image, description, title }) {
  return (
    <div className="cart_designer">
      <div className="designer_contain_image">
        <img src={image} />
      </div>
      <div className="designer_contain_text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Cart;
