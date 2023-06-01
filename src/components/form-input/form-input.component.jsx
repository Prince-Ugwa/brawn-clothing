const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      {label && (
        <label className={`${otherProps.value.lenght ? "shrink" : "null"}`}>
          {label}
        </label>
      )}
      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;
