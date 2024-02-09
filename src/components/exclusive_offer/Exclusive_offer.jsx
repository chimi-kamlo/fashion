import React from "react";
import "./exclusive_offer.css";
import exclusive_offer_image from "../../assets/exclusive_offer_image.png";
function Exclusive_offer() {
  return (
    <div className="exclusive_offer">
      <div>
        <div className="exclusiv_image">
          <img src={exclusive_offer_image} alt="exclusive_offer_image" />
        </div>
        <div className="exclusive_text_container">
          <h1>Exclusive offer</h1>
          <p>
            Unlock the ultimate style upgrade with our exclusive offer Enjoy
            savings of up to 40% off on our latest New Arrivals
          </p>
          <div className="hours">
            <span>06 days</span>
            <span>18 hours</span>
            <span>48 mins</span>
          </div>
          <button className="exclusive_button">BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Exclusive_offer;
