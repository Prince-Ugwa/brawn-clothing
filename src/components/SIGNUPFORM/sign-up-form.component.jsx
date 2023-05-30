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
  return (
    <div>
      <h1>Sign Up using email and password</h1>
      <form onSubmit={() => {}}>
        <label> Display Name</label>
        <input type="text" name="Display" required />
        <label> Email</label>
        <input type="email" name="email" required />
        <label>Password</label>
        <input type="password" name="password" required />
        <label> Confirm Passwword</label>
        <input type="password" name="confirmpassword" required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
