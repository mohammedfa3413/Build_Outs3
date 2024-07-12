import React, { useState } from 'react'
import styles from "./Search.module.css"

function Search() {
    const [search,setsearch] = useState("")

    const handelsearch = (e) => {
        setsearch(e.target.value)
    }
  return (
    <center className={styles.container}>
      <input onChange={handelsearch} className={styles.search} placeholder='Search for countries...' value={search}/>
    </center>
  )
}

export default Search
