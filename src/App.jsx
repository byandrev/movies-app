import { useState } from "react"

import Header from "./components/Header"
import ListOfMovies from "./components/ListOfMovies"
import Footer from "./components/Footer"
import useMovies from "./hooks/useMovies"

function App() {
  const [title, setTitle] = useState("")
  const [isSort, setIsSort] = useState(false)

  const { movies, error, isLoading, handleSearch } = useMovies({ title, isSort })


  const handleCheckSort = () => {
    setIsSort(prev => !prev)
  }

  return (
    <div className="App">
      <Header
        title={title} 
        setTitle={setTitle} 
        handleSearch={handleSearch} 
        isSort={isSort}
        handleCheckSort={handleCheckSort}
      />

      <ListOfMovies movies={movies} error={error} isLoading={isLoading} />

      <Footer />
    </div>
  )
}

export default App
