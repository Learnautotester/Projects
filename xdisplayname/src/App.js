
import './App.css';
import { useState } from 'react';

function App() {

  const [firstname,setfirstname]=useState("");
  const [lastname,setlastname]=useState("");
  const [submitted, setSubmitted] = useState(false);

   const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
     // prevent page refresh
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            onChange={(e) => setfirstname(e.target.value)}
            type="text"
            value={firstname}
            id="firstName"
            name="firstName"
            required
          />
        </div>

        <br />

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
           onChange={(e) => setlastname(e.target.value)}
           value={lastname}
            type="text"
            id="lastName"
            name="lastName"
            required
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      
  <h2>Full Name: {firstname} {lastname}</h2>

    </div>
  );
}

export default App;
