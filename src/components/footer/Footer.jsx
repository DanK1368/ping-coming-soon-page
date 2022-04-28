import "./Footer.scss";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a href="#">
          <BsFacebook className="social__icon" size={40} />
        </a>
        <a href="#">
          <AiFillTwitterCircle className="social__icon" size={43} />
        </a>
        <a href="#">
          <BsInstagram className="social__icon" size={40} />
        </a>
      </div>
      <p className="copyright">&copy; Copyright Ping. All rights reserved.</p>
    </footer>
  );
}
export default Footer;
