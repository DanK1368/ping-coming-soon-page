import "./Form.scss";

function Form() {
  return (
    <form className="form">
      <legend className="form__legend">Subscribe and get notified</legend>
      <div className="form__wrapper">
        <label>
          <input
            className="form__input"
            type="email"
            placeholder="Your email address"
          />
        </label>
        <button className="form__btn" type="submit">
          Notify Me
        </button>
      </div>
    </form>
  );
}
export default Form;
