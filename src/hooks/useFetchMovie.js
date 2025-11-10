import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewMovies } from "../utils/movieSlice";

const useFetchMovie = () => {
  const dispatch = useDispatch();
  const getMovieList = useSelector((store) => store.movies?.newMovies);

  const getMovies = async () => {
    const fetchAPI = await fetch(
      "https://www.omdbapi.com/?s=inception&apikey=9dd1a0de"
    );
    const data = await fetchAPI.json();
    // console.log(data?.Search);

    dispatch(addNewMovies(data?.Search));
  };

  useEffect(() => {
    !getMovieList && getMovies();
  }, []);
};

export default useFetchMovie;
