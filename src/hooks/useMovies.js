import { useEffect, useState, useCallback } from "react"

import { searchMovie } from "../services/moviesService"
import debounce from "just-debounce-it"


function useMovies({ title, isSort }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = useCallback(({ title }) => {
    setIsLoading(true)

    searchMovie({ title })
      .then(data => {
        if (data.Response === "True") {
          setMovies(data.Search)
          setError(null)
        } else {
          throw new Error("Error to get movies")
        }
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err.message)
        setMovies([])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const getMovies = useCallback((movies) => {
    return isSort
            ? [...movies].sort((a, b) => a.Title.localeCompare(b.Title))
            : movies
  }, [isSort, movies])

  const debounceGetMovies = useCallback(
    debounce((title) => {
      handleSearch({ title })
    }, 500), []
  )

  useEffect(() => {
    if (!title) return
    debounceGetMovies(title)
  }, [title, debounceGetMovies])


  return { movies: getMovies(movies), error, isLoading, handleSearch }
}

export default useMovies
