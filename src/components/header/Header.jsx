import "./Header.scss";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="ping company logo" />
      <h1>
        We are launching <span>soon!</span>
      </h1>
    </header>
  );
}
export default Header;
