import React from "react";
import "./designer.css";
import designer_data from "../designer_Clothes/designer_data";
import Cart from "./cart/cart";
function Designer() {
  return (
    <div className="designer_container">
      <div>
        <h1>Designer Clothes For You</h1>
        <p>
          Immerse yourself in the world of luxury fashion with our meticulously
          crafted designer clothes!
        </p>
        <div className="designer_contain_cart">
          {designer_data.map((data, index) => {
            return (
              <Cart
                image={data.image}
                description={data.description}
                title={data.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Designer;
