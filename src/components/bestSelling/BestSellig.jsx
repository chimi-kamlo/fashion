import React from "react";
import "./bestSelling.css";
import BestSelligData from "./bestSellingData";
import Cart from "../cart/Cart";
import fleche_direction from "../bestSelling/bestSellingimage/fleche.png";
function BestSellig() {
  return (
    <div className="bestSelling">
      <div>
        <h1>Best selling</h1>
        <p>
          Get in on the trend with our curated selection of best-selling styles.
        </p>
        <div className="contain_cart">
          {BestSelligData.map((data, index) => {
            return (
              <Cart
                key={index}
                price={data.price}
                description={data.description}
                degre={data.degre}
                image={data.image}
                taille="big"
              />
            );
          })}
        </div>
        <button className="bestSellingButton">
          See all <img src={fleche_direction} className="flecheIcon" />
        </button>
      </div>
    </div>
  );
}

export default BestSellig;
