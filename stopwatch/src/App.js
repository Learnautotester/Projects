
import { useEffect, useState,useRef } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [IsRunning,setIsRunning]=useState(false);
  const intervalRef = useRef(null);
   useEffect(() => {
    if (IsRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // cleanup when stopping or unmounting
    return () => clearInterval(intervalRef.current);
  }, [IsRunning]);

  const handleStartStop=()=>{
  setIsRunning((prev) => !prev);
 
  }
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const minutes = String(Math.floor(seconds / 60)).padStart(1, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return (
    <div>
      <h1>StopWatch</h1>

      <p>Time: {minutes}:{secs}</p>

      <button onClick={handleStartStop}>
        {IsRunning? "Stop" : "Start"}
        </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
