import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './Components/Search/Search';
import Cards from './Components/Cards/Cards';
import axios from 'axios';

function App() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCountry, setFilteredCountry] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setCountry(res.data);
        setFilteredCountry(res.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = country.filter(c =>
      c.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountry(filtered);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Search country={country} onSearch={handleSearch} />
      <Cards country={filteredCountry} />
    </>
  );
}

export default App;
