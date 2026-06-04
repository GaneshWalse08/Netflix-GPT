import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // console.log("movies" , movies);

  if(!movies) return;

  const mainMovie = movies[0];

  console.log("main Movie", mainMovie);

  return(
    <div>
      <VideoTitle title={mainMovie.title} overview={mainMovie.overview}/>
      <VideoBackground movieID={mainMovie.id}/>
    </div>
  )
};

export default MainContainer;
