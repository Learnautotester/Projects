
import './App.css';
import { useState } from 'react';
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Invalid username or password");
      return;
    }

    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Page</h2>
      {message && <p>{message}</p>}
      <div>
        <label>Username</label>
        <input
  type="text"
  value={username}
  required
  onChange={(e) => setUsername(e.target.value)}
/>
      </div>

      <div>
        <label>Password</label>
        <input
  type="password"
  value={password}
  required
  onChange={(e) => setPassword(e.target.value)}
/>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
