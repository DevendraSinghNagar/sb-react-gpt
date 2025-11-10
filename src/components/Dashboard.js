import useFetchMovie from "../hooks/useFetchMovie";
import MovieListContainer from "./MovieListContainer";
import VideoContainer from "./VideoContainer";

const Dashboard = () => {
  useFetchMovie();

  return (
    <>
      {/* 
      VideoContainer 
        VideoBackgound
        VideoTitle
      MovieListContainer
        cards
      */}
      <VideoContainer />
      <MovieListContainer />
    </>
  );
};

export default Dashboard;
