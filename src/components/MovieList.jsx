import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import TrailerPopup from "./TrailerPopup";
import { useEffect, useState } from "react";
import { API_Options } from "../utils/constants";

const MovieList = (props) => {
  
  const [selectedMovie, setSelectedMovie] = useState(null);
 
  

   const { title, moviesData, category } = props;

  if (!moviesData) return null;

 

  return (
    <div className="mb-4">
      <div className="flex items-center">
        <h1 className="text-white text-2xl">{title}</h1>

        <Link to={`/movies/${category}`} className="text-yellow-500 pl-3.5">
          View More
        </Link>
      </div>
      <div className="flex overflow-x-scroll scrollbar-none">
        {moviesData.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => {
              console.log("Clicked:", movie.title);
              setSelectedMovie(movie);
            }}
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      {selectedMovie && (
        <TrailerPopup
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default MovieList;
