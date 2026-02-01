import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    fetch("https://location-selector.labs.crio.do/countries")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);        // 👈 log the fetched data here
        setCountries(data);
      })
      .catch((err) => console.error(err));

  }, []);


  // Fetch states
  useEffect(() => {
    if (!selectedCountry) return;

    fetch(`https://location-selector.labs.crio.do/country=${selectedCountry}/states`)
      .then((res) => res.json())
      .then((data) => {
        setStates(data)

        //console.log(data);
      })
      .catch((err) => console.error(err));
  }, [selectedCountry]);

  // Fetch cities
  useEffect(() => {
    if (!selectedCountry || !selectedState) return;

    fetch(`https://location-selector.labs.crio.do/country=${selectedCountry}/state=${selectedState}/cities`)
      .then((res) => res.json())
      .then((data) => {
        setCities(data)

        //console.log(data);
      })
      .catch((err) => console.error(err));
  }, [selectedCountry, selectedState]);

  return (
    <>

      <div className="container">
        <div className="title">Select Location</div>

        <div className="dropdowns">
          <select
            className="select-box"
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              setSelectedState("");
              setSelectedCity("");
              setStates([]);
              setCities([]);
            }}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          <select
            className="select-box"
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity("");
              setCities([]);
            }}
            disabled={!selectedCountry}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <select
            className="select-box"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedState}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {selectedCity && (
          <div className="result">
            You selected {selectedCity}, {selectedState}, {selectedCountry}
          </div>
        )}
      </div>
    </>

  );
}

export default App;
