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
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (searchTerm) => {
    const trimmedTerm = searchTerm.trim().toLowerCase();
    if (!trimmedTerm) {
      setFilteredCountry(country);
    } else {
      const filtered = country.filter(c =>
        c.name.common.toLowerCase().includes(trimmedTerm)
      );
      setFilteredCountry(filtered);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}. Please try again later.</div>;
  }

  return (
    <>
      <Search country={country} onSearch={handleSearch} />
      <Cards country={filteredCountry} />
    </>
  );
}

export default App;
