import React from "react";
import "./feedbackCorner.css";
import Cart from "./cart/Cart";
import data from "./feedbackCornerDat";
function FeedbackCorner() {
  return (
    <div className="FeedbackCorner">
      <div>
        <h1>Feedback Corner</h1>
        <div className="FeedbackCorner_cart_contain">
          {data.map((data, index) => {
            return (
              <Cart
                title={data.title}
                description={data.description}
                icon={data.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeedbackCorner;
