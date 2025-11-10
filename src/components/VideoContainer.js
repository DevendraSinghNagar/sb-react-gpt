import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";

const VideoContainer = () => {
  const movieList = useSelector((store) => store.movies.newMovies);
  if (!movieList) return;

  return (
    <>
      <VideoTitle {...movieList[0]} />
      <VideoBg {...movieList[0]} />
    </>
  );
};

export default VideoContainer;
