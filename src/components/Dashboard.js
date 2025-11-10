import { useSelector } from "react-redux";
import useFetchMovie from "../hooks/useFetchMovie";
import MovieListContainer from "./MovieListContainer";
import VideoContainer from "./VideoContainer";
import SearchContainer from "./gpt/SearchContainer";

const Dashboard = () => {
  useFetchMovie();
  const checkGPTEnable = useSelector((store) => store.gpt?.isGPTEnable);

  {
    /* 
      VideoContainer 
        VideoBackgound
        VideoTitle
      MovieListContainer
        cards

      GPT Search
        Header - add button
        Search Form
        Search data page
      */
  }
  return checkGPTEnable ? (
    <SearchContainer />
  ) : (
    <>
      <VideoContainer />
      <MovieListContainer />
    </>
  );
};

export default Dashboard;
