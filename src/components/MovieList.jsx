import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  const { title, moviesData, category } = props;
  if (!moviesData) return null;

  return (
    <div className="mb-4">
     <div className="flex items-center">
       <h1 className="text-white text-2xl">{title}</h1>

      <Link to={`/movies/${category}`} className="text-yellow-500 pl-3.5">View More</Link>

     </div>
      <div className="flex overflow-x-scroll scrollbar-none">
        {moviesData.map((movie) => (
          <div className="flex-shrink-0 cursor-pointer">
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
