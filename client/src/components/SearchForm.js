import React from 'react';

const SearchForm = ({ searchTerm, handleSearchTermChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for articles"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <button type="submit">Fetch Articles</button>
    </form>
  );
};

export default SearchForm;
