function InputSearch({ title, setTitle, handleSearch }) {
  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  }

  return (
    <div>
      <form className="Form-InputSearch" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title movie..." value={title} onChange={handleChange} />
        <button className="Button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default InputSearch

