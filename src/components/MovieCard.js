const MovieCard = ({ Poster, Title }) => {
  console.log(Poster, Title);

  return (
    <figure className="w-28">
      <img className="h-full" src={Poster} alt={Title} />
    </figure>
  );
};

export default MovieCard;
