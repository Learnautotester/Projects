
import './App.css';
import { useState } from 'react';

function App() {

  const [firstname,setfirstname]=useState("");
  const [lastname,setlastname]=useState("");
  const [display, setDisplay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(firstname + " " + lastname);
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

      
   {display ? <p>Full Name: {display}</p> : ""}
    </div>
  );
}

export default App;
