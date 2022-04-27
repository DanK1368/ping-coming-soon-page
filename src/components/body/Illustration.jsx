import "./Illustration.scss";
import illustration from "../../images/illustration-dashboard.png";

function Illustration() {
  return (
    <div className="illustration">
      <img className="illustration__img" src={illustration} alt="" />
    </div>
  );
}
export default Illustration;
