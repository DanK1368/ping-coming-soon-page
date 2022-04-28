import { useState } from "react";
import "./Form.scss";

function Form() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = e => {
    console.log(e.target.value);
    setEmail(e.target.value);
    if (!emailPattern.test(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email.length === 0) {
      setError(true);
      setErrorMsg("Whoops! It looks like you forgot to add your email");
    } else if (!emailPattern.test(email)) {
      setErrorMsg("Please provide a valid email address");
    } else {
      setError(false);
      setErrorMsg("");
      setEmail("");
    }
  };

  return (
    <form className="form" noValidate onSubmit={handleSubmit}>
      <legend className="form__legend">Subscribe and get notified</legend>
      <div className="form__wrapper">
        <label>
          <input
            className={`form__input ${error ? "invalid" : ""}`}
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={handleChange}
          />
          {error && <span className="error">{errorMsg}</span>}
        </label>
        <button className="form__btn">Notify Me</button>
      </div>
    </form>
  );
}
export default Form;
