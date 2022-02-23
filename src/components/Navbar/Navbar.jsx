import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/navbar.css";
import emptyCart from "./images/empty-cart.png";

const Navbar = () => {
	const [cart, setCart] = useState("cart-section-none");

	const cartClassChange = () => {
		if (cart === "cart-section-none") {
			setCart("cart-section");
		} else {
			setCart("cart-section-none");
		}
	};

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
			<div className="top-right">
				<div className="top-right-main ">
					<div className="city-name ">BANGALORE</div>
					<div width="26" className="top-right-con ">
						<div width="26" height="26" className="top-right-icon-div "></div>
						<img
							src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
							alt="location_pin"
							className=" top-right-icon-img "
							loading="lazy"
							width="26"
							height="26"
						/>
					</div>
				</div>
				<button color="primary" className="get-app">
					<div className="get-app-btn ">GET APP</div>
				</button>
				<div className="top-right-link-div ">
					<a href="/account">
						<div className="top-right">
							<div width="35" className="top-right-images ">
								<div
									width="35"
									height="35"
									className="top-right-icon-div"
								></div>
								<img
									src="https://profile-pictures-prod.s3.amazonaws.com/4728c80a-ad4a-42c3-8d96-67631b04e922"
									alt="user_profile_picture"
									className=" profile-pic"
									loading="lazy"
									width="35"
									height="35"
								/>
							</div>
						</div>
					</a>
				</div>
				<div className="style-prefix-e0dnmk">
					<div className="style-prefix-uu4jug ez2k3kc0">
						<div width="8" className=" style-prefix-itdotr ">
							<div width="8" height="8" className="top-right-icon-div "></div>
							<img
								src="https://static.cure.fit/assets/images/notification-icon.svg"
								alt="notification-icon"
								className=" top-right-icon-ing "
								loading="lazy"
								width="8"
								height="8"
							/>
						</div>
						<div width="24" className=" cart-div " onClick={cartClassChange}>
							<div
								width="24"
								height="22.01834862385321"
								className="top-right-icon-div "
							></div>
							<img
								src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"
								alt="cart-image"
								className=" top-right-icon-ing "
								loading="lazy"
								width="24"
								height="22.01834862385321"
							/>
							<div className={cart}>
								<p>Your Cart</p>
								<div className="empty-cart">
									<div>
										<div className="empty-cart-image">
											<img src={emptyCart} />
										</div>
										<div>Looks like you haven't made any purchases yet</div>
									</div>
									<div className="back-btn-cart">
										<a href="#">Back</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
