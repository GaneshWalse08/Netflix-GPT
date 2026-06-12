import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, moviesData } = props;
  if (!moviesData) return null;

  return (
    <div className="mb-4">
      <h1 className="text-white text-2xl">{title}</h1>

      <div className="flex overflow-x-scroll scrollbar-none">
        {moviesData.map((movie) => (
          <div className="flex-shrink-0 cursor-pointer">
            <MovieCard key={movie.id} Poster_Img={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
