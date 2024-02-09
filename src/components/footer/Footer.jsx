import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_header">
        <div className="logo_and_media">
          <div className="footer_logo">Rivo</div>
          <div className="media">
            <h5>Social Media</h5>
            <div className="media_icon"></div>
          </div>
        </div>

        <div className="shop">
          <span className="title_footer">SHOP</span>
          <span>Products</span>
          <span>Overview</span>
          <span>Pricing</span>
          <span>Releases</span>
        </div>

        <div className="Company">
          <span className="title_footer">Company</span>
          <span>About us</span>
          <span>Contact</span>
          <span>News</span>
          <span>Support</span>
        </div>

        <div className="form_section">
          <h1>Stay up to date</h1>
          <form className="footer_form">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>

      <div className="footer_footer">
        <hr />
        <div>
          <span className="footer_footer_span">Terms</span>
          <span className="footer_footer_span">Privacy</span>
          <span className="footer_footer_span">Cookies</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
