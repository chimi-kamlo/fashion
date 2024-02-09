import React from "react";
import "./cart.css";
function Cart({ title, description, icon }) {
  return (
    <div className="feedback_cart_container">
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>
      <h3 className="cart_title">{title}</h3>
      <p className="cart_description">{description}</p>
    </div>
  );
}

export default Cart;
