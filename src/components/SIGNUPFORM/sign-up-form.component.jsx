import { useState } from "react";

// validating the form
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  comfirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, comfirmPassword } = formField;
  console.log(formField);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  return (
    <div>
      <h1>Sign Up using email and password</h1>
      <form onSubmit={() => {}}>
        <label> Display Name</label>
        <input
          type="text"
          name="displayName"
          onChange={handleChange}
          required
          value={displayName}
        />
        <label> Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          required
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          required
          value={password}
        />
        <label> Confirm Passwword</label>
        <input
          type="password"
          name="comfirmPassword"
          onChange={handleChange}
          required
          value={comfirmPassword}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
