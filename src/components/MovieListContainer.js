import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieListContainer = () => {
  const getMovieList = useSelector((store) => store.movies?.newMovies);
  console.log(getMovieList);

  // if (!getMovieList) return;
  return (
    getMovieList && (
      <article className="bg-black">
        <div className="-mt-28 relative">
          <h2 className="text-3xl my-2 text-white">Recent Movies</h2>
          <div className="flex">
            {getMovieList.map((item) => (
              <MovieCard key={item.imdbID} {...item} />
            ))}
          </div>
        </div>
      </article>
    )
  );
};

export default MovieListContainer;
