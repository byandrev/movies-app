import { useState } from "react"
import Header from "./components/Header"
import ListOfMovies from "./components/ListOfMovies"
import Footer from "./components/Footer"

import { searchMovie } from "./services/moviesService"

function App() {
  const [title, setTitle] = useState("")
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = () => {
    setIsLoading(true)

    searchMovie({ title })
      .then(data => {
        console.log(data)


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

  return (
    <div className="App">
      <Header title={title} setTitle={setTitle} handleSearch={handleSearch} />

      <ListOfMovies movies={movies} error={error} isLoading={isLoading} />

      <Footer />
    </div>
  )
}

export default App
