import { TMDB_POSTER_IMG } from "../utils/constants";

const MovieCard = (props) => {
  const { poster_path, backdrop_path, vote_average, overview, title } =
    props.movie;

  return (
    <div className="group relative cursor-pointer transition-all duration-300">
      <img
        className="w-48 m-1 rounded-lg"
        src={TMDB_POSTER_IMG + poster_path}
      ></img>

      <div className="absolute left-0 top-0 scale-0 group-hover:scale-110 rounded-lg overflow-hidden shadow-2xl w-72  transition-all duration-300 z-50 bg-gray-900">
        <img
          src={TMDB_POSTER_IMG + backdrop_path}
          alt={title}
          className="w-full"
        />

        <div className="p-3">
          <h3 className="font-bold text-white text-lg">{title}</h3>

          <p className="text-green-400 font-semibold mt-1">
            ⭐ {vote_average?.toFixed(1)}
          </p>

          <p className="text-gray-300 text-sm mt-2 line-clamp-4">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
