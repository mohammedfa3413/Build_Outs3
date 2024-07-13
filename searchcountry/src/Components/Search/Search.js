import React, { useState } from 'react';
import styles from "./Search.module.css";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <center className={styles.container}>
      <input
        onChange={handleSearch}
        className={styles.search}
        placeholder='Search for countries...'
        value={search}
      />
    </center>
  );
}

export default Search;
