import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/SIGNUPFORM/sign-up-form.component";

import {
  auth,
  signInWithGooglePopUp,
  // signInWithGoogleRedirect,
  createUserDocFromUserAuth,
} from "../../utilities/firbase/firebase.utilities";

const SignIn = () => {
  useEffect(() => {
    async function set() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userResponse = createUserDocFromUserAuth(response.user);
      }
    }
    set();
  }, []); //when you run use effect the array sign means that the application can only run once when it mounts

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromUserAuth(user);
  };
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({ user });
  // }; this was not rnning because the application unmont once we leave the page

  return (
    <div>
      <h2>Sign in page</h2>
      <button onClick={logGoogleUser}> Sign in with Google</button>
      {/*<button onClick={logGoogleRedirectUser}>
            <button onClick={signInWithGoogleRedirect}>
                {" "}
        Sign in with Googleredirect
        </button>
          */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
