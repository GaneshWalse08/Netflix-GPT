import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import Header from "./Header";
import { API_Options } from "../utils/constants";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();
  // const movieStore = useSelector((store) => store.movies);

  // const movies = movieStore[category];

  const fetchMovies = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const endpointMap = {
        popularMovies: "popular",
        topRatedMovies: "top_rated",
        upcomingMovies: "upcoming",
        nowPlayingMovies: "now_playing",
      };

      const endpoint = endpointMap[category];

      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${endpoint}?page=${page}`,
        API_Options,
      );

      const json = await data.json();

      setMovies((prev) => [...prev, ...json.results]);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (bottom && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(category);

  let title = "";

  if (category === "nowPlayingMovies") {
    title = "Now Playing";
  } else if (category === "popularMovies") {
    title = "Popular Movies";
  } else if (category === "topRatedMovies") {
    title = "Top Rated Movies";
  } else {
    title = "Upcoming Movies";
  }
  return (
    <div className="bg-black min-h-screen">
      <Header />

      <h1 className="text-3xl font-bold text-center text-red-700 py-8 pt-32">
        {title}
      </h1>

      <div className="flex flex-wrap justify-center">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
