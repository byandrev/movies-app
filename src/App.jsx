import { useState } from "react"

import Header from "./components/Header"
import ListOfMovies from "./components/ListOfMovies"
import Footer from "./components/Footer"
import useMovies from "./hooks/useMovies"

function App() {
  const [title, setTitle] = useState("")
  const { movies, error, isLoading, handleSearch } = useMovies({ title })

  return (
    <div className="App">
      <Header title={title} setTitle={setTitle} handleSearch={handleSearch} />

      <ListOfMovies movies={movies} error={error} isLoading={isLoading} />

      <Footer />
    </div>
  )
}

export default App
