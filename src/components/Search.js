const Search = props => {
  return (
    <div className="search">
      <input
        className="search-bar"
        placeholder="Search mail by title"
        onChange={props.handlechange}
        value={props.searchInput}
      />
    </div>
  )
}

export default Search
