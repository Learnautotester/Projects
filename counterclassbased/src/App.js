import React from "react";
import "./App.css";

class App extends React.Component {
  
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      
      <div>
         <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>

        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;