import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import MoviesPage from "./MoviesPage";
import Search from "./GptSearch";
<<<<<<< HEAD
import GPTSearch from "./GptSearch";
=======
>>>>>>> c76f764f3746b996806ddec71494d7d942a45603

const Body = () => {

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movies/:category",
      element: <MoviesPage />,
    },
<<<<<<< HEAD
    {
      path: "/gptSearch",
      element: <GPTSearch />,
    },
=======
>>>>>>> c76f764f3746b996806ddec71494d7d942a45603
    
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
