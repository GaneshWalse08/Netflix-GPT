import { useState } from "react";
import { signInBackgroundImg } from "../utils/constants";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);

  const handleSignUp = () => {
    setisSignIn(!isSignIn);
  }

  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img src={signInBackgroundImg}></img>
      </div>

      <div className="absolute inset-0 flex justify-center items-center">
        <form className="p-12 bg-black/75 w-3/12 ">
          <h2 className="text-white font-bold text-2xl pb-6">{isSignIn ? "Sign In" : "Sign Up"}</h2>

          {!isSignIn && <input
            type="text"
            placeholder="Username"
            className="mb-4 p-2 w-full bg-gray-800 text-white"
          />}
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-2 w-full bg-gray-800 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2 w-full bg-gray-800 text-white"
          />
          <button className="bg-red-700 p-1.5 w-full cursor-pointer my-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          {isSignIn ?  <p className="text-white">
            New to Netflix?{" "}
            <span className="text-blue-400 cursor-pointer underline" onClick={handleSignUp}>
              Sign Up Here.
            </span>
          </p> : <p className="text-white">
            Already Registered?{" "}
            <span className="text-blue-400 cursor-pointer underline" onClick={handleSignUp}>
              Sign In Here.
            </span>
          </p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
