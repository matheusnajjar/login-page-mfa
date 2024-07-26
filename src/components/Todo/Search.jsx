import PropTypes from 'prop-types';

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Search</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for your task..."
      />
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Search;
