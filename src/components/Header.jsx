import { useEffect, useState } from "react";
import { logoImg } from "../utils/constants";
import { userIcon } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { toggleGptSearchView } from "../utils/GptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [showDropDown, setshowDropDown] = useState(false);
  const { category } = useParams();
   const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  

  const location = useLocation();

  // console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        if (location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); //This will be called after unmounting of the component
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  return (
    <div className="absolute w-full flex items-center justify-between px-8 py-2 bg-gradient-to-b from-black z-10">
      <div className="flex items-center">
        <img src={logoImg} className="w-60" alt="logo"></img>

        {user && (
          <div className="underline">

            <Link className="text-white pl-2.5" to={`/browse`}>
              Home
            </Link>
            
            <Link className="text-white pl-2.5" to={`/movies/nowPlayingMovies`}>
              Now Playing
            </Link>

            <Link className="text-white pl-2.5" to={`/movies/topRatedMovies`}>
              Top Rated
            </Link>

            <Link className="text-white pl-2.5" to={`/movies/popularMovies`}>
              Popular
            </Link>

            <Link className="text-white pl-2.5" to={`/movies/upcomingMovies`}>
              Upcoming
            </Link>
          </div>
        )}
      </div>


      {user && (
        <div className="flex">

          <button className="text-white pr-5 cursor-pointer" onClick={handleGPTSearchClick}>{showGptSearch ? "Main Page" : "GPT Search"}</button>
          
          <div
            className="relative flex items-center cursor-pointer"
            onClick={() => setshowDropDown(!showDropDown)}
          >

            <img src={userIcon} className="w-10 h-10" alt="user" />
            <p className="text-2xl">{showDropDown ? "🔺" : "🔻"}</p>

            {showDropDown && (
              <div className="absolute top-12 right-0 bg-black p-3 rounded border border-gray-700 z-50">
                <p className="text-amber-500 font-semibold mb-2">
                  {user?.displayName}
                </p>

                <button
                  className="text-white underline whitespace-nowrap cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSignOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
