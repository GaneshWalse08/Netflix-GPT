import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useState } from "react";
import Header from "./Header";

const MoviesPage = () => {
  const { category } = useParams();
  const movieStore = useSelector((store) => store.movies);

  const movies = movieStore[category];

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
