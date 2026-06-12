import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {

  const dispatch = useDispatch();

  const getPopularMovies = async() => {
    
    const data = await fetch("https://api.themoviedb.org/3/movie/popular", API_Options);

    console.log("Response:", data);
console.log("Status:", data.status);

      // console.log("Response:", data);

    const json = await data.json();

    // console.log("JSON:", json);

    console.log("Popular JSON", json);

    dispatch(addPopularMovies(json.results));
  }
  useEffect(() => {
    // console.log("usePopularMovies called");
    getPopularMovies();
  },[]);
};

export default usePopularMovies;
