import { logoImg } from "../utils/constants";

const Header = () => {
  return (
    
      <div className="absolute w-full bg-gradient-to-b from-black px-8  z-10">
        <img src={logoImg} className="w-60" alt="logo"></img>
      </div>
  );
};

export default Header;
