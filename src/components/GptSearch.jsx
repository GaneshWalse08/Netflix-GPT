import { signInBackgroundImg } from "../utils/constants";
import GptSearchBar from "./gptSearchBar";
import Header from "./Header";

const GPTSearch = () => {
  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img src={signInBackgroundImg}></img>
      </div>

      <div className="">
        <GptSearchBar />
      </div>
    </div>
  );
};

export default GPTSearch;
