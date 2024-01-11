function MovieCard({ title, poster, year, id, type }) {
  return (
    <article className="MovieCard animate__fadeIn">
      <img src={poster} alt={`Poster movie ${title} - ${year}`} className="MovieCard-Poster" />

      <div className="MovieCard-Content">
        <h3 className="MovieCard-Title">{title}</h3>
        <p className="MovieCard-Year"><date>{year}</date></p>
      </div>
    </article>
  )
}

export default MovieCard

