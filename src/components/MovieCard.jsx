import { TMDB_POSTER_IMG } from "../utils/constants";

const MovieCard = (props) => {
  const {Poster_Img} = props;
  
  return <div >
    <img className="w-48 m-1" src={TMDB_POSTER_IMG + Poster_Img}></img>
  </div>;
};

export default MovieCard;
