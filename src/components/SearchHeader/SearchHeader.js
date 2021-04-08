function SearchHeader({ lastSearch }) {
    return (
      <header>
        <div className="brand">
          <h1>Search Recipes</h1>
        </div>
        <p className="muted">
          Showing results for <strong>{lastSearch}</strong>
        </p>
      </header>
    );
  }
  export default SearchHeader;