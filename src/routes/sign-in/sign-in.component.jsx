import { signInWithGooglePopUp } from "../../utilities/firbase/firebase.utilities";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
  };
  return (
    <div>
      <h2>Sign in page</h2>
      <button onClick={logGoogleUser}> Sign in with Google</button>
    </div>
  );
};

export default SignIn;
