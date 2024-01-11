import InputSearch from "./InputSearch"

function Header({ title, setTitle, handleSearch, isSort, handleCheckSort }) {
  return (
    <header className="Header">
      <h1 className="Header-Title">Movies Search</h1>

      <InputSearch title={title} setTitle={setTitle} handleSearch={handleSearch} />

      <div className="Header-SortFilter">
        <label htmlFor="input-sort">Sort by name</label>
        <input type="checkbox" id="input-sort" checked={isSort} onChange={handleCheckSort} />
      </div>
    </header>
  )
}

export default Header

