import { useRef, useState } from "react";
import { signInBackgroundImg } from "../utils/constants";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState("");

  const handleSignUpForm = () => {
    setisSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handleButtonClick = () => {
    const userNameValue = isSignIn ? "" : userName.current.value;

    const message = checkValidData(
      userNameValue,
      email.current.value,
      password.current.value,
      isSignIn,
    );
    seterrorMessage(message);

    console.log(email);

    if (message != null) return;

    if (!isSignIn) {
      //signUp

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          return updateProfile(userCredential.user, {
            displayName: userName.current.value,
          });
        })
        .then(() => {
          navigate("/browse");
        })
        .catch((error) => {
          seterrorMessage(error.code + " - " + error.message);
        });
    } else {
      //signIn

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img src={signInBackgroundImg}></img>
      </div>

      <div className="absolute inset-0 flex justify-center items-center">
        <form
          className="p-12 bg-black/75 w-3/12 "
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-white font-bold text-2xl pb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignIn && (
            <input
              ref={userName}
              type="text"
              placeholder="Username"
              className="mb-4 p-2 w-full bg-gray-800 text-white"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="mb-4 p-2 w-full bg-gray-800 text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="mb-4 p-2 w-full bg-gray-800 text-white"
          />
          <button
            className="bg-red-700 p-1.5 w-full cursor-pointer my-4"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-red-500 text-sm pb-1.5">{errorMessage}</p>

          {isSignIn ? (
            <p className="text-white">
              New to Netflix?{" "}
              <span
                className="text-blue-400 cursor-pointer underline"
                onClick={handleSignUpForm}
              >
                Sign Up Here.
              </span>
            </p>
          ) : (
            <p className="text-white">
              Already Registered?{" "}
              <span
                className="text-blue-400 cursor-pointer underline"
                onClick={handleSignUpForm}
              >
                Sign In Here.
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
