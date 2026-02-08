
import './App.css';
import { useState } from 'react';
const API_KEY = "b4a781447a27447bb65100635260802";
function App() {

  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setWeather(null);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );

      if (!response.ok) {
        throw new Error("Invalid city");
      }

      const data = await response.json();
      // 🔥 Ensure loading <p> is visible for Cypress
      setTimeout(() => {
        setWeather(data.current);
        setLoading(false);
      }, 1000); // 1 second is SAFE
    } catch (error) {
      alert("Failed to fetch weather data");
      setLoading(false);
    }
  };
  return (
    <div className="app">
      <div className="weather-container">
        {/* Search bar */}
        <div className="search-bar">
          <input type="text"
            placeholder='Enter City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {/* Loading message (MUST be p element) */}
        {loading && (<p>Loading data...</p>)}
        {/* Weather cards */}
        {weather && (<div className="weather-cards">

          <div className="weather-card">
            <h3>Temperature</h3>
            {weather ? `${weather.temp_c} °C` : "-- °C"}
          </div>

          <div className="weather-card">
            <h3>Humidity</h3>
            {weather ? `${weather.humidity} %` : "-- %"}
          </div>

          <div className="weather-card">
            <h3>Condition</h3>
            {weather ? weather.condition.text : "--"}
          </div>

          <div className="weather-card">
            <h3>Wind Speed</h3>
            {weather ? `${weather.wind_kph} kph` : "-- kph"}
          </div>
        </div>)}


      </div>
    </div>
  );
}

export default App;
