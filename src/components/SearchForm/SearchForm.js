function SearchForm({ handleSubmit, handleChange, searchString }) {
    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
        <input
          className="search-bar"
          placeholder="Search"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={searchString}
          placeholder="Find something yummy..."
        />
        <button type="submit">Search
        </button>
      </form>
    );
  }
  export default SearchForm;