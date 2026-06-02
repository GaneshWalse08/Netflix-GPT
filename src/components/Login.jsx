import { signInBackgroundImg } from "../utils/constants";
import Header from "./Header";

const Login = () => {
  return <div>
    <Header/>
    <div className="absolute -z-10" >
      <img src={signInBackgroundImg}></img>
    </div>

    <div className="absolute inset-0 flex justify-center items-center">

      <form className="p-12 bg-black/75 w-3/12 ">
      <h2 className="text-white font-bold text-2xl pb-6">Sign In</h2>
      <input type="email" placeholder="Enter your Email" className="mb-4 p-2 w-full bg-gray-800 text-white"/>
      <input type="password" placeholder="Enter your Password" className="mb-4 p-2 w-full bg-gray-800 text-white"/>
      <button className="bg-red-700 p-1.5 w-full cursor-pointer my-4">Sign In</button>
    </form>
    </div>
  </div>;
};

export default Login;
