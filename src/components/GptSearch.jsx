<<<<<<< HEAD
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
=======
const GPTSearch = () => {
  return <div>GPTSearch</div>;
>>>>>>> c76f764f3746b996806ddec71494d7d942a45603
};

export default GPTSearch;
