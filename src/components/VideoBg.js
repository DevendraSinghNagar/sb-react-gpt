const VideoBg = ({ imdbID }) => {
  // Based on imdbID, need to show Video
  return (
    <>
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/-SFcIUEvNOQ?autoplay=1&mute=1&showinfo=0&controls=0&enablejsapi=1&loop=1&playlist=-SFcIUEvNOQ"
      ></iframe>
    </>
  );
};

export default VideoBg;
