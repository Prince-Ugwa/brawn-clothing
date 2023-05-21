// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration: copied from https://console.firebase.google.com/u/0/project/crown-clothing-c4eb6/overview
const firebaseConfig = {
  apiKey: "AIzaSyACX4VPlPji4kg9kJSVVb3n9bjuj2j83pI",
  authDomain: "crown-clothing-c4eb6.firebaseapp.com",
  projectId: "crown-clothing-c4eb6",
  storageBucket: "crown-clothing-c4eb6.appspot.com",
  messagingSenderId: "112516435657",
  appId: "1:112516435657:web:3685d6ede77ae39b138718",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
