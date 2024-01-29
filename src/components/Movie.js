export default function Movie({ movie, onSelectMovie }) {
  const url = movie.Poster.length > 3 ? movie.Poster : "🖼️";
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={url} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
