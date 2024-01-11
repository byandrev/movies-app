import Loading from "./Loading";
import MovieCard from "./MovieCard";

function ListOfMovies({ movies, error, isLoading }) {
  return (
    <section>
      {isLoading ? <Loading /> : error ? <p className="Error">{error}</p> : <div className="GridMovies">
        {movies && movies.map(movie => {
          const { Poster, Title, imdbID, Year, Type } = movie;
          return <MovieCard
            key={imdbID}
            id={imdbID}
            title={Title}
            poster={Poster}
            year={Year}
            type={Type}
          >{Title}</MovieCard>
        })}
      </div>}

    </section>
  )
}

export default ListOfMovies

