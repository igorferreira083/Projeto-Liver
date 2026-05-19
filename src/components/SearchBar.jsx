function SearchBar({ search, setSearch }) {
    return (
      <div className="search-bar-container" style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Pesquise por título ou artista..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
            outline: "none"
          }}
        />
      </div>
    );
  }
  
  export default SearchBar;