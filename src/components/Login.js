import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BACKGROUND_IMG, USER_AVATAR } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    // Validate Form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // Sign in & sign up logic

    if (!isSignInForm) {
      // Signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // Fetch from updated value
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // Sign in Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMG} alt="background" className="h-screen object-cover" />
      </div>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-4/12 absolute p-12 bg-black left mt-36 mx-auto right-0 left-0 text-white bg-opacity-70">
        <h2 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign up"}</h2>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            name="name"
            className="p-4 my-4 w-full rounded-lg bg-gray-800"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Enter your email"
          name="email"
          autoComplete="on"
          className="p-4 my-4  w-full rounded-lg bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          name="password"
          className="p-4 my-4 w-full rounded-lg bg-gray-800"
        />
        <p className="text-red-500 text-center">{errorMessage} </p>
        <button
          className="p-4 my-4 bg-red-700 w-full hover:underline"
          onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-4">
          {isSignInForm ? "New to Netflix? " : "Already a user? "}

          <span onClick={toggleSignInForm} className="hover:cursor-pointer hover:underline">
            {isSignInForm ? "Sign up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
