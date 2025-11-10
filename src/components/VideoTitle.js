const VideoTitle = ({ Poster, Title, Year }) => {
  return (
    <article className=" absolute flex flex-wrap text-white bg-gradient-to-r from-black w-[100%] aspect-video">
      <div className="w-1/4 p-8 mt-32">
        <h2 className="text-6xl mb-3">{Title}</h2>
        <span>{Year}</span>
        <div className=" mt-4">
          <button className="bg-blue-500 bg-opacity-50 rounded p-4 mr-4">
            Play
          </button>
          <button className="bg-blue-500 bg-opacity-50  rounded p-4 ">
            More info
          </button>
        </div>
      </div>
    </article>
  );
};

export default VideoTitle;
