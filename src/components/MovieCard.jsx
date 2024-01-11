import { useState } from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

function MovieCard({ title, poster, year, id, type }) {
  const [imgIsLoaded, setImgIsLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <article className="MovieCard animate__fadeIn">
      <div className="MovieCard-PosterContainer">
        <img
          src={!imgError ? poster : "https://placehold.co/400x600"}
          alt={`Poster movie ${title} - ${year}`}
          className="MovieCard-Poster"
          onLoad={() => setImgIsLoaded(true)}
          onError={() => setImgError(true)}
        />
      </div>

      <div className="MovieCard-Content">
        <h3 className="MovieCard-Title">{title}</h3>
        <p className="MovieCard-Year"><time>{year}</time></p>
      </div>
    </article>
  )
}

export default MovieCard

