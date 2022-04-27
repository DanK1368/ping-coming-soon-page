import "./Footer.scss";
import facebookIcon from "../../images/facebook-icon.svg";
import twitterIcon from "../../images/twitter-icon.svg";
import instagramIcon from "../../images/instagram-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <img
          className="social__icon"
          src={facebookIcon}
          alt="facebook social media icon"
        />
        <img
          className="social__icon"
          src={twitterIcon}
          alt="facebook social media icon"
        />
        <img
          className="social__icon"
          src={instagramIcon}
          alt="facebook social media icon"
        />
      </div>
      <p className="copyright">&copy; Copyright Ping. All rights reserved.</p>
    </footer>
  );
}
export default Footer;
