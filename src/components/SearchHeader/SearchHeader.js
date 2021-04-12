function SearchHeader({ lastSearch }) {
    return (
      <header>
        <div className="brand">
          <h1>The recipes you love, all in one place!</h1>
        </div>
        <p className="last-search">
          Showing results for <strong>{lastSearch}</strong>
        </p>
      </header>
    );
  }
  export default SearchHeader;