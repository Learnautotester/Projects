
import './App.css';
import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
function App() {

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getCountries() {
      try {
        let response = await fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries");
        // if (!response.ok) throw new Error("Failed to fetch products");
        let data = await response.json();
        //console.log(data);
        if (response.status === 200) {
          setCountries(data);
        }


      }
      catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    getCountries();
  }, [])

  const filteredCountry=countries.filter((country)=>{
    //console.log(country);
    return country.common.toLowerCase().includes(search.toLowerCase())
  });
  return (
    <>


      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchInput"
      />
      <div className="countries-container">
        {filteredCountry.map((country) => (
          <CountryCard
            key={country.common}
            name={country.common}
            flag={country.png}
          />
        ))}
      </div>

    </>
  );
}

export default App;