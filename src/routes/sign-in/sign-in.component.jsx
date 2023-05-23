import {
  signInWithGooglePopUp,
  createUserDocFromUserAuth,
} from "../../utilities/firbase/firebase.utilities";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    console.log(user);
  };
  return (
    <div>
      <h2>Sign in page</h2>
      <button onClick={logGoogleUser}> Sign in with Google</button>
    </div>
  );
};

export default SignIn;
