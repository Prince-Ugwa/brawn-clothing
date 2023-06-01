import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromUserAuth,
} from "../../utilities/firbase/firebase.utilities";

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

  // initialize a fnction to clear formfields
  const resetFormInputs = () => {
    setFormField(defaultFormFields);
  };

  //Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== comfirmPassword) {
      alert("Incorrect password input");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocFromUserAuth(user, { displayName });
      resetFormInputs();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot creat new user : email already in use");
      } else console.log("cannot create user", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  return (
    <div>
      <h1>Sign Up using email and password</h1>
      <form onSubmit={handleSubmit}>
        {/*  <label> Display Name</label>
        <input
          type="text"
          name="displayName"
          onChange={handleChange}
          required
          value={displayName}
  />*/}

        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          required
          value={displayName}
        />
        <label> Email</label>
        <FormInput
          type="Email"
          name="email"
          onChange={handleChange}
          required
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          required
          value={password}
        />
        <FormInput
          label="Confirm Passwword"
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
