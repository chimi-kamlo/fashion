import React from "react";
import "./ourProduct.css";
import products from "../ourProducts/ourProductData";
import Cart from "../cart/Cart";
function OurProduct() {
  return (
    <div className="ourProduct">
      <div>
        <h1>Our products</h1>
        <div className="category">
          <span>Sale</span>
          <span>HOT</span>
          <span>New Arrivals</span>
          <span>Accessories</span>
        </div>
        <div className="product_contain_cart">
          {products.map((data, index) => {
            return (
              <Cart
                key={index}
                price={data.price}
                description={data.description}
                degre={data.degre}
                image={data.image}
                taille="small"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurProduct;
