import { useEffect, useState, useCallback } from "react"

import { searchMovie } from "../services/moviesService"
import debounce from "just-debounce-it"


function useMovies({ title }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = ({ title }) => {
    // Avoid multiples fetchs
    // if (isLoading) return

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
  }

  const debounceGetMovies = useCallback(
    debounce((title) => {
      handleSearch({ title })
    }, 500), []
  )

  useEffect(() => {
    if (!title) return

    // handleSearch()
    debounceGetMovies(title)
  }, [title])


  return { movies, error, isLoading, handleSearch }
}

export default useMovies
