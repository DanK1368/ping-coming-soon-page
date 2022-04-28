import { useState } from "react";
import "./Form.scss";

function Form() {
  const [error, setError] = useState(false);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = e => {
    if (!emailPattern.test(e.target.value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className="form" noValidate onSubmit={handleSubmit}>
      <legend className="form__legend">Subscribe and get notified</legend>
      <div className="form__wrapper">
        <label>
          <input
            formNoValidate
            className={`form__input ${error ? "invalid" : ""}`}
            type="email"
            placeholder="Your email address"
            onChange={handleChange}
          />
          {error && (
            <span className="error">Please provide a valid email address</span>
          )}
        </label>
        <button className="form__btn" type="submit">
          Notify Me
        </button>
      </div>
    </form>
  );
}
export default Form;
