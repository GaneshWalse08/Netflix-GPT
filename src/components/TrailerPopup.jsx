import { useEffect, useState } from "react";
import { API_Options } from "../utils/constants";

const TrailerPopup = ({ movie, onClose }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    fetchTrailer();
  }, []);

  const fetchTrailer = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
        API_Options
      );

      const json = await data.json();

      const trailer = json.results.find(
        (video) =>
          video.type === "Trailer" &&
          video.site === "YouTube"
      );

      if (trailer) {
        setTrailerKey(trailer.key);
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999]">
      <div className="bg-gray-900 p-4 rounded-lg w-[900px] relative">

        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-white text-2xl cursor-pointer"
        >
          ✕
        </button>

        <h1 className="text-white text-2xl font-bold mb-4">
          {movie.title}
        </h1>

        {trailerKey ? (
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            title="Movie Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <p className="text-white text-center py-10">
            Loading trailer...
          </p>
        )}
      </div>
    </div>
  );
};

export default TrailerPopup;