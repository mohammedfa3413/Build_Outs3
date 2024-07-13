import React, { useState, useCallback } from 'react';
import styles from "./Search.module.css";
import { debounce } from 'lodash';

function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      onSearch(searchTerm);
    }, 300),
    []
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <center className={styles.container}>
      <input
        type='text'
        onChange={handleSearch}
        className={styles.search}
        placeholder='Search for countries...'
        value={search}
      />
    </center>
  );
}

export default Search;
