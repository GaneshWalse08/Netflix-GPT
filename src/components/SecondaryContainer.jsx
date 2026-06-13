import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  // console.log(movies);
  // console.log("Popular Movies:", movies?.popularMovies);

  return (
    <div  className="pl-1.5 -mt-28 bg-black">
      <MovieList title={"Now Playing Movies"} category={"nowPlayingMovies"} moviesData={movies?.nowPlayingMovies}/>
      <MovieList title={"Popular"} category={"popularMovies"} moviesData={movies?.popularMovies}/>
      <MovieList title={"Top Rated"} category={"topRatedMovies"} moviesData={movies?.topRatedMovies}/>
      <MovieList title={"Upcoming"} category={"upcomingMovies"} moviesData={movies?.upcomingMovies}/>


      {/**
       * Movie List
       *    - Movie card * n
       * 
       * Movie List
       * Movie List
       * Movie List
       */}
    </div>
  )
}

export default SecondaryContainer;