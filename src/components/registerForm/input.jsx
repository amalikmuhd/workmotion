const Input = ({ name, label, hint, errors, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        id={name}
        style={{ textAlign: "left" }}
        className="form-control header__text"
        placeholder={`Enter your ${name}`}
      />
      {errors ? (
        <small className="hint errors">{errors}</small>
      ) : (
        <small className="hint">{hint}</small>
      )}
    </div>
  );
};

export default Input;
