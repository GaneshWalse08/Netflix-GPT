
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";


const VideoBackground = ({ movieID }) => {

  useMovieTrailer(movieID);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  return (
    <div className="w-screen h-screen">
      <iframe 
      className="w-full h-full pointer-events-none"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
