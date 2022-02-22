import React from "react";
import { Link } from "react-router-dom";
import "./style/navbar.css";

const Navbar = () => {
  return (
    <nav className="top-nav">
      <Link to="/" className="logo">
        <img
          width="120px"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
          alt=""
        />
      </Link>
      <div className="top-navigations">
        <Link to="/cult">
          <div className="link-box">
            <div className="links">
              <h5 className="main-link">CULT</h5>
            </div>
          </div>
        </Link>

        <Link to="/live">
          <div className="link-box">
            <div className="links">
              <h5 className="main-link">LIVE</h5>
            </div>
          </div>
        </Link>

        <Link to="/care">
          <div className="link-box">
            <div className="links">
              <h5 className="main-link">CARE</h5>
            </div>
          </div>
        </Link>

        <Link to="/eat">
          <div className="link-box">
            <div className="links">
              <h5 className="main-link">EAT</h5>
            </div>
          </div>
        </Link>

        <Link to="/mind">
          <div className="link-box">
            <div className="links">
              <h5 className="main-link">MIND</h5>
            </div>
          </div>
        </Link>

        <Link to="/store">
          <div className="link-box">
            <div className="links">
              <h5 className="main-link">STORE</h5>
            </div>
          </div>
        </Link>
      </div>
      {/* /////////////////////// */}
      <div class="top-right">
        <div class="top-right-main ">
          <div class="city-name ">BANGALORE</div>
          <div width="26" class="top-right-con ">
            <div width="26" height="26" class="top-right-icon-div "></div>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
              alt="location_pin"
              class=" top-right-icon-img "
              loading="lazy"
              width="26"
              height="26"
            />
          </div>
        </div>
        <button color="primary" class="get-app">
          <div class="get-app-btn ">GET APP</div>
        </button>
        <div class="top-right-link-div ">
          <a href="/account">
            <div class="top-right">
              <div width="35" class="top-right-images ">
                <div width="35" height="35" class="top-right-icon-div"></div>
                <img
                  src="https://profile-pictures-prod.s3.amazonaws.com/4728c80a-ad4a-42c3-8d96-67631b04e922"
                  alt="user_profile_picture"
                  class=" profile-pic"
                  loading="lazy"
                  width="35"
                  height="35"
                />
              </div>
            </div>
          </a>
        </div>
        <div class="style-prefix-e0dnmk">
          <div class="style-prefix-uu4jug ez2k3kc0">
            <div width="8" class=" style-prefix-itdotr ">
              <div width="8" height="8" class="top-right-icon-div "></div>
              <img
                src="https://static.cure.fit/assets/images/notification-icon.svg"
                alt="notification-icon"
                class=" top-right-icon-ing "
                loading="lazy"
                width="8"
                height="8"
              />
            </div>
            <div width="24" class=" cart-div ">
              <div
                width="24"
                height="22.01834862385321"
                class="top-right-icon-div "
              ></div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"
                alt="cart-image"
                class=" top-right-icon-ing "
                loading="lazy"
                width="24"
                height="22.01834862385321"
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
