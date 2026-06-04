import { useEffect, useState } from "react";
import { logoImg } from "../utils/constants";
import { userIcon } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [showDropDown, setshowDropDown] = useState(false);

  // console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
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
  return (
    <div className="absolute w-full flex items-center justify-between px-8 py-2 bg-gradient-to-b from-black z-10">
      <img src={logoImg} className="w-60" alt="logo"></img>

      {user && (
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
      )}
    </div>
  );
};

export default Header;
