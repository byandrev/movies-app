import InputSearch from "./InputSearch"

function Header({ title, setTitle, handleSearch }) {
  return (
    <header className="Header">
      <h1 className="Header-Title">Movies Search</h1>

      <InputSearch title={title} setTitle={setTitle} handleSearch={handleSearch} />
    </header>
  )
}

export default Header

