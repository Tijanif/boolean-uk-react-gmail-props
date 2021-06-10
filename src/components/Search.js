const Search = props => {
  return (
    <div className="search">
      <input
        className="search-bar"
        placeholder="Search mail by sender"
        onChange={props.handleChange}
        value={props.searchInput}
      />
    </div>
  )
}

export default Search
