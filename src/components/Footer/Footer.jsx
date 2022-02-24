import "./style/footer.css";
import cult_fit from "./images/vman-and-white-cult-text.png";
import download_on_app_store from "./images/download_on_app_store.png";
import download_on_google_play from "./images/download_on_google_play.png";

import {
	FacebookLogo,
	InstagramLogo,
	LinkedinLogo,
	TwitterLogo,
	YoutubeLogo,
} from "./icons/icons";

export const Footer = () => {
	return (
		<footer className="footer-section">
			<div className="imageWithDetails">
				<div>
					<img src={cult_fit} />
				</div>
				<p>
					At cult.fit, we make group workouts fun, daily food healthy & tasty,
					mental fitness easy with yoga & meditation, Medical & lifestyle care
					hassle- free.#BeBetterEveryDay
				</p>
			</div>
			<div className="footer-mid-section">
				<div>
					<a href="#">cult.fit for business</a>
					<a href="#">cult.fit franchise</a>
					<a href="#">corporate partnerships</a>
					<a href="#">cult pass network</a>
				</div>
				<div>
					<a href="#">partner.fit</a>
					<a href="#">blogs</a>
					<a href="#">talks</a>
					<a href="#">careers</a>
				</div>
				<div>
					<a href="#">contact us</a>
					<a href="#">privacy policy</a>
					<a href="#">refund policy</a>
					<a href="#">terms & conditions</a>
				</div>
			</div>
			<div className="footer-social-section">
				<div>
					<div className="download-app">
						<a href="#">
							<img src={download_on_app_store} />
						</a>
					</div>
					<div className="download-app">
						<a href="#">
							<img src={download_on_google_play} />
						</a>
					</div>
					<div className="footer-icons">
						<a href="#">
							<YoutubeLogo />
						</a>
						<a href="#">
							<FacebookLogo />
						</a>
						<a href="#">
							<TwitterLogo />
						</a>
						<a href="#">
							<InstagramLogo />
						</a>
						<a href="#">
							<LinkedinLogo />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
