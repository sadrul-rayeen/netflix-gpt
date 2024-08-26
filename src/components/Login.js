import React, { useRef, useState } from "react";
import Header from "./Header";
import { background_image_url, profile_url } from "../utils/constant";
import { formDataValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInForm);
  };

  const handleSubmit = async (e) => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = name?.current?.value;

    const message = formDataValidation(emailValue, passwordValue, nameValue);
    setErrorMessage(message);

    if (message) return;

    try {
      if (isSignInForm) {
        const user = await signInWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );
      } else {
        const user = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );
        const updatUser = await updateProfile(auth.currentUser, {
          displayName: nameValue,
          photoURL: profile_url,
        });
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      }
    } catch (error) {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
    }
  };

  return (
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${background_image_url})`,
      }}
    >
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full rounded-lg"
          type="submit"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a user? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
